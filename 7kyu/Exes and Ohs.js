// Проверьте, содержит ли строка одинаковое количество символов «x» и «o».
// Метод должен возвращать булево значение и быть нечувствительным к регистру. Строка может
// содержать любые символы.
//
//     Примеры ввода/вывода:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    str = str.toLowerCase();
    return str.split('').filter(c => c === 'x').length === str.split('').filter(c => c === 'o').length;
}
