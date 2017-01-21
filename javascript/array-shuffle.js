/**
The shuffle function receives an array and shuffles it's elements.

Usage:

var foo = ['x', 'y', 'z'];
var shuffled = shuffle(foo);
**/

var shuffle = function(array) {

    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
    */
    for (var i = array.length - 1; i > 0; i--) {

        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
};
