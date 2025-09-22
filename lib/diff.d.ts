/**
 * Get the difference between one object and another recursively.
 * @category Object
 * @arg {Object} source - Object to get differences from.
 * @arg {Object} compareTo - Object to compare values to.
 * @arg {number} [depth=-1] - Max depth for recursion. Negative value -> no limit.
 * @returns {Object}
 */
export function diff(source: any, compareTo: any, depth?: number): any;
