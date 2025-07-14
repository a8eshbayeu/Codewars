// Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных.
// Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая
// строка является изограммой. Игнорируйте регистр букв.
//
//     Пример: (Вход --> Выход)
//
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    const letters = str.toLowerCase()
    const unique = new Set(letters)
    return unique.size === letters.length
}