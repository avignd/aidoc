const SortedArray = require("sorted-array");

class MyIterator {
    constructor(iteratorList) {
        this.iterators = iteratorList;
        this.nextIteratorIndex = null;
        let initialList = [];
        for(let i = 0 ; i < this.iterators.length; i++){
            let num = this.iterators[i].next();
            if(num !== null) {
                initialList.push({num: num, index: i});
            }
        }
        this.sorted = new SortedArray.comparing(this.getNum, initialList);
    }

    getNum(data){
        return data.num;
    }

    next(){
        if(this.nextIteratorIndex !== null){
            let num = this.iterators[this.nextIteratorIndex].next();
            if(num !== null){
                this.sorted.insert({num: num, index : this.nextIteratorIndex})
            }
        }

        if(this.sorted.array.length > 0) {
            let min = this.getMin();
            this.nextIteratorIndex = min.index;
            this.sorted.remove(min);
            return min.num;
        }

        return null;
    }

    getMin() {
        let min = this.sorted.array[0];
        if (this.sorted.array.length > 1 ) {
            let index = 1;
            let indexes = [];
            indexes.push(min.index);
            let moreVal = this.sorted.array[index];
            while (moreVal && moreVal.num === min.num) {
                indexes.push(moreVal.index);
                moreVal = this.sorted.array[++index];
            }
            let minIndex = Math.min(...indexes);
            min.index = minIndex;
        }
        return min;
    }
}

module.exports = MyIterator;