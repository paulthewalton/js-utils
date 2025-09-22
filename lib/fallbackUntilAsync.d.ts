/**
 * Resolve to the first argument that satisfies an async validation callback, or the last value provided.
 * * Resolves to `undefined` if no values are passed.
 * @summary Resolve to the first argument that satisfies an async validation callback.
 * @see fallbackUntil
 * @category Fallback
 * @arg {function} validate - Validation callback.
 * @arg {...*} values - Variable number of candidate values.
 * @throws {TypeError} If the callback isn't callable.
 * @returns {Promise.<?*>}
 */
export function fallbackUntilAsync(validate: Function, ...values: any[]): Promise<any | null>;
