/**
 * Make simple AJAX requests
 * @category Async
 * @link [XMLHttpRequest.responseType](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType)
 * @arg {string} method - Request method, case insensitive.
 * @arg {XMLHttpRequestResponseType} type - Response type.
 * @arg {string} url - The URL to request.
 * @arg {?Object<string, *>} headers - Object of key:value headers.
 * @arg {?Document|XMLHttpRequestBodyInit} body - Request body.
 * @returns {Promise.<RequestUtilResponse>}
 */
export function request(method: string, type: XMLHttpRequestResponseType, url: string, headers: {
    [x: string]: any;
} | null, body?: (Document | XMLHttpRequestBodyInit) | null): Promise<RequestUtilResponse>;
import { RequestUtilResponse } from "./RequestUtilResponse";
