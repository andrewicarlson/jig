export default function escCallback(fn: Function) {
    if (typeof fn !== 'function') {
        return;
    }

    document.addEventListener('keyup', (e): any => {
        if (e.keyCode === 27) {
            fn.call(undefined);
        }
    });
}