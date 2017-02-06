export default function escCallback(fn: Function) {
    if (typeof fn !== 'function') {
        return;
    }

    fn.call(undefined);

    document.onkeyup(function(e): any {

        if (e.keyCode === 27) {

            fn.call(undefined);
        } else {

            return false;
        }
    })
}