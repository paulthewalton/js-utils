/**
 * Check whether any number of values are of the same type.
 * * checks typeof and object/function constructors.
 * @summary Check whether any number of values are of the same type.
 * @category Type
 * @arg {*} value - All other values are tested agains this value.
 * @arg {...*} values
 * @returns {boolean}
 */
export function areSameType(value: any, ...values: any[]): boolean;
