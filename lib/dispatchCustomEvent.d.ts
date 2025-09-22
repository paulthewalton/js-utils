/**
 * Dispatch a custom event of type `eventType` on `target`, defaults to document.
 * * Returns true on success, false on failure.
 * @summary Dispatch a custom event.
 * @category Event
 * @arg {string} eventType The event type.
 * @arg {EventTarget} [target=document] - The element to dispatch the event.
 * @arg {Object} [options] - Event options.
 * @arg {boolean} [options.bubbles=false] - Whether the event will bubble.
 * @arg {boolean} [options.cancelable=false] - Whether the event is cancelable.
 * @arg {boolean} [options.composed=false] - Whether the event is composed.
 * @arg {*} [options.detail] - Any data to pass to the event handler.
 * @returns {boolean}
 */
export function dispatchCustomEvent(eventType: string, target?: EventTarget, options?: {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
    detail?: any;
}): boolean;
