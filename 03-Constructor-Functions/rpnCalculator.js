


function RPNCalculator() {
    this.array = [];

    this.push = function(num) {
        this.array.push(num);
    };

    this.plus = function() {
        if (this.array.length<2) {
            throw "rpnCalculatorInstance is empty";
        }
        let a = this.array.pop();
        let b = this.array.pop();
        this.array.push(b+a);
    };

    this.minus = function() {
        if (this.array.length<2) {
            throw "rpnCalculatorInstance is empty";
        }
        let a = this.array.pop();
        let b = this.array.pop();
        this.array.push(b-a);
    };

    this.divide = function() {
        if (this.array.length<2) {
            throw "rpnCalculatorInstance is empty";
        }
        let a = this.array.pop();
        let b = this.array.pop();
        this.array.push(b/a);
    };

    this.times = function() {
        if (this.array.length<2) {
            throw "rpnCalculatorInstance is empty";
        }
        let a = this.array.pop();
        let b = this.array.pop();
        this.array.push(b*a)
    };

    this.value = function() {
        let lastElement = this.array.length-1;
        return this.array[lastElement];
    };
    
}


rpnCalculatorInstance = new RPNCalculator();
console.log(RPNCalculator);