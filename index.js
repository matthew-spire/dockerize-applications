var express = require('express');
var app     = express();
var port = process.env.PORT || 3000

app.get('/', function(req,res) {
  console.log(new Date().toLocaleString());
	res.send(new Date().toLocaleString());
});

app.listen(port, () => {
	console.log(`Listening at http://localhost: ${port}`);
});