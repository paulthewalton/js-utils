/**
 * @class Point2D
 * @summary Represents a point in 2D space.
 * @category Data Types
 */
export class Point2D {
    /**
     * @param {Object} coordinates
     * @param {number} coordinates.x
     * @param {number} coordinates.y
     * @throws {TypeError}
     */
    constructor({ x, y }: {
        x: number;
        y: number;
    });
    /**
     * The X coordinate.
     * @type {number}
     */
    x: number;
    /**
     * The Y coordinate.
     * @type {number}
     */
    y: number;
}
