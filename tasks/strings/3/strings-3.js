/**
 * Function takes a string and a value of maximum string length
 * If the string length more than the max length
 * the string should be reduced and filled by '...' for fit the
 * max length.
 */

module.exports = function truncate(str, maxLength) {
    let arr = str.split('');
    if (arr.length > maxLength) {
        let newArr= arr.slice(0, maxLength-3);
        let newStr = newArr.join('') + '...';
        return newStr;
    }
    else {
        return str;
    }
};
