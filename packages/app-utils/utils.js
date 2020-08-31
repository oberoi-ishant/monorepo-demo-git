/**
 * Format the currency values based on locale
 * @param {Number} number
 * @param {String} format
 * @param {String} currency
 * @returns String
 */
function currencyFormat ({ number, format, currency }) {
  return new Intl.NumberFormat(format, {
    style: 'currency',
    currency
  }).format(number);
}

export default {
  currencyFormat
}
