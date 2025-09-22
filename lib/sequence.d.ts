/**
 * Sequence multiple functions into one function.
 * @category Functional Programming
 * @arg {...function} fns Callable functions.
 * @returns {function}
 * @example
 * var abc = sequence(a, b, c);
 * abc(x); // -> c(b(a(x)))
 */
export function sequence(...fns: Function[]): Function;
