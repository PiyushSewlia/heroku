const express = require('express');
const hbs = require('hbs');
var app = express();
app.set('view engine','hbs');//set--- key & value
app.use(express.static(__dirname + './public'));//middleware function - use()
app.get('/',(req,res)=>{//creating handler req=request res=response
res.send({
name:'Lovely Professional University',
courses:["Welcome to School Of Computer Application of  Lovely Professional University"]
});
//res.render('home.hbs');
});
app.get('/',(req,res) =>{
res.render('home.hbs' , {
pageTitile : 'home',
Yr : new Date().getFullYear()

});
});
app.get('/bca',(req,res) =>{
res.render('bca.hbs' , {
pageTitile : 'bca',
Yr : new Date().getFullYear()

});
});
app.get('/mca',(req,res) =>{
res.render('mca.hbs' , {
pageTitile : 'mca',
Yr : new Date().getFullYear()

});
});
app.listen(3000,() => {
console.log("Server running successfully in port no - 3000");

})

