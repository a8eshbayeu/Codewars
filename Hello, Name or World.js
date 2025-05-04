// Определите метод hello, который возвращает "Hello, Name!" для заданного имени или говорит "Hello, World!", если имя не задано (или
// передано как пустая строка).
// Предполагается, что имя является строкой и проверяется на опечатки пользователя, чтобы вернуть имя с первой заглавной буквой (Xxxx).
//
//     Примеры:
//
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
//     * With `name` not given
// or `name` = ""        => return "Hello, World!"


function hello(name) {
    if(!name || name.length === 0) {
        return "Hello, World!";
    }  else {
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        return `Hello, ${capitalizedName}!`;
    }
}