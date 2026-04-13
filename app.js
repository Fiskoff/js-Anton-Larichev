// Объект
const user = {
	name: 'Sergey',
	surname: 'Fiskov',
	age: 23,
	skills: ['HTML', 'CSS', 'JS'],
	// Метод объекта
	getFullName() {
		return `${this.name} ${this.surname}`  // this - ссылка на объект user
	},
}

const userName = user.name
const userFirstSkills = user.skills[0]
const userFullName = user.getFullName()

// Итерироваться только по ключам объекта
for (let key in user) {
	console.log(key)
}

// Деструктуризация объекта
const {surname, ...uerWithoutSurname} = user
console.log(surname)  // Значение фамилии
console.log(uerWithoutSurname)  // Всё остальное кроме фамилии