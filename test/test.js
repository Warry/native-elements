/*
 * test.js
 */

var mobile-button = require('../lib/index.js'),
    expect = require('expect.js');

onload = function () {
    describe('Testing some stuff', function () {
        describe('First test', function () {
            it('mobile-button must be an function', function () {
                expect(mobile-button).to.be.an('function');
            });
            it('mobile-button must return a the string `this is module mobile-button`', function () {
                expect(mobile-button()).to.be.equal("this is module mobile-button");
            });
        });
    });

    setTimeout(function () {
        //mocha.checkLeaks();
        mocha.run();
    }, 1000);
};