// Возьмите 2 строки s1 и s2, содержащие только буквы от a до z. Верните новую
// отсортированную строку (в алфавитном порядке по возрастанию), максимально длинную,
// содержащую различные буквы — каждая из которых встречается только один раз — из s1 или s2.
//
//     Примеры:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    const combined = s1 + s2;
    return Array.from(new Set(combined)).sort().join('');
}