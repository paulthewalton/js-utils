/**
 * @typedef {Promise<T>} VerbosePromise<T>
 * @global
 * @category Async
 * @property {boolean} isFulfilled Promise has been resolved.
 * @property {boolean} isRejected Promise has been rejected.
 * @property {boolean} isPending Promise is not yet settled.
 * @template T
 */
/**
 * This function allow you to modify a JS Promise by adding some status properties.
 *
 * Based on: http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved
 *
 * But modified according to the specs of promises : https://promisesaplus.com/
 * @summary Add status props to a Promise.
 * @category Async
 * @arg {Promise<T>} promise
 * @returns {VerbosePromise<T>}
 * @template T
 */
export function makeVerbosePromise<T>(promise: Promise<T>): VerbosePromise<T>;
/**
 * <T>
 */
export type VerbosePromise<T> = Promise<T>;
