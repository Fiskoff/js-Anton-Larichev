// Итерирование по массиву
const score = [5, 0, 6, 15];

for (const [i, el] of score.entries()) {  // entries() - возвращает массив состоящий из индекса и элемента под этим индексом
	console.log(`Раунд ${i + 1}: ${el}`)
}

// Более короткая запись. forEach - функция высшего порядка частичная замена обычного for цикла
const iterScore = score.forEach((scoreEl, i) => console.log(`Раунд ${i + 1}: ${scoreEl}`));



// Перебор массива и создание нового. Функция map() возвращает новый массив
const transactionInUSD = [5, 3, -4, 15];
const transactionInRUB = transactionInUSD.map(
    (transactionEl) => transactionEl * 76
);

// Перебор массива и создание нового на основе старого, где значения больше нуля
const positiveOperations = transactionInUSD.filter(
    (transactionEl) => transactionEl > 0
);

// Объединение двух map и filter
operations = [100, -20, 7, -20, 50]
const positiveRUBOperations = operations
	.filter(transactionEl => transactionEl > 0)
	.map(transactionEl => transactionEl * 76)

console.log(positiveRUBOperations);



// find и findindex - возвращает элемент / индекс первого вхождения, который удовлетворяет условие collback функции
const transactions = [5, 3, -4, 15, 20, 7, -20, 50];

const firstPositiveTransaction = transactions.find(transactionEl => transactionEl < 0);
const firstPositiveTransactionIndex = transactions.findIndex(transactionEl => transactionEl < 0);



// flat  - возвращает новый массив, c пониженный вложенностью
const arr = [[1, 2], [3, 4], [5, 6]];
const flatArr = arr.flat();  // [1, 2, 3, 4, 5, 6]
