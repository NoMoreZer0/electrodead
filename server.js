const express = require("express");
const path = require("path");
const {request, response} = require("express");
const app = express();
const port = 3000;

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