const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Статические файлы
app.use(express.static(path.join(__dirname, '../public')));

// Главная страница
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Получение всех товаров
app.get('/products', (req, res) => {
  const products = JSON.parse(fs.readFileSync(path.join(__dirname, './data/products.json')));
  res.json(products);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});