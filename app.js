const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.get('/', (req, res) => {
    res.cookie("name", "Ali Hasan")
    res.send('Hello Backend!');
}); 
app.get('/read', (req, res) => {
 
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});