// Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать на своем месте. Нам нужна функция,
// которая подсчитывает количество овец, присутствующих в массиве (true означает "присутствует").
//
// Например,
//
//     [true, true, true, false,
//         true, true, true, true ,
//         true, false, true, false,
//         true, false, false, true ,
//         true, true, true, true ,
//         false, false, true, true]
// Правильный ответ будет 17.
//
// Подсказка: Не забудьте проверить на наличие плохих значений, таких как null/undefined


function countSheeps(sheep) {
let count = 0;
for(let i = 0; i < sheep.length; i++)
    if(sheep[i] === true)
      count++;
return count;
}

