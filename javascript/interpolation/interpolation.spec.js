var expect = require('chai').expect;
var should = require('chai').should();
var interpolate = require('./interpolation').default;

describe('interpolation', function() {

    describe('existence', function() {
        it('should exist', function() {
            expect(interpolate).to.exist;
        });

        it('should be a function', function() {
            expect(interpolate).to.be.an('function');
        });
    });

    describe('arguments', function() {
        it('should require two arguments', function() {
            expect(() => { interpolate() }).to.throw(Error);
        });

        it('should accept a string as the first argument', function() {
            var fn = function() {};

            expect(() => { interpolate("", {}) }).to.not.throw(Error);
        });

        it('should not accept functions, objects, or arrays as the first argument', function() {
            var fn = function() {};

            expect(() => { interpolate(fn) }).to.throw(Error);
            expect(() => { interpolate([]) }).to.throw(Error);
            expect(() => { interpolate({}) }).to.throw(Error);
        });

        it('should accept an object as the second argument', function() {
            var fn = function() {};

            expect(() => { interpolate("", {}) }).to.not.throw(Error);
        });

        it('should not accept a function, array, or string as the second argument', function() {
            var fn = function() {};

            expect(() => { interpolate("", fn) }).to.throw(Error);
            expect(() => { interpolate("", []) }).to.throw(Error);
            expect(() => { interpolate("", "") }).to.throw(Error);
        });
    });

    describe('return', function() {
        it('should return a string', function() {
            var outputString = interpolate("", {});

            expect(outputString).to.be.a('string');
        });

        it('should return a string with interpolated values', function() {
            var inputString = 'This {0} an {b} string.';
            var inputObject = {
                '0': 'is',
                'b': 'interpolated'
            };
            var outputString = interpolate(inputString, inputObject);

            expect(outputString).to.not.equal(inputString);
            expect(outputString).to.equal('This is an interpolated string.');
        })
    });
});