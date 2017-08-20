
const express = require('express'),
    app = express();

app.listen(3000, function() {
    console.log('Listening at http://localhost:3000');
});

// Default path
app.get('/', function (req, res) {
    // res.send('Hello World');
    res.sendFile(__dirname + '/index.html');
});

app.get('/quotes', function (req, res) {
    console.log('posted a quote');
});