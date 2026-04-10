const roles = ["admin", "moderator", "user"]

const lengthRoles = roles.length;  // длинна массива

let firsValue = roles[0];  // получение
roles[0] = "superAdmin";  // изменение

roles.push("newRole");  // добавление
roles.unshift();  // добавление в начало

const deleteLastElement = roles.pop();  // удаление последнего элемента и возврат его
const deleteFirstElement = roles.shift();  // удаление первого элемента и возврат его

const index = roles.indexOf("admin");  // вернёт индекс элемента по значению (первое вхождение). Если элемента нет, то вернётся -1
roles.includes("admin");  // вернёт true, если элемент есть в массиве, иначе false

// slice(start, end) - возвращает новый массив, в котором будут элементы из диапазона start до end (не включая end)
roles.slice(1, 3);  // вернёт массив с элементами с индексами 1 и 2
roles.slice(1);  // вернёт массив с элементами с индекса 1 и дальше

// splice(start, deleteCount) - возвращает изменённый массив
roles.splice(1); //  вернёт массив с элементами с индекса 1
roles.splice(1, 2); //  вернёт массив с элементами с индекса 1 и 2

roles.reverse();  // перевернёт массив
roles.sort();  //  сортирует массив

roles.concat(['admin+', 'user+']);  //  объединяет массивы



const url = "auth/user/login"
const urlInList = url.split('/')  // вернёт массив из элементов строки разделённой /
const listInUrl = urlInList.join('/')  // строку из элементов массива разделённых /


// деструктуризация - распаковка значений массива иои объекта в переменные одной строкой
const getRoles = () => ['admin', 'moderator', 'user', 'guest', 'visitor']

// деструктуризация
const [first, second, third] = getRoles()
console.log(first)
console.log(second)
console.log(third)

// выборочная деструктуризация
const [first2, _, third2] = getRoles()  // Распечатается только первый и третий элементы

// Rect(...) оператор
const [first3, second3, ...others] = getRoles()  // first3, second3 - первые два элемента, others - массив из остальных элементов
