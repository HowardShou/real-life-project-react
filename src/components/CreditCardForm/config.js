//config and tools
const BRAND = {
  VISA: 'visa',
  MASTER: 'master',
  JCB: 'jcb',
  UNION: 'union',
}

const yearsOptions = () => {
  let current = new Date().getFullYear()
  let options = [
    <option key={'init'} value={'Year'} className='shouldHide'>
      Year
    </option>,
  ]
  for (let i = 0, l = 20; i < l; i++) {
    let next = current++
    options.push(
      <option key={`year_${next}`} value={next}>
        {next}
      </option>
    )
  }
  return options
}

const years = yearsOptions()

const monthsOptions = () => {
  let current = 1
  let options = [
    <option key={'init'} value={'Month'} className='shouldHide'>
      Month
    </option>,
  ]
  for (let i = 1, l = 12; i <= l; i++) {
    let next = current++
    options.push(
      <option key={`month_${next}`} value={next}>
        {next}
      </option>
    )
  }
  return options
}

const months = monthsOptions()

const statusDetector = (focusStatus) =>
  focusStatus === null ? 'front-side' : focusStatus === true ? 'reverse-side' : 'front-side'

const companyDetector = (number) => {
  const currentDigit = number.length
  if (number === '') return BRAND.VISA
  let twoDigits, fourDigits
  if (currentDigit >= 2) twoDigits = number[0] + number[1]
  if (currentDigit >= 4) fourDigits = number[0] + number[1] + number[2] + number[3]

  if (number[0] === '4') return BRAND.VISA
  else if (Number(twoDigits) > 50 && Number(twoDigits) < 56) return BRAND.MASTER
  else if (Number(twoDigits) === 62) return BRAND.UNION
  else if (Number(fourDigits) > 3527 && Number(fourDigits) < 3590) return BRAND.JCB
  else return BRAND.VISA
}

export { years, months, statusDetector, companyDetector }
