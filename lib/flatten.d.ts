/**
 * Flatten an array up to a set number of levels.
 * @category Arrays
 * @arg {Array} arr - Array to flatten.
 * @arg {number} [depth=1] - Max depth of flattening.
 * @returns {Array}
 * @example
 * flatten([1,2,[3,4],5]); // -> [1,2,3,4,5]
 * flatten([1,2,[3,[4]],5], 1); // -> [1,2,3,[4],5]
 * flatten([1,2,[3,[[[[4]]]]],5], Infinity); // -> [1,2,3,4,5]
 */
export function flatten(arr: any[], depth?: number): any[];
