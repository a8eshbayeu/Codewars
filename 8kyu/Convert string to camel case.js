// Завершите метод/функцию, чтобы он преобразовывал слова,
// разделенные тире/нижним подчеркиванием, в верблюжий регистр.
// Первое слово в выводе должно быть написано с заглавной буквы только в
// том случае, если исходное слово было написано с заглавной буквы
// (известно как верхний верблюжий регистр, также часто называемый
// регистром Паскаля). Следующие слова должны всегда писаться с заглавной
// буквы.
//
//     Примеры
//
// "the-stealth-warrior" gets converted to "theStealthWarrior"
//
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
//
function toCamelCase(str) {
    return str
        .split(/[-_]/)
        .map((word, index) => {
            if (index === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}