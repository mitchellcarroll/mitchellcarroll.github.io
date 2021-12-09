import * as s from './types/swaggerSchema'

export class CitiesLookup {
  countryCode: string
  data: s.Components.Schemas.CitiesRow[]

  constructor (countryCode: string) {
    this.countryCode = countryCode
    this.data = this.fetchData()
  }

  fetchData () {
    const data: s.Components.Schemas.CitiesRow[] = []

    window
      .fetch(
        `https://powerful-garden-13922.herokuapp.com/https://docs.openaq.org/v2/cities?limit=100&page=1&offset=0&sort=asc&country_id=${this.countryCode}&order_by=city`
      )
      .then((response: Response) => response.json())
      .then((d: s.Components.Schemas.OpenAQCitiesResult) => {
        d.results.forEach(c => data.push(c))
      })

    return data
  }
}
