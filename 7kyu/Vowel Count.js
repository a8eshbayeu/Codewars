// Верните количество (count) гласных в заданной строке.
//
//     В этом ката мы будем считать гласными буквы a, e, i, o, u (но не y).
//
// Входная строка будет состоять только из строчных букв и/или пробелов.
//

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}