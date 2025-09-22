/**
 * @typedef {Object} CompatResolverCandidate
 * @property {string|function(): function} fn Either the member name of a candidate function within the `scope`, or a function that returns a candidate function.
 * @property {?Object} scope An optional scope object to check for the candidate function, defaults to the global object (`window` in browsers, `global` for node)
 * @category Compatibility
 */
/**
 * @class CompatResolver
 * @summary Framework for resolving functions with different names & availabilities across browsers.
 * @category Compatibility
 * @property {CompatResolverCandidate[]} candidates
 * @property {Object} scope
 * @template T
 */
export class CompatResolver<T> {
    /**
     * @constructor
     * @param {CompatResolverCandidate[]} candidates
     * @param {?Object} [scope]
     */
    constructor(candidates: CompatResolverCandidate[], scope?: any | null);
    candidates: any[];
    scope: any;
    /**
     * @function
     * @summary Add additional candidates to an existing CompatResolver instance.
     * @param {string|function} fn Either the member name of a candidate function within the `scope`, or a function that returns a candidate function.
     * @param {Object} [scope] An optional scope object to check for the candidate function, defaults to scope of the CompatResolver instance.
     * @param {boolean} [prepend=false] Whether to prepend the candidate to the list, default `false`.
     * @returns {void}
     */
    add(fn: string | Function, scope?: any, prepend?: boolean): void;
    /**
     * @summary Resolve the candidates to a usable implementation.
     * @param {boolean} [forceEvaluation] Force (re)evaluation of candidates.
     * @returns {?T} Resolved compat function.
     */
    resolve(forceEvaluation?: boolean): T | null;
    _resolved: any;
}
export type CompatResolverCandidate = {
    /**
     * Either the member name of a candidate function within the `scope`, or a function that returns a candidate function.
     */
    fn: string | (() => Function);
    /**
     * An optional scope object to check for the candidate function, defaults to the global object (`window` in browsers, `global` for node)
     */
    scope: any | null;
};
