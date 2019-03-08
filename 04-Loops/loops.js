

function repeat(str, num) {
    let returnString = '';
    for (let i = 0; i < num; i++) {
        returnString += str;
    }
    return returnString;
}


function sum(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++ ) {
        total += arr[i];
    }
    return total;
}


function join(arr, delimiter = '') {
    let joinedString = '';

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            joinedString += delimiter;
        }
        joinedString += arr[i];
    }

    return joinedString;
}

function gridGenerator(num) {
    let grid = '';

    for (var i = 0; i < num; i++) {

        for (var j = 0; j < num; j++) {

            if (i % 2 === j % 2) {
                grid += '#';
            } else {
                grid += ' ';
            }

        }
        grid += '\n';
    }

    return grid;
}


function paramify(obj) {
    let objectString = '';
    let objKeys = [];

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            objKeys.push(key);
        }
    }

    objKeys = objKeys.sort();

    for (var i = 0; i < objKeys.length; i++) {
        let key = objKeys[i];

        objectString += key + '=' + obj[key];
        if (i !== objKeys.length - 1) {
            objectString += '&';
        }
    }

    return objectString;
}


function paramifyObjectKeys(obj) {
    let objectString = '';
    let objKeys = Object.keys(obj).sort();


    for (var i = 0; i < objKeys.length; i++) {
        let key = objKeys[i];

        objectString += key + '=' + obj[key];
        if (i !== objKeys.length - 1) {
            objectString += '&';
        }
    }


    return objectString;
}


function renameFiles(arr) {
    let renamedArray = [];
    function renaming(fileName, num) {
        let newName = fileName + '(' + num + ')';
        if (!(renamedArray.includes(newName))) {
            return newName;
        } else {
            newName = renaming(fileName, num + 1);
        }

        return newName;
    }

    for (var i = 0; i < arr.length; i++) {
        let name = arr[i];
        if (!(renamedArray.includes(name))) {
            renamedArray.push(name);
        } else {
            let updatedName = renaming(name, 1);
            renamedArray.push(updatedName);
        }
    }

    return renamedArray;
}

