

function concatString(...input) {
    let inputArray = [...input];
    return inputArray.join('');
}


function yourFunctionRunner(...inputFunction) {
    let str = '';
    let inputFunctionArray = [...inputFunction];

    for (var i = 0 ; i < inputFunctionArray.length; i++) {
        str += inputFunctionArray[i]();
    }
    return str;
}


function makeAdder(num) {
    return function(insert) {
        return insert + num;
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

        oneIncrementer: function() {
            placeHolder++;
        },

        tensIncrementer: function () {
            placeHolder += 10;
        },

        getValue: function () {
            return placeHolder;
        },

        setValue: function(input) {
            placeHolder = input;
        }
    }

    return objClosure;
}


function guestListFns(guestListArray, secretCode) {
    var hiddenGuestArray = [];

    for (var i = 0; i < guestListArray.length; i++) {
        const name = guestListArray[i];
        var dummy = function(num) {
            if (num === secretCode) {
                return name;
            } else {
                return 'Secret-Code: Invalid';
            }
        }
        hiddenGuestArray.push(dummy);
    }

    return hiddenGuestArray;
}


function generateGuestList(secretList, secretCode) {
    var guestList = [];

    for (var i = 0; i < secretList.length; i++) {
        var name = secretList[i](secretCode);
        guestList.push(name);
    }

    return guestList;
}
