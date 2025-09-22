/**
 * Create an HTMLElement.
 * * returns null for invalid tagName
 * @summary Create an HTMLElement.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append|ParentNode.append}
 * @category Node & Element
 * @arg {string} tagName - Element tag name.
 * @arg {Object} props - Element properties. Unrecognized props are kebab-cased and set as attributes.
 * @arg {...(Node|string)} children - Element child nodes.
 * @returns {?HTMLElement}
 */
export function createElem(tagName: string, props: any, ...children: (Node | string)[]): HTMLElement | null;
