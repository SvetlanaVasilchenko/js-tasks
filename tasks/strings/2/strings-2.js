/**
 * Function should return taken string with first char in upper case
 */
module.exports = function upperCaseFirst(str) {
    if (str === "") {
        return str;
    } 
    else {
        let firstSimbol = str[0];
        let newStr = firstSimbol.toUpperCase() + str.slice(1);
        return newStr;

    }
    
}
