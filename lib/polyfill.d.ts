/**
 * @category Compatibility
 * @arg {Object} scope Method/function scope.
 * @arg {string} methodName Method name.
 * @arg {CompatResolver|CompatResolverCandidate[]} resolver
 * @returns {void}
 */
export function polyfill(scope: any, methodName: string, resolver: CompatResolver<any> | CompatResolverCandidate[]): void;
import { CompatResolver } from "./CompatResolver";
