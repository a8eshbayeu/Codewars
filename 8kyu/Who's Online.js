// У вас есть приложение для группового чата, но кто в нем онлайн?
//
//     Вы хотите показать пользователям, кто из их друзей находится в сети и доступен для общения!
//
//     Получив на вход массив объектов, содержащий имена пользователей, статус и время с момента последней активности (в минутах),
//     создайте функцию, которая будет определять, кто находится онлайн, оффлайн и вдали.
//
//     Если кто-то находится в сети, но его последняя активность была совершена более 10 минут назад, он будет считаться отсутствующим.
//
//     Входные данные имеют следующую структуру:
//
//     [{
//         userename: 'David',
//     status: 'online',
//     lastActivity: 10
// }, {
//     username: 'Lucy',
//         status: 'offline',
//         lastActivity: 22
// }, {
//     username: 'Bob',
//         status: 'online',
//         lastActivity: 104
// }].
// Соответствующий вывод должен выглядеть следующим образом:
//
// {
//     online: ['David'],
//         offline: ['Lucy'],
//     away: ['Bob']
// }
// Если, например, ни один пользователь не находится в сети, вывод должен выглядеть следующим образом:
//
// {
//     offline: ['Lucy'],
//         away: ['Bob']
// }
// Имя пользователя всегда будет строкой, статус всегда будет либо 'online', либо 'offline' (перечисление UserStatus в C#),
// а lastActivity всегда будет числом >= 0.
//
// Наконец, если в вашем чат-приложении нет друзей, на входе будет пустой массив []. В этом случае вы должны вернуть
// пустой объект {} (пустой словарь в C#).

const whosOnline = (friends) => {
    const result = {}

    friends.forEach(friend => {
        if (friend.status === 'online' && friend.lastActivity <= 10) {
            if(!result.online) result.online = [];
                result.online.push(friend.username)
            } else if (friend.status === 'offline') {
            if(!result.offline) result.offline = [];
                result.offline.push(friend.username)
            } else {
            if(!result.away)result.away = [];
            result.away.push(friend.username)
        }
    })
      return result;
}