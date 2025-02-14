let array = ["abc", 23];

function some(array, evenNumber) {
    res = 0;
    for(let i = 0; i < array.length; i++) {
        if (evenNumber()) {
            res = true;
        } else {
            res = false;
        }
    } 
    return res;     
}

function evenNumber(num) {
    for (let i = 0; i < array.length; i++) {
        num = array[i];
    }
    return num % 2 == 0;
}

console.log(`using "some" function for even numbers array: ${array}, result: ${some(array, evenNumber)} - false`)
//returns true if at least one element of the array match a condition given in the function (fun)

let array1 = [2, 3, 4];

function every(array1, elmGreaterIndex) {
    res = 0;
    for(let i = 0; i < array1.length; i++) {
        if (elmGreaterIndex()) {
            res = true;
        } else {
            res = false;
        }
    }
    return res;
}

function elmGreaterIndex(elem, index) {
    for (let i = 0; i < array1.length; i++) {
        elem = array1[i];
        index = i;
    }
    return elem > index;
}

console.log(`using "every" function for elements greater than the index values, array: ${array1}, result: ${every(array1, elmGreaterIndex)} - true`)
//returns true if all elemnts of the array match a condition given in the function (fun)