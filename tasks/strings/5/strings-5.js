/**
 * Function take two strings and return
 * count of characters that differ.
 * TASK PRECONDITION: both of the strings are the same length
 * 
 * Example: for strings "yes" and "yep", 1 should be returned.
 * функция должна вернуть количество отличающихся символов  (побуквенное сравнение)
 * 1. Первую и вторую строки переделаем в массивы
 * 2. Сравним первую букву (первый элемент) первого массива с каждой буквой второго 
 * 3. Будем повторять эту операцию пока не кончатся буквы первого массива 
 * 4. Если символ i из массива 1 = символу j из массива 2, то в переменной count+1
 * 5. Иначе переходим к следующему символу  
 * если количество элементов 
 * 
 */

module.exports = function diffStrings(str1, str2) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
    }
    return count;
}
