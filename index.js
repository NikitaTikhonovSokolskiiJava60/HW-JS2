let array = ["abc", 23];

function some(array, fun) {
    for(let i = 0; i < array.length; i++) {
        if (fun(array[i])) {
            return true;
        } else {
            return false;
        }
    }    
}

function evenNumber(num) {
    typeof num == 'number';
    return num % 2 == 0;
}   


console.log(`using "some" function for even numbers array: ${array} => result: ${some(array, evenNumber)} - false`)
//returns true if at least one element of the array match a condition given in the function (fun)

let array1 = [2, 3, 4];

function every(array1, fun) {
    for(let i = 0; i < array1.length; i++) {
        if (!fun(array1[i], i)) {
            return true;
        } else {
            return false;
        }
    }
}

function elmGreaterIndex(elem, index) {
    return elem > index;
}

console.log(`using "every" function for elements greater than the index values, array: ${array1} => result: ${every(array, evenNumber)} - true`)
// //returns true if all elemnts of the array match a condition given in the function (fun)