// На этот раз без истории и теории. Приведенные ниже примеры показывают, как писать функции accum:
//
//     Примеры:
//
//         accum("abcd") -> "A-Bb-Ccc-Dddd"
//         accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//         accum("cwAt") -> "C-Ww-Aaa-Tttt"
//
// Параметр accum представляет собой строку, в которую входят только буквы от a..z и A..Z.

function accum(s) {
    return s
        .split('')
        .map((char, index) => {
            return char.toUpperCase() + char.toLowerCase().repeat(index);
        })
        .join('-');
}