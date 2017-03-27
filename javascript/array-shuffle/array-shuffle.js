/**
 * The shuffle function receives an array and shuffles it's elements in place.
 *
 * Uses the Durstenfeld shuffle algorithm.
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
 *
 * Usage:
 *
 * var foo = ['x', 'y', 'z'];
 * var shuffled = shuffle(foo);
 */
/**
 *
 * @param arrayToShuffle: Array<any>
 * @returns {Array<any>}
 */
function shuffle(arrayToShuffle) {
    if (!Array.isArray(arrayToShuffle)) {
        throw new Error("Argument must be type Array");
    }
    for (var i = arrayToShuffle.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arrayToShuffle[i];
        arrayToShuffle[i] = arrayToShuffle[j];
        arrayToShuffle[j] = temp;
    }
    return arrayToShuffle;
}
exports["default"] = shuffle;
//# sourceMappingURL=array-shuffle.js.map