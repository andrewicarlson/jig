/**
 * This conversion function converts a NodeList (https://developer.mozilla.org/en-US/docs/Web/API/NodeList) to an Array
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to allow access to the native
 * Array methods.
 *
 * @param nodelist: An HTML NodeList (eg: document.querySelectorAll('.xyz'))
 * @returns Array<HTMLElement>: An array of the DOM Nodes from the nodelist
 *
 * Usage: nlToArray(document.querySelectorAll('.xyz'));
 */

export default function nlToArray(nodelist: NodeList): Array<HTMLElement> {
    return [].slice.call(nodelist);
}