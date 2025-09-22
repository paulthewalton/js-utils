/**
 * @callback CompatCancelAnimationFrame
 * @arg {number} handle
 * @returns {void}
 * @category Compatibility
 */
/**
 * @type {CompatResolver<CompatCancelAnimationFrame>}
 * @category Compatibility
 */
export const compatCancelAnimationFrame: CompatResolver<CompatCancelAnimationFrame>;
export type CompatCancelAnimationFrame = (handle: number) => void;
import { CompatResolver } from "./CompatResolver";
