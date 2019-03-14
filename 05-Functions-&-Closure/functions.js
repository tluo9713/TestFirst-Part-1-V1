

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


/* function guestListFns(guestListArray, secretCode) {
    var hiddenGuestArray = [];

    for (var i = 0; i < guestListArray.length; i++) {
        const name = guestListArray[i]; //am I a cheater?
        var dummy = function(num) { //couldn't think of a better name 
            if (num === secretCode) {
                return name;
            } else {
                return 'Secret-Code: Invalid';
            }
        }
        hiddenGuestArray.push(dummy);
    }

    return hiddenGuestArray;
} */

function guestListFns(guestListArray, secretCode) {
    var hiddenGuestArray = [];
/*     
    instead of having the name declared by var (which makes the variable global and causes problems)
    the name is in the parameters. when the parameters are used, they are only available inside
    the function, meaning the function lockWithSecretCode is the lexical scope of the name.
*/
    function lockWithSecretCode(name) { 
        var enterCodeForName = function(num) { 
            if (num === secretCode) { //num is the secret code
                return name; //that name is passed here
            } else {
                return 'Secret-Code: Invalid';
            }
        }
        return enterCodeForName;
    }
    for (var i = 0; i < guestListArray.length; i++) {
        var funcWithSecretName = lockWithSecretCode(guestListArray[i]);
/* 
        Since we pass the name (saved in guestListArray[i]) into the function secret as a parameter,
        that name is WITHIN the function, the lexical scope is inside the function.
        we then put that name in another function enterCodeForName and return that function.
 */
        hiddenGuestArray.push(funcWithSecretName);
    }
    //am i even phrasing this correctly?
    return hiddenGuestArray;
}
/* function guestListFns(guestListArray, secretCode) {

    var hiddenGuestArray = guestListArray.map(function(name) {
        return function dummy(num) { //this kind of works, but you can't use Array prototypes
        if (num === secretCode) {
            return name;
        } else {
            return 'Secret-Code: Invalid';
        }
    }
;
    });
    return hiddenGuestArray;
}
var guestsArray1 = ['James', 'Casey', 'Karen', 'Gene', 'Michele', 'Ashi'];
var secretCode1 = 404;
var test = guestListFns(guestsArray1, secretCode1);

console.log(test); */


function generateGuestList(secretList, secretCode) {
    var guestList = [];

    for (var i = 0; i < secretList.length; i++) {
        var name = secretList[i](secretCode);
        guestList.push(name);
    }

    return guestList;
}
