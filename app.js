// Объекты(изменяемые) и примитивы(не изменяемые)
// Примитивные типы: числа, строки, логический тип, null(намеренное отсутствие значения), undefined(значение ещё не присвоено), Symbol(уникальное неизменяемое значение)



const projectName = 'Internet Store';
const price = 2000;
// Шаблонная строка
const fullString = `Проект: ${projectName} - цена: ${price}`



// Конвертация типов
const age = '18'
const ageNumber = Number(age)
const ageString = String(ageNumber)

// false
const valFalse1 = Boolean(0)
const valFalse2 = Boolean('')
const valFalse3 = Boolean(null)
const valFalse4 = Boolean(undefined)
const valFalse5 = Boolean(NaN)  // или Boolean(Number("age"))