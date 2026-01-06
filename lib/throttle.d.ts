/**
 * Throttle a high-frequecy and/or resource intensive function.
 * @category Functional Programming
 * @arg {(...args: any[]) => T} fn Function to throttle.
 * @arg {number} wait Minimum number of millseconds to wait between calls.
 * @returns {(...args: any[]) => T} Throttled function.
 * @template T
 */
export function throttle<T>(fn: (...args: any[]) => T, wait: number): (...args: any[]) => T;
