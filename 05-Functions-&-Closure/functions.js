


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


function once(func) {
 
}