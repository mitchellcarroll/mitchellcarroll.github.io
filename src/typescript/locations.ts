import * as s from './types/swaggerSchema'

export class LocationLookup {
  countryCode: string
  data: s.Components.Schemas.CitiesRow[]
  cityName: string
  constructor (countryCode: string, cityName: string) {
    this.countryCode = countryCode
    this.cityName = cityName
    this.data = this.fetchData()
  }

  fetchData () {
    const data: s.Components.Schemas.CitiesRow[] = []
    return data
  }
}
