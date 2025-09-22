/**
 * @class ScrollbarStatus
 * @summary Describes the scrollability of an element on its axes.
 * @category Data Types
 */
export class ScrollbarStatus {
    /**
     * @param {Object} status
     * @param {boolean} status.any Element can scroll vertically or horizontally.
     * @param {boolean} status.both Element can scroll vertically and horizontally.
     * @param {boolean} status.x Element can scroll horizontally.
     * @param {boolean} status.y Element can scroll vertically.
     */
    constructor({ any, both, x, y }: {
        any: boolean;
        both: boolean;
        x: boolean;
        y: boolean;
    });
    /**
     * Element can scroll vertically or horizontally.
     * @type {boolean}
     */
    any: boolean;
    /**
     * Element can scroll vertically and horizontally.
     * @type {boolean}
     */
    both: boolean;
    /**
     * Element can scroll horizontally.
     * @type {boolean}
     */
    x: boolean;
    /**
     * Element can scroll vertically.
     * @type {boolean}
     */
    y: boolean;
}
