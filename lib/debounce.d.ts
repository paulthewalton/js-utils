/**
 * Debounce a function by setting a minimum elapsed time between invocations.
 * * When called before the elapsed time, will return the last result
 * * Debounced function has 2 methods:
 *   - flush(), which cancels the timer and immediately returns the result of the invoked function, and
 *   - cancel(), which just cancels the timer.
 * @summary Debounce a function by setting a minimum elapsed time between invocations.
 * @category Functional Programming
 * @template T
 * @param {(...args: any[]) => T} fn Function to debounce.
 * @param {number} wait Minimum elapsed time between invoking `fn`.
 * @param {boolean} [leading=false] Optional. Whether to invoke the function the first time is is called before waiting. Default false.
 * @returns {(...args: any[]) => T} Debounced function.
 */
export function debounce<T>(fn: (...args: any[]) => T, wait: number, leading?: boolean): (...args: any[]) => T;
