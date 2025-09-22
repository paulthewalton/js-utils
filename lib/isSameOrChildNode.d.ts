/**
 * Determine whether a DOM object is the same or parent of another DOM object.
 * @category Node & Element
 * @arg {Node} potentialParentNode - Parent DOM object to check lineage.
 * @arg {Node} targetNode - Child DOM object.
 * @returns {boolean}
 */
export function isSameOrChildNode(potentialParentNode: Node, targetNode: Node): boolean;
