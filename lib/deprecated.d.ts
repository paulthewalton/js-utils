/**
 * Try to determine the client browser.
 * @category Environment
 * @deprecated
 * @returns {string} Detected browser.
 */
export function detectBrowser(): string;
/**
 * Try to identify development environment from location host TLD.
 * @category Environment
 * @deprecated
 * @returns {boolean} Whether it was able to detect current environment as 'dev'.
 */
export function isDev(): boolean;
export namespace browsers {
    const OPERA: string;
    const FIREFOX: string;
    const SAFARI: string;
    const CHROME: string;
    const IE: string;
    const EDGE: string;
    const BLINK: string;
}
