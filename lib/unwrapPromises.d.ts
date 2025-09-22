/**
 * Unwrap promises once resolved.
 * ! Make sure all individual promises have potential rejections handled, as each will be `await`-ed without error handling.
 * @summary Unwrap promises once resolved.
 * @category Async
 * @arg {...Promise.<*>} promises
 * @returns {Array.<*>}
 */
export function unwrapPromises(...promises: Promise<any>[]): Array<any>;
