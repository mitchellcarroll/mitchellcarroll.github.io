import { Countries } from './countries'

document.addEventListener('DOMContentLoaded', () => {
  const countryInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    '.js-country-input'
  )

  const countryOptions = new Countries(countryInputs)
  countryOptions.initialize()
})
