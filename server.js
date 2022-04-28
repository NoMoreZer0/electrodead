const express = require("express");
const path = require("path");
const {request, response} = require("express");
const app = express();
const port = 3000;

//setting css and js
app.use(express.static('Images'));
app.use(express.static('audio'));
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('fontawesome-free-6.0.0-beta3-web'));

//initiate view engine
app.set('view engine', 'ejs');
app.set('views', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/computer', (req, res) => {
    res.render('computer');
});

app.get('/devices', (req, res) => {
   res.render('devices');
});

app.get('/feedback', (req, res) => {
   res.render('feedback');
});

app.get('/mobile-devices', (req, res) => {
   res.render('mobile-devices');
});

app.get('/signin-signup', (req, res) => {
    res.render('signin-signup');
});

const axios = require('axios');
const cors = require('cors');
app.use(cors());
const key = 'http://api.exchangeratesapi.io/v1/latest?access_key=30eaff674f0bc68f39a169fe10fefc45';

app.get('/exchange', function(req, res) {
    axios(key)
        .then(myData => {
            res.send(myData.data.rates.KZT.toString());
        })
        .catch(err => {
            console.log(err);
        })
})

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);