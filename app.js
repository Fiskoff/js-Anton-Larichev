// DOM (Document Object Model) - это объект представление исходного HTML-кода документа
// DOM  позволяет программно, при помощи js, манипулировать HTML-кодом

'use strict' // это режим, в котором JavaScript не пропускает ошибки, которые раньше игнорировал, и помогает избежать неожиданного поведения кода. 

// document - корневой элемент документа, даёт доступ к элементам страницы

const panelText = document.querySelector('.panel').innerText;  // получаем текст
console.log(panelText);
document.querySelector('.panel').innerText = 'Привет, мир!';  // изменяем текст
document.querySelector('.panel').style.backgroundColor = 'red';  // устанавливает стиль
