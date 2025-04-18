// Функция хода в терминальной игре
// Вы создаете текстовую терминальную версию вашей любимой настольной
// игры. В настольной игре каждый ход состоит из шести шагов, которые
// должны происходить в таком порядке: бросок костей, перемещение, бой,
// получение монет, покупка здоровья и печать статуса.
//
// Вы используете библиотеку (Game.Logic на C#), в которой уже есть
// приведенные ниже функции. Создайте функцию с
// именем doTurn/DoTurn/do_turn, которая будет вызывать функции в
// правильном порядке, как описано в параграфе выше.
//
// - бой
// - buyHealth
// - getCoins
// - printStatus
// - rollDice
// - move

function doTurn () {
    rollDice()
    move()
    combat()
    getCoins()
    buyHealth()
    printStatus()
    // Call functions here
}