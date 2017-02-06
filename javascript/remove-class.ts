/**
 * Similar to jQuery's removeClass.
 *
 * Usage: removeClass(element, 'css classes to remove');
 */

/**
 *
 * @param el: HTMLElement to remove classes from
 * @param cssClasses: string of one or more classes to remove
 */
export default function removeClass(el:HTMLElement, cssClasses: string): void {
    if(el.classList) {
        el.classList.remove(cssClasses);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + cssClasses.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}