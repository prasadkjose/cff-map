import { Services, getServiceNames, getStations } from '../stations'

describe('Stations model', () => {
  it('extracts service names', () => {
    const services = [
      'Gepäckausgabe', // LUGGAGE
      'Fundservice', // (unknown)
      'Geldwechsel', // MONEY_EXCHANGE
      'Western-Union', // MONEY_EXCHANGE
      'Businesstravel-Service-Center' // LOUNGE
    ]
    expect(getServiceNames(services)).toEqual([
      Services.LUGGAGE,
      Services.MONEY_EXCHANGE,
      Services.LOUNGE
    ])
  })
  // Changed the Test to accomodate the current format
  it('Transforms raw API data,groups records by postal code and adds services', () => {
     const services = [
    {fields:{plz: 1215, service: "Billette, Abonnemente, Freizeitangebote", ort: 'Genève', mail: "geap300@cff.ch", adresse: "Route de l'Aéroport", geopos: [ 46.2325293452, 6.11198571992 ]}}
    ]
    const stations = getStations(services)
    expect(stations).toHaveLength(1)    
    expect(stations[0].ort).toEqual('Genève')
    expect(stations[0].services).toEqual([])
  })
})
