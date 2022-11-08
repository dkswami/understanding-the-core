const fs = require('fs');

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title> Hello Page </title></head>');
		res.write('<body><h2> Hello Greetings! This is the assignment code </h2> </body>');
		res.write('<body><form action = "/create-user" method="POST" > <input type= "text" name="username"> <button type="submit"> Send User </button> </form> </body>');
		res.write('</html>');
		return res.end();
	}
	if (url === '/users') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title> Hello Page </title></head>');
		
		res.write('<body><ul><li> User 1</li><li> User 2</li>  </ul</body>');
		res.write('</html>');
		console.log("Server is running on port 00")
		return res.end();
	}
	if (url === '/create-user' && method === 'POST') {
		const body = [];
		req.on("data", chunk => {
			body.push(chunk);
		})
		return req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			const username = parsedBody.split('=')[0]
			console.log(username)
			res.statusCode = 302;
			res.setHeader('Location', '/');
			return res.end();
		})
	}
}

module.exports = requestHandler;