/**
 * Make sure that a value is an array.
 * @category Arrays
 * @arg {*} value - Value to check.
 * @arg {number} [minLength=0] - Minimum length for returned array.
 * @arg {*} [fill] - Value to insert when filling. If function, will be called with the current index, inserting the returned value.
 * @returns {Array}
 */
export function assertArray(value: any, minLength?: number, fill?: any): any[];
