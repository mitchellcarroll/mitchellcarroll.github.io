import * as s from './types/swaggerSchema'
import { CitiesLookup } from './cities'

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
          input.addEventListener('click', (_event: MouseEvent) => {
            this.displayMatches(input, suggestionEle)
          })

          input.addEventListener('keyup', (_event: KeyboardEvent) => {
            this.displayMatches(input, suggestionEle)
          })
        }
      }
    })
  }

  fetchData () {
    const data: s.Components.Schemas.CountriesRow[] = []

    window
      .fetch(
        'https://powerful-garden-13922.herokuapp.com/https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/countries?limit=200&page=1&offset=0&sort=asc&order_by=country'
      )
      .then(response => response.json())
      .then((d: s.Components.Schemas.OpenAQCountriesResult) => {
        d.results.forEach(c => data.push(c))
      })

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

    const length = matches.length

    if (length !== 0) {
      const html = matches
        .map(place => {
          return `
      <li class="list-group-item" data-name="${place.name}" data-country-code=${place.code}>
        <span class="country-name">${place.name}</span>
      </li>
    `
        })
        .join('')

      listEle.innerHTML = html
    } else {
      const html = `<li class="list-group-item">
        <span class="country-name">No Result</span>
      </li>`
      listEle.innerHTML = html
    }

    listEle.classList.add('active')

    window.addEventListener('click', (event: MouseEvent) => {
      event.stopPropagation()
      const isOutsideMenu =
        !listEle.contains(event.target as HTMLElement) &&
        !input.contains(event.target as HTMLElement)

      if (isOutsideMenu) {
        listEle.classList.remove('active')
      }
    })
    this.setupCountryClick(input, listEle)
  }

  setupCountryClick (input: HTMLInputElement, listEle: HTMLUListElement) {
    const listItems: NodeListOf<HTMLLIElement> = listEle.querySelectorAll('li')
    listItems.forEach(li => {
      li.addEventListener('click', () => {
        if (li.dataset.name != undefined) {
          input.value = li.dataset.name
        }

        const countryCode = li.dataset.countryCode
        if (countryCode != undefined && countryCode.length > 0) {
          const cityInput = new CitiesLookup(countryCode, input)
          cityInput.initialize()

          if (listEle.classList.contains('active')) {
            listEle.classList.remove('active')
          }

          if (input.id.includes('1')) {
            const tableBody: HTMLTableSectionElement | null = document.querySelector(
              '.tableOne tbody'
            )

            if (tableBody != null) {
              Array.from(tableBody.rows).forEach(row => {
                row.remove()
              })
            }
          } else {
            const tableBody: HTMLTableSectionElement | null = document.querySelector(
              '.tableTwo tbody'
            )

            if (tableBody != null) {
              Array.from(tableBody.rows).forEach(row => {
                row.remove()
              })
            }
          }
        }
      })
    })
  }
}
