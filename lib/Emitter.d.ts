/**
 * Browser-friendly Emitter class.
 * @category Event
 */
export class Emitter {
    /**
     * @arg {string} type
     * @arg {EventListenerOrEventListenerObject} listener
     * @arg {boolean|EventListenerOptions} options
     */
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options: boolean | EventListenerOptions): any;
    /**
     * @arg {Event|CustomEvent} event
     * @returns {boolean}
     */
    dispatchEvent(event: Event | CustomEvent): boolean;
    /**
     * @arg {string} type
     * @arg {EventListenerOrEventListenerObject} listener
     * @arg {boolean|EventListenerOptions} options
     */
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options: boolean | EventListenerOptions): any;
}
