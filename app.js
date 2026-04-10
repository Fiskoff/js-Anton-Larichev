const tasks = [
	'Задача 1',
	'Задача 2',
	'Задача 3',
	'Задача 4',
	'Задача 5',
	'Задача 6',
	'Задача 7',
	'Задача 8',
]

for (let i = 0; i < tasks.length; i++) {
	if (tasks[i] === 'Задача 3') {
		continue
	}

	if (tasks[i] === 'Задача 5') {
		break
	}

	console.log(tasks[i])
}

let i = 0
while (tasks[i] !== 'Задача 5') {
	console.log(tasks[i])
	i++
}

// итерируется по значениям массива
for (let element of tasks) {
	console.log(element)
}

// итерируется по индексам массива
for (let index in tasks) {
	console.log(index)
}