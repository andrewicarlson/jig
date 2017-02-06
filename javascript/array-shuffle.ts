/**
 The shuffle function receives an array and shuffles it's elements.

 Usage:

 var foo = ['x', 'y', 'z'];
 var shuffled = shuffle(foo);
 **/

/**
 *
 * @param arrayToShuffle: Array<any>
 * @returns {Array<any>}
 */
export default function shuffle(arrayToShuffle: Array<any>): Array<any> {
    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
     */
    for (var i = arrayToShuffle.length - 1; i > 0; i--) {

        var j = Math.floor(Math.random() * (i + 1));
        var temp = arrayToShuffle[i];
        arrayToShuffle[i] = arrayToShuffle[j];
        arrayToShuffle[j] = temp;
    }

    return arrayToShuffle;
}