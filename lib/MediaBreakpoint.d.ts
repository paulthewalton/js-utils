/**
 * @class MediaBreakpoint
 * @summary A breakpoint following a mobile-first philosophy.
 * @category Environment
 */
export class MediaBreakpoint {
    constructor(id: any, { min, unit }: {
        min?: number;
        unit?: string;
    });
    /**
     * Breakpoint identifier.
     * @type {string}
     */
    id: string;
    /**
     * Minumum viewport width.
     * @type {number}
     */
    min: number;
    /**
     * Breakpoint unit.
     * @type {"px"|"em"|"rem"}
     */
    unit: "px" | "em" | "rem";
    /**
     * The breakpoint media query.
     * @type {MediaQueryList}
     */
    up: MediaQueryList;
    /**
     * A link to the "next" breakpoint, assuming in order of increasing viewport widths.
     * @type {?MediaBreakpoint}
     */
    next: MediaBreakpoint | null;
    get down(): boolean;
    get only(): boolean;
    below: MediaQueryList;
}
