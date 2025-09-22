export class RequestUtilResponse {
    /**
     * @param {XMLHttpRequest} xhr
     */
    constructor(xhr: XMLHttpRequest);
    /**
     * @type {string|ArrayBuffer|Blob|Document|Object}
     */
    response: string | ArrayBuffer | Blob | Document | any;
    /**
     * @type {number}
     */
    status: number;
    /**
     * Original XHR object
     * @type {XMLHttpRequest}
     */
    xhr: XMLHttpRequest;
}
