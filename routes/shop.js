const express = require('express');
const router = express.Router();

router.get('/show', (req, res, next) => {
	res.send('<h1>showing from Express!</h1>');
})

router.get('/', (req, res, next) => {
	res.send('<h1>Hello from Express!</h1>');
	next();
})

module.exports = router;