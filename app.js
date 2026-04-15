'use strict'

// parse - парсит json объект, превращая его в объект
const obj = JSON.parse('{"name": "Ivan", "age": 25}')
console.log(obj)

// stringify - преобразует объект в json объект
const jsonObj = JSON.stringify(obj)
console.log(jsonObj)