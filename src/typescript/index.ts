import { Countries } from './countries'

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')

  if (form != null) {
    form.reset()
  }
  const countryInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    '.js-country-input'
  )

  const countryOptions = new Countries(countryInputs)
  countryOptions.initialize()
})
