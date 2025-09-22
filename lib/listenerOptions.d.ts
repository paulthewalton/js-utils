/**
 * @typedef {Object} EventListenerOptionsCompat
 * @property {boolean|EventListenerOptions} normal - Listener will behave as default.
 * @property {boolean|EventListenerOptions} passive - Listener will be passive if supported.
 * @property {boolean|EventListenerOptions} capture - Listener will dispatched as the event bubbles down.
 * @property {boolean|EventListenerOptions} passiveCapture - Listener will capture and be passive if supported.
 * @category Addons
 */
/**
 * @type {EventListenerOptionsCompat}
 * @readonly
 * @category Addons
 */
export const listenerOptions: EventListenerOptionsCompat;
export type EventListenerOptionsCompat = {
    /**
     * - Listener will behave as default.
     */
    normal: boolean | EventListenerOptions;
    /**
     * - Listener will be passive if supported.
     */
    passive: boolean | EventListenerOptions;
    /**
     * - Listener will dispatched as the event bubbles down.
     */
    capture: boolean | EventListenerOptions;
    /**
     * - Listener will capture and be passive if supported.
     */
    passiveCapture: boolean | EventListenerOptions;
};
