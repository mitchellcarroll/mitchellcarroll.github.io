import { LocationLookup } from './locations'
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
    const cityInputId = this.countryInput.dataset.cityInput

    if (cityInputId != undefined && cityInputId.length > 0) {
      const cityInput: HTMLInputElement | null = document.querySelector(
        cityInputId
      )

      if (cityInput != null) {
        const parentContainer = cityInput.closest('.cityInputContainer')
        if (parentContainer != null) {
          const suggestionEle: HTMLUListElement | null = parentContainer.querySelector(
            '.suggestions'
          )

          if (suggestionEle != null) {
            cityInput.addEventListener('click', () => {
              this.displayMatches(cityInput, suggestionEle)
            })

            cityInput.addEventListener('keyup', () => {
              this.displayMatches(cityInput, suggestionEle)
            })
          }
        }
      }
    }
  }

  findMatches (wordToMatch: string) {
    return this.data.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi')
      return place.city.match(regex)
    })
  }

  displayMatches (input: HTMLInputElement, listEle: HTMLUListElement) {
    const matches = this.findMatches(input.value)
    if (matches.length !== 0) {
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
    } else {
      const html = `<li
            class='list-group-item'>
            <span class='country-name'>No Result</span>
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
    this.setupCityClick(input, listEle)
  }

  setupCityClick (input: HTMLInputElement, listEle: HTMLUListElement) {
    const listItems = listEle.querySelectorAll('li')

    listItems.forEach(li => {
      li.addEventListener('click', () => {
        const cityName = li.dataset.name

        if (cityName != undefined && cityName.length > 0) {
          input.value = cityName

          const countryCode = li.dataset.country
          if (countryCode != undefined && countryCode.length > 0) {
            if (input.dataset.table != undefined) {
              const locationQuery = new LocationLookup(
                cityName,
                countryCode,
                input.dataset.table
              )

              locationQuery.displayResults()
            }
          }
        }
        if (listEle.classList.contains('active')) {
          listEle.classList.remove('active')
        }
      })
    })
  }
}
