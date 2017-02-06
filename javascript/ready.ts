/**
 * The ready function is a replica of $(document).ready() in jQuery.
 *
 * @param fn: Function
 * Usage: ready( () => {} ); OR ready(functionName);
 */
export default function ready(fn: Function): void {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', () => { fn() });
    }
}