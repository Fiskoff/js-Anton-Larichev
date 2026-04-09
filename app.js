// Обычная функция
function powerOfTwo(number) {
  return number * number;
}


// Анонимная функция, используется там, где объявлена(в одной области видимости)
const powerOfTwoNotName = function(number) {
  return number * number;
};


// стрелочные функции, аргументы  => результат
const powerOfTwoArrow = number => number * number;
// или
const powerOfTwoArrow2 = (number, i) => {
    console.log(i);
    return number * number
};
