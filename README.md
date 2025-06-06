## Установка и запуск

### 1. Скачать и установить [node.js](https://nodejs.org/en/download)
### 2. Проверка установки
```
npm -v #выводит версию npm
node -v #выводит версию node.js
```
### 3. Клонирование репозитория

```shell
git clone https://github.com/Be1yashik0/lr3.git
```

### 4. Запуск сервера пользователя

```shell
yarn start 
```

запуск сервера

```shell
yarn admin
```

### 4. Запуск сервера администратора

```shell
npm install 
```

запуск сервера

```shell
yarn admin
```

### 5. Открытие страницы пользователя
Перейти по ссылке:

```
http://localhost:3000
```

## Взаимодействие с админ-панелью через cURL
### a) Получить список всех товаров (GET)

```
curl -X GET http://localhost:8080/products
```

### b) Добавить новый товар (POST)

```
    curl -X POST http://localhost:8080/products -H "Content-Type: application/json" -d '{
    "id": 6,
    "name": "Product 6",
    "description": "Description of Product 6",
    "price": 600
}'
```

### c) Обновить товар (PUT)

```
    curl -X PUT http://localhost:8080/products/1 -H "Content-Type: application/json" -d '{
    "id": 1,
    "name": "Updated Product 1",
    "description": "Updated Description of Product 1",
    "price": 150
}'
```

### d) Удалить товар (DELETE)

```
curl -X DELETE http://localhost:8080/products/1
```
