// variables declaration

const { urlencoded } = require("express");
const express = require("express");

const path = require('path');

const app = express();

const port = 3000;

// app setup Middleware

app.use(express.json());
app.use(urlencoded({extended: false}));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server Listening on Port: ${port}`);
})