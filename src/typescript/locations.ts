import * as s from './types/swaggerSchema'

export class LocationLookup {
  cityName: string
  countryCode: string
  table: HTMLTableElement | null
  data: s.Components.Schemas.ProjectsRow[]
  template: HTMLTemplateElement | null

  constructor (cityName: string, countryCode: string, tableLocation: string) {
    this.countryCode = countryCode
    this.cityName = cityName
    this.table = document.querySelector(tableLocation)
    this.template = document.querySelector('.tableBodyRow')
    this.data = this.fetchData()
  }

  fetchData () {
    const data: s.Components.Schemas.ProjectsRow[] = []

    const encodedCityName = encodeURIComponent(this.cityName)

    window
      .fetch(
        `https://powerful-garden-13922.herokuapp.com/https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/locations?limit=100&page=1&offset=0&sort=desc&radius=1000&country_id=${this.countryCode}&city=${encodedCityName}&order_by=lastUpdated&dumpRaw=false`
      )
      .then(response => response.json())
      .then((d: s.Components.Schemas.OpenAQProjectsResult) => {
        d.results.forEach(c => data.push(c))
      })

    return data
  }

  displayResults() {
    
    this.data.forEach(r => {
      console.log(r)
      if (this.template != null && this.template.content != null) {
        const template = this.template.content.cloneNode(true) as HTMLElement
        const siteNameCell = template.querySelector('.siteName')
        if (siteNameCell != null) {
          siteNameCell.textContent = r.name
        }

        r.parameters.forEach(p => {
          const parameterCell = template.querySelector(
            `[data-parameter="${p.parameter}"]`
          )

          if (parameterCell != null) {
            parameterCell.textContent = String(p.average)
          }
        })

        if (this.table != null) {
          if (this.table.querySelector('tbody') != null) {
            const tbodyEle = this.table.querySelector('tbody')
            if (tbodyEle != null) {
              tbodyEle.appendChild(template)
            }
          }
        }
      }
    })
  }
}
