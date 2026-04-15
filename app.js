'use strict'

function changeClick() {
    const input = document.querySelector('.input-text').value;
    document.querySelector('.panel').innerText = input;
    document.querySelector(".input-text").value = "";

    // 1 вариант изменения стиля - не самый удобный, так как нужно прописывать свойства в js файле
    document.querySelector('.notification').style.display = "block";
    // 2 вариант изменения стиля - выбранному объекту подключаю ещё один класс, который переопределит нужные свойства
    document.querySelector('.notification').classList.add('notification_active')
};

document.querySelector('.input-btn').addEventListener('click', changeClick);
document.querySelector('.input-text').addEventListener('keydown', e => {  // e - event хранит всю информацию о событии
	if (e.code == 'Enter') {
		changeClick()
	}
});