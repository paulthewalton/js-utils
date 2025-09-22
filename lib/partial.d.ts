/**
 * Partially apply arguments to a function without setting `this`.
 * * Use `_` as a placeholder value, final arguments will fill those positions from left-to-right, appending any remaining arguments.
 * @summary Partially apply arguments to a function without setting `this`.
 * @category Functional Programming
 * @arg {function} fn Function to partially apply.
 * @arg {...*} partials Arguments to partially apply to `fn`.
 * @returns {function}
 * @property {string} placeholder "_", can be used as placeholder instead of the string literal.
 * @example
 * let forceGreaterThanZero = partial(Math.max, 0);
 * forceGreaterThanZero(myNum) // ~= Math.max(0, myNum)
 */
export function partial(fn: Function, ...partials: any[]): Function;
export namespace partial {
    const placeholder: string;
}
