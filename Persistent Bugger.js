// Напишите функцию persistence, которая принимает положительный параметр num
// и возвращает его мультипликативную стойкость, то есть количество раз, которое
// необходимо умножить цифры в num, чтобы получить однозначное число.
//
// Например (входные данные --> выходные данные):
//
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
// FundamentalsMathematics
// Ad
// Updated Privacy Policy
// We have updated our Terms of Use and Privacy PolicyRead Now
//
// Solution

function persistence(num) {
    let count = 0;
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, digit) => acc * Number(digit), 1);
        count++;
    }
    return count
}
