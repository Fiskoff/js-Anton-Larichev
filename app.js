'use strict'

// Поместить значение в локальное хранилище
localStorage.setItem("token", "ewdfwefweff32e23e3d23d23e31")

// Получить значение в локальное хранилище
const token = localStorage.getItem("token")

// Удалить ключ в локальном  хранилище
localStorage.removeItem("token")

// Очистить локальное хранилище
localStorage.clear()
