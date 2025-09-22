/**
 * Remove unknown properties from a given object (DESTRUCTIVE).
 * @category Object
 * @arg {string[]} allowedProps - Array of allowed property keys.
 * @arg {Object} subject - Object to be processed.
 * @returns {Object}
 * @example
 * var o = {foo: 'bar', hello: 'world', sieze: 'today'};
 * allowProps(['foo', 'hello'], o); // o == {foo: 'bar', hello: 'world'}
 */
export function allowProps(allowedProps: string[], subject: any): any;
