import { CompatResolver } from "./CompatResolver";

/**
 * @category Compatibility
 * @arg {Object} scope Method/function scope.
 * @arg {string} methodName Method name.
 * @arg {CompatResolver|Array<{fn: string|() => function, scope: ?Object}>} resolver
 * @returns {void}
 */
export function polyfill(scope, methodName, resolver) {
	if (scope[methodName]) return;
	if (!(resolver instanceof CompatResolver)) {
		resolver = new CompatResolver(resolver, scope);
	}
	scope[methodName] = resolver.resolve();
}
