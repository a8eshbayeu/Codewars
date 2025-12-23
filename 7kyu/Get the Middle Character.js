// Вам будет дана непустая строка. Ваша задача - вернуть средний символ (символы) строки.
//
//     Если длина строки нечетная, верните средний символ.
//     Если длина строки четная, верните 2 средних символа.
//     Примеры:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A".

function getMiddle(s){
    let middle = Math.floor(s.length / 2);
    if (s.length % 2 === 0) {
        return s.substring(middle - 1, middle + 1);
    } else {
        return s.charAt(middle)
    }
}

