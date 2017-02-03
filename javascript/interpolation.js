/**
The interpolate function accepts a string as the first argument and will interpolate the values found in the object argument.

Usage:

interpolate("This is a {0} with {1} interpolations", {"0": "string", "1": "2"}); // This is a string with 2 interpolations
**/ 

var interpolate = function(string, object) {

    return string.replace(/{([^{}]*)}/g,
        function (a, b) {
            var r = object[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    );
};
