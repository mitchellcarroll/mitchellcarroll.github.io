import * as s from './types/swaggerSchema'

export class CitiesLookup {
  countryCode: string
  data: s.Components.Schemas.CitiesRow[]
  countryInput: HTMLInputElement

  constructor (countryCode: string, countryInput: HTMLInputElement) {
    this.countryCode = countryCode
    this.data = this.fetchData()
    this.countryInput = countryInput
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

  initialize () {
    const parent = this.countryInput

    // if (parent != null) {
    //   const suggestionEle: HTMLUListElement | null = parent.querySelector(
    //     '.suggestions'
    //   )

    //   if (suggestionEle != null) {
    //     input.addEventListener('click', () => {
    //       this.displayMatches(input, suggestionEle)
    //     })

    //     input.addEventListener('keyup', () => {
    //       this.displayMatches(input, suggestionEle)
    //     })
    //   }
    // }
  }

  findMatches (wordToMatch: string) {
    return this.data.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi')
      // return place.name.match(regex) || place.code.match(regex)
      return place.city.match(regex)
    })
  }

  displayMatches (input: HTMLInputElement, listEle: HTMLUListElement) {
    const matches = this.findMatches(input.value)
    const html = matches
      .map(place => {
        return `
      <li class="list-group-item" data-name="${place.city}" data-country="${place.country}" data-location="${place.locations}">
        <span class="country-name">${place.city}</span>
      </li>
    `
      })
      .join('')

    listEle.innerHTML = html
    // this.setupCountryClick(input, listEle)
  }
}
