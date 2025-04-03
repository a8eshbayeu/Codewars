// Ваша задача - добавить новое свойство usersAnswer к каждому объекту в массиве questions.
// Значение usersAnswer должно быть установлено в null. Решение должно работать для массива любой длины.
//
//     Например:
//
// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// После добавления свойства результат должен быть таким:
//
//    var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];
// Массив вопросов уже определен для вас и отличается от приведенного в примере.

for (key in questions) {
    questions[key].usersAnswer = null;
}