/**
 * Adds event listeners to window, setting `tab-focus` and `tab-focus-within` classes on focused elements.
 * @listens Window#focusout
 * @listens Window#focusin
 * @listens Window#keydown
 * @returns {Function} Teardown function to remove listeners.
 * @category Addons
 */
export function setUpTabFocus(win?: Window & typeof globalThis, doc?: Document): Function;
