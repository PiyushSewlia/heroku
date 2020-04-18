const express = require('express');
const hbs = require('hbs');
var app = express();
hbs.registerPartails(__dirname + '/views/partial');

app.set('view engine','hbs');//set--- key & value
app.use(express.static(__dirname + './public'));//middleware function - use()
hbs.registerHelper('getCurrentYear',()=>{
    return new Data().getFullYear()
});

app.get('/home1',(req,res) =>{
res.render('home1.hbs' , {
pageTitile : 'home1',

});
});
app.get('/about1',(req,res) =>{
res.render('about1.hbs' , {
pageTitile : 'about1',

});
});
app.listen(3000,() => {
console.log("Server running successfully in port no - 3000");

});

