const express = require('express');
const router = express.Router();
const Iterator = require('../Model/Iterator');
const MyIterator = require('../lib/MyIterator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aidoc', array : [[1, 5, 2], [4,3,6]]});
});

router.post('/', function (req, res) {
    let index = 1;
    let iterators =[];
    while(Object.prototype.hasOwnProperty.call(req.body, 'array' + index))
    {
        let arrayStr = req.body['array' + index].split(',');
        let array = arrayStr.map(value =>{ return parseInt(value, 10)});
        iterators.push(new Iterator(array));
        index++;
    }
    if(iterators.length === 0)
    {
        res.result = 400;
        return res.send('Error 400');
    }

    let myIt = new MyIterator(iterators);
    let num = myIt.next();
    let numbers ='';
    while(num!== null)
    {
        numbers += num + ' ';
        num = myIt.next();
    }
    return res.render('index', { title: 'Aidoc', array : [[1, 5, 2], [4,3,6]], numbers: numbers});
});

module.exports = router;
