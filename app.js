const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
	res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})

app.use('/product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
})

app.get('/show', (req, res, next) => {
	res.send('<h1>showing from Express!</h1>');
})

app.use('/', (req, res, next) => {
	res.send('<h1>Hello from Express!</h1>');
	next();
})

app.listen(3002);