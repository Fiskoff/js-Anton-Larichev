// У стрелочной функции нет this.

const user = {
	name: 'Mango',

	// Короткая форма записи. Стандарт для метода объекта
	showName() {
		console.log('this: ', this.name) // console.log() - Mango
	},

	showName1: function () {
		console.log('this: ', this.name) // console.log() - Mango
	},

	showName2: () => {
		console.log('this: ', this.name) // console.log() - undefined
	},
}



// call и apply

const carBMW = {
	name: 'BMW',
	model: 'X5',
	year: 2010,
	damages: [],
	addDamage(part, rate) {
		console.log(
			`У авто ${this.name} ${this.model} ${this.year} добавлена повреждение ${part} со степенью ${rate}}`,
		)
		this.damages.push({ part, rate })
	},
}

const carAudi = {
	name: 'Audi',
	model: 'A3',
	year: 2021,
	damages: [],
}

const carLada = {
	name: 'Lada',
	model: 'Vesta',
	year: 2025,
	damages: [],
}

carBMW.addDamage('"Левый передний бампер"', 5) // console.log() - У авто BMW X5 2010 добавлена повреждение "Левый передний бампер" со степнью 5
carAudi.addDamage('"Правый передний бампер"', 4) // console.log() - error is not function

const addDamageCar = carBMW.addDamage

// метод coll - вызывает функцию на выбранном объекте с определёнными параметрами
addDamageCar.call(carAudi, '"Левое переднее крыло"', 5);
addDamageCar.call(carLada, '"Правый передний бампер"', 4);

//  метод apply - вывает функцию на выбранном объекте с определёнными параметрами, передаваемые в виде списка
addDamageCar.apply(carAudi, ['"Левое переднее крыло"', 5]);
addDamageCar.apply(carLada, ['"Правый передний бампер"', 4]);



// bind - связывает объект с функцией

const newAudi = {
    name: 'Audi',
    model: 'A5',
    damages: [],
}

const carManipulate = {
    addDamage(part, rate) {
        this.damages.push({ part, rate })
    }
}

const addDamageAudi = carManipulate.addDamage.bind(newAudi) 
addDamageAudi('Крыло', 1);
console.log(newAudi.damages)



// Замыкание - функция помнит, в каком контексте она была создана и может его использовать
function changeBalance() {
    let balance = 0;
    return function (sum) {  // функция была создана здесь и она хранит память об объектах в этой области видимости
        balance += sum
        console.log("Баланс: " + balance)
    }
}

const change = changeBalance()
change(100)
change(-50)
change(200)