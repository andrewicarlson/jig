var json = {
    "metadata": {
        "provider": "Oxford University Press"
    },
    "results": [
        {
            "id": "excited",
            "language": "en",
            "lexicalEntries": [
                {
                    "entries": [
                        {
                            "homographNumber": "000",
                            "senses": [
                                {
                                    "definitions": [
                                        "very enthusiastic and eager"
                                    ],
                                    "id": "m_en_gbus0339750.006",
                                    "subsenses": [
                                        {
                                            "definitions": [
                                                "sexually aroused."
                                            ],
                                            "id": "m_en_gbus0339750.009"
                                        }
                                    ]
                                },
                                {
                                    "definitions": [
                                        "of or in an energy state higher than the normal or ground state"
                                    ],
                                    "id": "m_en_gbus0339750.011"
                                }
                            ]
                        }
                    ],
                    "language": "en",
                    "lexicalCategory": "Adjective",
                    "text": "excited"
                }
            ],
            "type": "headword",
            "word": "excited"
        }
    ]
};

var x = 0;
var start;
var end;
var elapsed;

var deepReduce = function(info) {

    var nextSearch = info.haystack.reduce(function(accumulator, currentValue, currentIndex, array) {

        var next = [];

        if(typeof currentValue === 'string') {
            return accumulator;
        }

        if(currentValue.hasOwnProperty && currentValue.hasOwnProperty(info.needle)) {
            info.basket = info.basket.concat(currentValue[info.needle]);
        }

        Object.keys(currentValue).forEach(function(el) {
            if(Array.isArray(currentValue[el])) {
                next = next.concat(currentValue[el]);
            }
        });

        return accumulator.concat(next);
    }, []);

    if(!nextSearch.length) {

        return info;
    }

    return deepReduce({
        haystack: nextSearch,
        needle: info.needle,
        basket: info.basket
    });
};

start = Date.now();
var abc = deepReduce({
    haystack: json.results,
    needle: 'definitions',
    basket: []
});
end = Date.now();

console.log(abc);
console.log(end - start);