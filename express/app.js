const express = require('express');
const bodyparser =require('body-parser');
const app = express();

// ***body parser
const urlencodedParser = bodyparser.urlencoded({ extended: false});

// ***to set the view engine for express
app.set('view engine', 'ejs');
//
app.use('/assets', express.static('assets'));

app.get('/', (req, res) =>{
    console.log(req.query);
    res.render('index');
});

app.get('/about', (req, res) =>{
    console.log(req.body);
    res.render('about', {qs: req.query});
});


app.post('/about', urlencodedParser, (req, res) =>{
    res.render('about-success', {data: req.body});
});


// ***injuction of dynamic data
app.get('/profile/:name', (req, res) =>{
    const data = {age: 30, job: 'developer', friends: [ 'sarah', 'jane', 'william']}
    res.render('profile', {person: req.params.name, data});
});
app.listen(3000); 