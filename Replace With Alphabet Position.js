// Добро пожаловать.
//
//     В этом ката вы должны, получив строку, заменить каждую букву на ее место в алфавите.
//
//     Если что-то в тексте не является буквой, игнорируйте это и не возвращайте.
//
// "a" = 1, "b" = 2 и т. д.
//
//     Пример
//
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
   return text
       .toLowerCase()
       .split('')
       .filter(char => char >= 'a' && char <= 'z')
       .map(char => char.charCodeAt(0) - 96)
       .join(' ');
}