// Напишите функцию, которая принимает строку из одного или нескольких слов и
// возвращает ту же строку, но со всеми словами, состоящими из пяти или более букв,
// в обратном порядке (так же, как название этой ката). Передаваемые строки будут состоять
// только из букв и пробелов. Пробелы будут включены только в том случае, если присутствует
// более одного слова.
//
//     Примеры:
//
// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

function spinWords(string){
    return string
        .split(" ")
        .map(word => word.length >= 5 ? word.split("").reverse().join("") : word)
        .join(" ");
}