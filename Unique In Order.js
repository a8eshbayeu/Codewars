// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов,
// в котором нет ни одного элемента с одинаковым значением, расположенного рядом друг с другом и сохраняющего исходный порядок элементов.
//
//     Например:
//
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = function (iterable) {
    const result = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i - 1]) {
            result.push(iterable[i]);
        }
    }
    return result;
}