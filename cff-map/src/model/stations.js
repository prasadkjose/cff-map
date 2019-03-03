import groupBy from 'lodash/groupBy'
import flow from 'lodash/flow'



export const Services = {
  LUGGAGE: 'LUGGAGE',
  LOUNGE: 'LOUNGE',
  MONEY_EXCHANGE: 'MONEY_EXCHANGE'
}

export const ServicesMapping = {
  'Gepäckausgabe': Services.LUGGAGE,
  'Gepäckaufbewahrung': Services.LUGGAGE,
  'Businesstravel-Service-Center': Services.LOUNGE,
  'Geldwechsel': Services.MONEY_EXCHANGE,
  'Western Union': Services.MONEY_EXCHANGE
}

/**
 * Translates and filter raw service names (remove duplicates)
 * @param {Array} rawServices - service names from SBB
 */
var rawServ = rawServices => rawServices.map(s => ServicesMapping[s]).filter(Boolean)
export const getServiceNames = rawServ
/**
 * Selects only necessary fields from records
 * @param {Array} records - A list of records (SBB api response)
 */

var rec= records => records.filter(r => r.fields && r.fields.geopos).map((record) => {
  const { recordid, fields } = record
  const [lat, lng] = fields.geopos
  return {
    id: recordid,
    ort: fields.ort,
    plz: fields.plz,
    adresse: fields.adresse,
    mail: fields.mail,
    service: fields.service,
    geopos: { lng, lat }
  }
})

export const buildRecords = rec
/**
 * Get a list of stations with their services.
 * @param {Array} records - A list of records
 * @returns {Array}
 */

const buildStation = (services) => 
  { 
    const baseService = services[0]
    const rawServiceNames = services.map(s => s.service)
    return {
      ...baseService,
      services: getServiceNames(rawServiceNames)
    }
  }

const addServices = (recordsByPostalCode) => {
  const records = Object.keys(recordsByPostalCode).map((code) => {
    const services = recordsByPostalCode[code]
    return buildStation(services)
  })
  return records
}
export const getStations = (records) => {
  // Data Transformation
  const record = rec(records)
  // Data Grouping based on Area code
  const x = groupBy(record, rec => rec.plz)
  // add services 
  const y = addServices(x)   
  return y
}
