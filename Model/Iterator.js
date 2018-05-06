class Iterator {
    constructor(integers) {
        if(Array.isArray(integers)) {
            this.integers = integers;
            this.index = 0;
            this.length = integers.length;
        }
    }

    next(){
        if(this.index !== this.length){
            let integer = this.integers[this.index];
            this.index++;
            return integer;
        }
        return null;
    }
}

module.exports = Iterator;