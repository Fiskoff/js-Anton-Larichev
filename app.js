'use strict'

function changeClick() {
    const input = document.querySelector('.input-text').value;
    document.querySelector('.panel').innerText = input;
    document.querySelector(".input-text").value = "";
};

// через querySelector обращаемся к элементу, addEventListener обработчик событий
document.querySelector('.input-btn').addEventListener('click', changeClick);