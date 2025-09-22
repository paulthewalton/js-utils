/**
 * @typedef {Object} ParsedCSSColor
 * @property {number} red Red value of parsed color.
 * @property {number} green Green value of parsed color.
 * @property {number} blue Blue value of parsed color.
 * @property {number} alpha Alpha value of parsed color.
 * @property {string} value The CSS color string for the parsed color.
 */
/**
 * Parse a CSS color string into red, green, blue, and alpha components.
 * * Passing an invalid color will return the components for transparent black, with an empty string as the `value` property.
 * @summary Parse a CSS color string into red, green, blue, and alpha components.
 * @category CSS
 * @arg {string} color - CSS color value, case-insensitive.
 * @returns {ParsedCSSColor}
 */
export function parseCSSColor(color: string): ParsedCSSColor;
export type ParsedCSSColor = {
    /**
     * Red value of parsed color.
     */
    red: number;
    /**
     * Green value of parsed color.
     */
    green: number;
    /**
     * Blue value of parsed color.
     */
    blue: number;
    /**
     * Alpha value of parsed color.
     */
    alpha: number;
    /**
     * The CSS color string for the parsed color.
     */
    value: string;
};
