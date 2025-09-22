/**
 * @callback CompatRequestAnimationFrame
 * @arg {FrameRequestCallback} callback
 * @returns {number}
 * @category Compatibility
 */
/**
 * @type {CompatResolver<CompatRequestAnimationFrame>}
 * @category Compatibility
 */
export const compatRequestAnimationFrame: CompatResolver<CompatRequestAnimationFrame>;
export type CompatRequestAnimationFrame = (callback: FrameRequestCallback) => number;
import { CompatResolver } from "./CompatResolver";
