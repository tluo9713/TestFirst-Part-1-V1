


function RPNCalculator() {
    this.array = [];

    this.push = function(num) {
        this.array.push(num);
    };


}

RPNCalculator.prototype.plus = function() {
    if (this.array.length<2) {
        throw "rpnCalculatorInstance is empty";
    }
    let a = this.array.pop();
    let b = this.array.pop();
    this.array.push(b+a);
};

RPNCalculator.prototype.minus = function() {
    if (this.array.length<2) {
        throw "rpnCalculatorInstance is empty";
    }
    let a = this.array.pop();
    let b = this.array.pop();
    this.array.push(b-a);
};

RPNCalculator.prototype.divide = function() {
    if (this.array.length<2) {
        throw "rpnCalculatorInstance is empty";
    }
    let a = this.array.pop();
    let b = this.array.pop();
    this.array.push(b/a);
};

RPNCalculator.prototype.times = function() {
    if (this.array.length<2) {
        throw "rpnCalculatorInstance is empty";
    }
    let a = this.array.pop();
    let b = this.array.pop();
    this.array.push(b*a)
};


RPNCalculator.prototype.value = function() {
    let lastElement = this.array.length-1;
    return this.array[lastElement];
};