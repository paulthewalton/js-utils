/**
 * Get a rotated copy of an array.
 * @category Arrays
 * @arg {Array} arr
 * @arg {number} [rotation=1] Index to rotate to / Number of places to rotate by.
 * @return {Array}
 * @example
 * let arr = [1,2,3,4];
 * rotateArray(arr); // -> [2,3,4,1]
 * rotateArray(arr, 3); // -> [4,1,2,3]
 * rotateArray(arr, -2); // -> [3,4,1,2]
 */
export function rotateArray(arr: any[], rotation?: number): any[];
