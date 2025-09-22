/**
 * Get JSON via AJAX.
 * @category Async
 * @arg {string} url - The URL to request.
 * @arg {Object<string, *>} headers - Object of key:value headers.
 * @arg {string|Document|Blob|BufferSource|FormData|URLSearchParams|ReadableStream} body - Request body.
 * @returns {Promise.<RequestUtilResponse>}
 */
export function getJSON(url: string, headers: {
    [x: string]: any;
}, body: string | Document | Blob | BufferSource | FormData | URLSearchParams | ReadableStream): Promise<RequestUtilResponse>;
import { RequestUtilResponse } from "./RequestUtilResponse";
