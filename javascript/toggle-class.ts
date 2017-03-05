/**
 * Similar to jQuery's toggleClass.
 *
 * Usage: toggleClass(element, 'class1');
 */

/**
 *
 * @param el: HTMLElement to add classes to
 * @param cssClass: string of one or more classes to add
 */
export default function toggleClass(el:HTMLElement, cssClass: string): void {
    if (el.classList) {
        el.classList.toggle(cssClass);
    } else {
        let classes = el.className.split(' ');
        let existingClassIndex = classes.indexOf(cssClass);

        if (existingClassIndex !== -1) {
            classes.splice(existingClassIndex, 1);
        } else {
            classes.push(cssClass);
        }

        el.className = classes.join(' ');
    }
}