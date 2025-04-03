// Напишите функцию, которая добавляет именованное свойство к объекту. Должна быть возможность установить
// свойству новое значение. Если свойство уже существует в объекте, должна быть выдана
// ошибка.

function addProperty(obj, prop, value) {
if (obj.hasOwnProperty(prop)) throw "Error";
    obj[prop] = value;
}

