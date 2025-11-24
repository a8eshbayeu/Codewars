// Вы, вероятно, знакомы с системой "лайк" из Facebook и других страниц. Люди могут
// "лайкнуть" записи в блоге, фотографии или другие элементы. Мы хотим создать текст, который
// будет отображаться рядом с таким элементом.
//
//     Реализуйте функцию, которая принимает массив, содержащий имена людей, которым понравился
//     элемент. Она должна возвращать отображаемый текст, как показано в примерах:
//
//     [] --> "никому это не нравится".


//     []                                -->  "no one likes this"
//     ["Peter"]                         -->  "Peter likes this"
//     ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//     ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//     ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
//
// Примечание: При 4 и более именах число в строке "и 2 других" просто увеличивается.


function likes(names) {
const count = names.length;

    switch (count) {
    case 0:
        return "no one likes this";
    case 1:
        return `${names[0]} likes this`;
    case 2:
        return `${names[0]} and ${names[1]} like this`;
    case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
        return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
    }
}

