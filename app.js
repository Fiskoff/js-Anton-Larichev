'use strict'

function changeClick() {
    const input = document.querySelector('.input-text').value;
    document.querySelector('.panel').innerText = input;
    document.querySelector(".input-text").value = "";
};


document.querySelector('.input-btn').addEventListener('click', changeClick);
document.querySelector('.input-text').addEventListener('keydown', e => {  // e - event хранит всю информацию о событии
	if (e.code == 'Enter') {
		changeClick()
	}
});