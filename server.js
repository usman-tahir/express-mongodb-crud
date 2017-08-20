
const express = require('express'),
    bodyParser = require('body-parser'),
    MongoClient = require('mongodb').MongoClient,
    app = express();

var database;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Set up a connection to the MongoDB Client
MongoClient.connect('mongodb://root:root@ds153113.mlab.com:53113/express-mongodb-crud', function(err, db) {
    if (err) {
        return console.log(err);
    } else {
        database = db;
        app.listen(3000, function() {
            console.log('Connected to the mLab database.');
            console.log('Listening at http://localhost:3000');
        });
    }
});

// Default path
app.get('/', function(req, res) {
    database.collection('quotes').find().toArray(function(err, result) {
        console.log(result);
        res.render('index.ejs', { quotes: result });
    });
    // res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', function(req, res) {
    database.collection('quotes').save(req.body, function(err, result) {
        if (err) {
            return console.log(err);
        } else {
            console.log('Saved the quote to the database.');
            res.redirect('/');
        }
    });
});