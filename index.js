const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

// For parsing application/json
app.use(bodyParser.json());

app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.send('Hello there!!');
});

app.post('/conversations', function (req, res) {
	console.log(
		'authorization: ' +
			req.headers['authorization'] +
			'\nhost:' +
			req.headers['host']
	);
	console.log(req.body);
	res.send({
		msg: '2 + 2 = 4',
	});
});

app.listen(port, function () {
	console.log(`Example app listening on port ${port}`);
});
