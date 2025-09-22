/**
 * @callback CompatNow
 * @returns {DOMHighResTimeStamp|number}
 * @summary A cross-browser function for calculating timings.
 * @desc Defaults to `performance.now`, falling back to `Date.now`.
 * @category Compatibility
 */
/**
 * @type {CompatResolver<CompatNow>}
 * @category Compatibility
 */
export const compatNow: CompatResolver<CompatNow>;
export type CompatNow = () => DOMHighResTimeStamp | number;
import { CompatResolver } from "./CompatResolver";
