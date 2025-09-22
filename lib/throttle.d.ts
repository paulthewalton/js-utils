/**
 * Throttle a high-frequecy and/or resource intensive function.
 * @category Functional Programming
 * @arg {function} fn Function to throttle.
 * @arg {number} wait Minimum number of millseconds to wait between calls.
 * @returns {function} Throttled function.
 */
export function throttle(fn: Function, wait: number): Function;
