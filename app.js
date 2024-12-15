const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');

app.use(cookieParser())

app.get('/', (req, res) => {
    bcrypt.compare("alihasan", "$2b$10$7IICOxufKiQGm9GHP013JeKnly2Hz/ylFVFFpcoKLnrSX7nu1LWKm", function(err, result) {
console.log(result);
    });
})

// app.get('/', (req, res) => {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash('alihasan', salt, function (err, hash) {
// console.log(hash);
//         });
//     });
//     res.send('Hello Backend!');
// })

// app.get('/', (req, res) => {
//     res.cookie("name", "Ali Hasan")
//     res.send('Hello Backend!');
// }); 
// app.get('/read', (req, res) => {
// console.log(req.cookies)
//     res.send('Hello World!');
// });

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});