// Банкоматы позволяют вводить 4 или 6-значные PIN-коды, и PIN-коды не могут содержать
// ничего, кроме ровно 4 или ровно 6 цифр.
//
// Если функции передана правильная строка PIN-кода, возвращается true, в противном случае
// возвращается false.
//
// Примеры (вход --> выход)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
if(pin.length !== 4 && pin.length !== 6) {
    return false
}
for (let i = 0; i < pin.length; i++) {
    if(pin[i] < '0' || pin[i] > '9') {
        return false
    }
}
return true
}