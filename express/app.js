const express = require('express');

const app = express();

// ***to set the view engine for express
app.set('view engine', 'ejs');
//
app.get('/home', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});
app.get('/about', (req, res) =>{
    res.sendFile(__dirname + '/about.html');
});
// ***injuction of dynamic data
app.get('/profile/:name', (req, res) =>{
    const data = {age: 30, job: 'developer'}
    res.render('profile', {person: req.params.name, data});
});
app.listen(3000); 