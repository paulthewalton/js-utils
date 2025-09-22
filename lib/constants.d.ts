/**
 * Rect properties
 */
export type RECT = string;
/**
 * Rect properties
 * @readonly
 * @enum {string}
 */
export const RECT: Readonly<{
    X: string;
    Y: string;
    TOP: string;
    RIGHT: string;
    BOTTOM: string;
    LEFT: string;
    WIDTH: string;
    HEIGHT: string;
}>;
/**
 * *
 */
export type TIME = number;
/**
 * Time constants.
 * @readonly
 * @enum {number}
 * @property {number} SECOND 1 second in milliseconds.
 * @property {number} MINUTE 1 minute in milliseconds.
 * @property {number} HOUR 1 hour in milliseconds.
 * @property {number} DAY 1 day in milliseconds.
 * @property {number} WEEK 1 week in milliseconds.
 * @property {number} MONTH 1 month in milliseconds.
 * @property {number} YEAR 1 year in milliseconds.
 * @property {number} SECONDS_PER_HOUR
 * @property {number} SECONDS_PER_DAY
 */
export const TIME: Readonly<{
    SECOND: number;
    MINUTE: number;
    HOUR: number;
    DAY: number;
    WEEK: number;
    MONTH: number;
    YEAR: number;
    SECONDS_PER_HOUR: number;
    SECONDS_PER_DAY: number;
}>;
/**
 * *
 */
export type FREQ = number;
/**
 * Common frequency periods (time from peak to peak).
 * @readonly
 * @enum {number}
 * @property {number} HZ_15 Period for frequency of 15Hz. Visual updates throttled to 15Hz will feel slow.
 * @property {number} HZ_30 Period for frequency of 30Hz. Visual updates throttled to 30Hz may be noticed by users, but should be acceptable.
 * @property {number} HZ_60 Period for frequency of 60Hz. Users shouldn't be able to detect visual updates throttled to 60Hz.
 * @property {number} FPS_15 Alias of FREQ.HZ_15.
 * @property {number} FPS_30 Alias of FREQ.HZ_30.
 * @property {number} FPS_60 Alias of FREQ.HZ_60.
 */
export const FREQ: Readonly<{
    HZ_15: number;
    FPS_15: number;
    HZ_30: number;
    FPS_30: number;
    HZ_60: number;
    FPS_60: number;
}>;
export const PREFERS_REDUCED_MOTION: boolean;
