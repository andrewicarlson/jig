var expect = require('chai').expect;
var should = require('chai').should();
var shuffle = require('./array-shuffle').default;

describe('array-shuffle', function() {

    it('should exist', function() {
        expect(shuffle).to.exist;
    });

    it('should be a function', function() {
        expect(shuffle).to.be.an('function');
    });

    it('should accept an array', function() {
        expect(() => { shuffle([]) }).to.not.throw(Error);
    });

    it('should reject strings, functions, and objects', function() {
        var fn = function() {};
        expect(() => { shuffle('') }).to.throw(Error);
        expect(() => { shuffle(fn) }).to.throw(Error);
        expect(() => { shuffle({}) }).to.throw(Error);
    });

    it('should return an array', function() {
        var shuffled = shuffle([]);

        expect(shuffled).to.be.an('array');
    });

    it('should return array elements in a different order', function() {
        var origArray = [1, 2, 3, 4, 5, 6];
        var newArray = shuffle(Array.from(origArray));

        expect(newArray).to.not.eql(origArray);
    });

    it('should shuffle array elements in place', function() {
        var origArray = [1, 2, 3, 4, 5, 6];
        var newArray = shuffle(origArray);

        expect(newArray).to.eql(origArray);
    });

    it('should return an array of the same length as original', function() {
        var origArray = [1, 2, 3, 4, 5, 6];
        var newArray = shuffle(origArray);

        expect(newArray.length).to.equal(origArray.length);
    });
});