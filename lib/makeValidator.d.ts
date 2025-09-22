/**
 * Turn a series of functions into a testing function.
 * @category Functional Programming
 * @arg {function[]} fns Array of functions to test arguments.
 * @arg {*|boolean} strictMode Whether tested arguments have to pass all.
 *      tests (true/false -> AND/OR)
 * @return {function}
 */
export function makeValidator(fns: Function[], strictMode: any | boolean): Function;
