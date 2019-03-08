


function concatString(...input) {
    let inputArray = [...input];
    return inputArray.join("");
}


function yourFunctionRunner(...inputFunction) {
    let str = "";
    let inputFunctionArray = [...inputFunction];

    for (var i =0 ; i< inputFunctionArray.length; i++) {
        str += inputFunctionArray[i]();
    }
    return str;
}


function makeAdder(num) {
    return function(insert) {
        return insert+num;
    }
}



function once(input) {
    var didYouRunOnceYet = false;
    return function() {
        
        if (!didYouRunOnceYet) {
            didYouRunOnceYet = true;
            return input();
        }
    }
}



function createObjectWithClosures() {
    let placeHolder = 0;
    let objClosure = {

        oneIncrementer : function() {
            placeHolder++;
        },

        tensIncrementer : function () {
            placeHolder+=10;
        },

        getValue : function () {
            return placeHolder;
        },

        setValue : function(input) {
            placeHolder = input;
        }
    }

    return objClosure;
}


