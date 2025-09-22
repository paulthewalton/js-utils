/**
 * Process placeholder values for partial application of functions.
 * * Values of `_` will be replaced with `undefined` unless preceded by backslash
 * @private
 * @arg {Array} partials Array of values to partially apply to a function.
 * @returns {Object} Placeholders and processed partial arguments.
 */
export function processPartialPlaceholders(partials: any[]): any;
export namespace processPartialPlaceholders {
    const placeholder: string;
}
