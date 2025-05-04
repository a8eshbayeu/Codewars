// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку из этих чисел в виде номера телефона.
//
//     Пример
//
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//
// Для выполнения этого задания необходимо правильно указать формат возврата.
//
//     Не забудьте пробел после закрывающих скобок!

function createPhoneNumber(numbers) {
    const part1 = numbers.slice(0, 3).join('');
    const part2 = numbers.slice(3, 6).join('');
    const part3 = numbers.slice(6).join('');
    const phone = `(${part1}) ${part2}-${part3}`;
    return phone;
}