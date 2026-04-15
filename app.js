'use strict'

// Добавление html кода в DOM

const newElement = document.createElement('button');  // Создание элемента
newElement.classList.add('input-btn')  // Добавление класса
newElement.innerHTML = "<span>Click me</span>"  // Добавление html тегов в новый объект
document.querySelector(".test").appendChild(newElement)  // Добавляем элемент в DOM

