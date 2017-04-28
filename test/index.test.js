const expect = require('chai').expect;
const boilerplate = require('../src/index');

describe('Main boilerplate package', function() {
    describe('all', function() {
        it('should return a complete list of frameworks', function() {
            expect(boilerplate.all.length).to.be.eq(7);
        });
        it('should be an array of strings', function() {
            expect(boilerplate.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(arr) {
                return arr.every((item) => typeof item === 'string');
            }
        });
    });
    describe('random', function() {
        it('should return a random item from the list', function() {
            var randomItem = boilerplate.random();
            expect(boilerplate.all).to.include(randomItem);
        });
    });    
}); 