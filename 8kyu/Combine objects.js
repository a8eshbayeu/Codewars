// Все свойства входных объектов будут иметь только числовые значения. Объекты объединяются таким
// образом, что значения совпадающих ключей складываются.
//
//     Пример:
//
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Возвращает { a: 13, b: 20, c: 36, d: 3 }
// Функция combine должна быть хорошим гражданином, поэтому не должна мутировать входные объекты.

function combine(...args) {
    let objUntd = {};
    for (let obj of args) {
        for (let key in obj) {
            if (objUntd[key]) {
                objUntd[key] += obj[key]
            } else {
                objUntd[key] = obj[key]
            }
        }
    }
    return objUntd;
}
