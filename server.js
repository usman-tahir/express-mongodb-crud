
const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function() {
    console.log('Listening at http://localhost:3000');
});

// Default path
app.get('/', function (req, res) {
    // res.send('Hello World');
    res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', function (req, res) {
    // Elements of the form
    console.log(req.body);
});