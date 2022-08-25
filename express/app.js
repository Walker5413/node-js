const express = require('express');

const app = express();


// ***to set the view engine for express
app.set('view engine', 'ejs');
//
app.use('/assets', express.static('assets'));

app.get('/', (req, res) =>{
    res.render('index');
});
app.get('/about', (req, res) =>{
    console.log(req.query);
    res.render('about', {qs: req.query});
});
// ***injuction of dynamic data
app.get('/profile/:name', (req, res) =>{
    const data = {age: 30, job: 'developer', friends: [ 'sarah', 'jane', 'william']}
    res.render('profile', {person: req.params.name, data});
});
app.listen(3000); 