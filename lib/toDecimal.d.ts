/**
 * Cast a single value to decimal of specified precision.
 * * Returns 0 if an array with length < 1 or string with non-numeral characters.
 * @summary Cast a single value to decimal of specified precision.
 * @category Math
 * @arg {number} digitsAfterDecimal Integer number of significant digits after decimal.
 * @arg {*} value
 * @returns {number}
 */
export function toDecimal(digitsAfterDecimal: number, value: any): number;
