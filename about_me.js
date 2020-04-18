const express = require('express');
const hbs = require('hbs');
var app = express();
app.set('view engine','hbs');//set--- key & value
app.use(express.static(__dirname + './public'));//middleware function - use()
app.get('/',(req,res)=>{//creating handler req=request res=response
res.send({
name:' Piyush',
});
//res.render('home.hbs');
});
app.get('/',(req,res) =>{
res.render('intro.hbs' , {
pageTitile : 'home',
Yr : new Date().getFullYear()

});
});
app.get('/academic',(req,res) =>{
res.render('academic.hbs' , {
pageTitile : 'academic',
Yr : new Date().getFullYear()

});
});
app.get('/hobbies',(req,res) =>{
res.render('hobbies.hbs' , {
pageTitile : 'hobbies',
Yr : new Date().getFullYear()

});
});
app.get('/personal',(req,res) =>{
    res.render('personal.hbs' , {
    pageTitile : 'personal',
    Yr : new Date().getFullYear()
    
    });
    });
    
app.listen(3000,() => {
console.log("Server running successfully in port no - 3000");

})

