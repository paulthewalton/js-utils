/**
 * Join path segments.
 * @category String
 * @arg {...(string|string[])} segments - Path segments. Arrays and nested arrays will be flattened.
 * @returns {string}
 */
export function pathJoin(...segments: (string | string[])[]): string;
