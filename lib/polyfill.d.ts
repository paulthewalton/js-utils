/**
 * @typedef CompatResolverCandidate
 * @property {string|function(): function} fn Either the member name of a candidate function within the `scope`, or a function that returns a candidate function.
 * @property {?Object} scope An optional scope object to check for the candidate function, defaults to the global object (`window` in browsers, `global` for node)
 * @category Compatibility
 */
/**
 * @category Compatibility
 * @arg {Object} scope Method/function scope.
 * @arg {string} methodName Method name.
 * @arg {CompatResolver|Array<{fn: string|() => function, scope: ?Object}>} resolver
 * @returns {void}
 */
export function polyfill(scope: any, methodName: string, resolver: CompatResolver<any> | Array<{
    fn: string | (() => Function);
    scope: any | null;
}>): void;
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
import { CompatResolver } from "./CompatResolver";
