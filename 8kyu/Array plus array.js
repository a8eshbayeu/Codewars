// Я новичок в кодировании и сейчас я хочу получить сумму двух массивов...
// Точнее, сумму всех их элементов. Буду благодарен за помощь.
//
//     P.S. Каждый массив содержит только целые числа. Выходные данные тоже
//     являются числами.


function arrayPlusArray(arr1, arr2) {

       let sumArr1 = arr1.reduce(function (a1, a2) {
           return a1 + a2;}, 0)

       let sumArr2 = arr2.reduce(function (b1, b2) {
               return b1 + b2; }, 0)

       return sumArr1 + sumArr2; //something went wrong
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))