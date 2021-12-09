import * as s from './types/swaggerSchema'

export class Countries {
  data: s.Components.Schemas.CountriesRow[]
  countryInputs: NodeListOf<HTMLInputElement>

  constructor (countryInputs: NodeListOf<HTMLInputElement>) {
    this.data = this.fetchData()
    this.countryInputs = countryInputs
  }

  initialize () {
    this.countryInputs.forEach(input => {
      const parent = input.closest('.countryInputContainer')

      if (parent != null) {
        const suggestionEle: HTMLUListElement | null = parent.querySelector(
          '.suggestions'
        )
        if (suggestionEle != null) {
          // show initial
          // this.displayMatches(input, this.data, suggestionEle)

          input.addEventListener('keyup', () => {
            this.displayMatches(input, suggestionEle)
          })
        }
      }
    })
  }

  fetchData () {
    let data: s.Components.Schemas.CountriesRow[] = []

    window
      .fetch(
        'https://powerful-garden-13922.herokuapp.com/https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/countries?limit=200&page=1&offset=0&sort=asc&order_by=country'
      )
      .then(response => response.json())
      .then((d: s.Components.Schemas.OpenAQCountriesResult) => {
        d.results.forEach(c => data.push(c))
      })

    console.log(data)

    return data
  }

  findMatches (wordToMatch: string) {
    return this.data.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi')
      return place.name.match(regex) || place.code.match(regex)
    })
  }

  displayMatches (input: HTMLInputElement, listEle: HTMLUListElement) {
    const matches = this.findMatches(input.value)
    const html = matches
      .map(place => {
        return `
      <li data-name="${place.name}" data-country-code=${place.code}>
        <span class="country-name">${place.name}</span>
      </li>
    `
      })
      .join('')

    listEle.innerHTML = html
  }
}
