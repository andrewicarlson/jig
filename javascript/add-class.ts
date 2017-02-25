/**
 * Similar to jQuery's addClass.
 *
 * Usage: addClass(element, 'new-class1 new-class2');
 */

/**
 *
 * @param el: HTMLElement to add classes to
 * @param cssClasses: string of one or more classes to add
 */
export default function addClass(el:HTMLElement, cssClasses: string): void {
    if(el.classList) {
        DOMTokenList.prototype.add.apply(el.classList, cssClasses.split(' '));
    } else {
        el.className += ' ' + cssClasses;
    }
}