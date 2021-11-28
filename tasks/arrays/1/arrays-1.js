/**
 * Function takes array of numbers (negative and positive)
 * and should turn all negative numbers into positive
 * and return this array
 * 
 * REMARK: passed array should not be mutated
 */
module.exports = function makeArrayPositive(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            newArray.push(array[i] * (-1));
        }
        else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

/**
 * найти все отриц. числа и превратить в положительные
 *
 *
 *
 **/



