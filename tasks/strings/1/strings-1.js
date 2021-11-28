/**
 * Function should take string and return reversed string
 */
module.exports = function reverse(str){
    let newStr = "";

    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    return newStr;
} 

/*
let arr  = newStr.split(' ');
1.Запихнуть в массив из переменной 
2.С использованием цикла перекладываем в переменную newStr в обратном порядке. 
*/


// вся фишка в замене порядкового номера элемента 
// последняя буква имеет порядковый номер длинна строки минус 1 
// Этот порядковый номер меняется на 0
// и дальше
// первый элемент становится: длинна строки минус 1 
// второй элемент будет: длина строки минус 2 
// word 
// drow
