const Iterator = require('../Model/Iterator');
const MyIterator = require('../lib/MyIterator');
const assert = require('assert');

let it1 = new Iterator([1,5,2]);
let it2 = new Iterator([4,3,6]);
let it3 = new Iterator([2,6,1]);

describe('Iterator', function() {
    describe('#iterate()', function () {
        it('it + it2 should return right answer', function () {
            let myIt = new MyIterator([it1, it2]);
            let num = myIt.next();
            let result = '';
            while (num !== null) {
                result += '';
                num = myIt.next();
            }

            assert.equal(result, '143526');
        });
    });

    describe('#iterate()', function () {
        it('it + it2 + it3 should return right answer', function () {
            let myIt = new MyIterator([it1, it2, it3]);
            let num = myIt.next();
            let result = '';
            while (num !== null) {
                result += '';
                num = myIt.next();
            }

            assert.equal(result, '124352661');
        });
    });


});

