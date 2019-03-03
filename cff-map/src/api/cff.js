import querystring from 'querystring'
import { buildRecords, getStations } from '../model/stations'

/**
 * API client for CFF-SBB
 */
export default class CFFClient {
  constructor(baseUrl = 'https://data.sbb.ch/api/records/1.0/') {
    this.baseUrl = baseUrl
  }

  request({ path, query = {} }) {
    const params = querystring.stringify(query)
    const url = `${this.baseUrl}${path}?${params}`

    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status} error requesting ${res.url}: ${res.statusText}`)
        }
        return res.json()
      })
  }

  /**
   * Get the list of stations
   * @param {number} limit - maximum number of rows to return
   * @param {number} offset - number of rows to skip
   */
  getStations(limit, offset = 0) {
    return this.request({
      path: '/search',
      query: {
        dataset: 'kontaktadressen',
        facet: 'service',
        rows: limit,
        start: offset
      }
    })
      .then((data) => {
        // FIXED : The data transormation is done in the getStations() Method
        return getStations(data.records)
      })
  }
}
