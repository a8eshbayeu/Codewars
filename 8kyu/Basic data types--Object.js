// В JavaScript Object является одним из основных типов данных. Для определения объекта вы можете
// использовать let obj = new Object() или let obj = {}.
//
//     Вы можете определить атрибуты объекта во время инициализации, как это:
//
//     let animal = {name: "dog"}
// Вы также можете установить/получить некоторые свойства после определения объекта, как это:
//
//     let animal = {}
// animal.name = "dog"
// // или:
// animal["name"] = "dog"
// Задача
// Дадим вам функцию animal, принимающую 1 параметр:obj, как это:
//
// {name: "dog",legs:4,color: "white"}
// и возвращать строку, например:
//
// "This white dog has 4 legs."

function animal(obj){
    return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.';
}

