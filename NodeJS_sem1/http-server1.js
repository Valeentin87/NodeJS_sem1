// Напишите HTTP сервер и реализуйте два обработчика, где:
// - По URL “/” будет возвращаться страница, на которой есть гиперссылка на
// вторую страницу по ссылке “/about”
// - А по URL “/about” будет возвращаться страница, на которой есть гиперссылка
// на первую страницу “/”
// - Также реализуйте обработку несуществующих роутов (404).
// - * На каждой странице реализуйте счетчик просмотров. Значение счетчика
// должно увеличиваться на единицу каждый раз, когда загружается страница

const http = require('http');

let count1 = 0;
let count2 = 0;
const server = http.createServer((req, res) => {

    console.log("Запрос получен");
    if (req.url === '/') {
        count1 += 1;
        res.writeHead(200, {'Content-Type':  'text/html; charset=UTF-8'});
        res.end(`<h1> Добро пожаловать !!! Ниже ссылка на вторую страницу Cчётчик равен ${count1}</h1> <a href="http://127.0.0.1:3000/about">About</a>`);                
    }
    else if (req.url === '/about') {
        count2 += 1;
        res.writeHead(200, {'Content-Type':  'text/html; charset=UTF-8'});
        res.end(`<h1> Добро пожаловать !!! Ниже ссылка на первую страницу. Cчётчик равен ${count2}</h1> <a href="http://127.0.0.1:3000/">Main</a>`);                
    }
    else {
        res.writeHead(404, {'Content-Type':  'text/html; charset=UTF-8'});
        res.end('<h1> Страница не найдена </h1>');                
    }
    
});

const port = 3000;
server.listen(port, () => {
    console.log("Сервер запущен на порту 3000 ");
});

