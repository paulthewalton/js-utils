/**
 * Get HTML via AJAX.
 * @category Async
 * @arg {string} url - The URL to request.
 * @arg {?Object<string, *>} headers - Object of key:value headers.
 * @arg {?Document|XMLHttpRequestBodyInit} body - Request body.
 * @returns {Promise.<RequestUtilResponse>}
 */
export function getHTML(url: string, headers: {
    [x: string]: any;
} | null, body?: (Document | XMLHttpRequestBodyInit) | null): Promise<RequestUtilResponse>;
import { RequestUtilResponse } from "./RequestUtilResponse";
