const money = 100
const canBuy = money > 50



if (canBuy) {
	console.log('I can buy a car')
} else if (money > 25) {
	console.log('I can buy a bike')
} else {
	console.log("I can't buy anything")
}




// не строгое равенство(==) проверяет только значение, строгое равенство(===) проверяет и тип и значение
const valTrue = '7' == 7
const valFalse = '7' === 7

const role = 'admin'

switch (role) {
	case 'guest':
		console.log('Guest user')
		break
	case 'moderator':
		console.log('Moderator user')
		break
    // можно использовать несколько случаев
	case 'admin':
	case 'admin +':
		console.log('Admin user')
		break
	default:
		console.log('Unknown user')
}



// Тернарный оператор
10  > 5 ? console.log('Yes') : console.log('No')