/**
 * Copy properties from one object to another recursively.
 * @category Object
 * @arg {Object} target - Target object.
 * @arg {Object} extensions - Object with properties to copy.
 * @arg {number} [depth=-1] - Max depth for recursion. Negative value -> no limit.
 * @returns {Object}
 */
export function extend(target: any, extensions: any, depth?: number): any;
