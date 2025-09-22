/**
 * Get a formatted string representation of time in seconds.
 * @category String
 * @arg {number} seconds - Time in seconds.
 * @arg {boolean} [forceHours=false] - Whether to include hours in the output when time is less than 1 hour.
 * @returns {string} Formatted time string.
 * @example
 * formatSeconds(27); // => "0:27"
 * formatSeconds(3822); // => "1:03:42"
 */
export function formatSeconds(seconds: number, forceHours?: boolean): string;
