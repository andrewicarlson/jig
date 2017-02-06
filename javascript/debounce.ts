/**
 *
 * The debounce function throttles a function (the first argument) to only be called every 'n' (the second argument) milliseconds.
 * 
 * Usage: debounce( () => {}, 200, false ); OR debounce( functionName, 200, false );
 */

/**
 *
 * @param fn: Function
 * @param wait: number
 * @param immediate: boolean
 * @returns {Function}
 */
export default function debounce(fn: Function, wait: number, immediate: boolean): Function {
    let timeout;

    return () => {
        const context = this;
        const args = arguments;

        const later = () => {
            timeout = null;
            if (!immediate) fn.apply(context, args);
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) fn.apply(context, args);
    }
}