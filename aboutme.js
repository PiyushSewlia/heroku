const express =require('express');
const hbs=require('hbs');
var app=express();
app.set('view engines','hbs');

app.use(express.static(__dirname +'/views'));
app.get('/',(req,res)=>{
    
    res.send({
        name:"Piyush",
    
    });
    });
    app.get('/intro',(req,res)=>
    {
        res.render("intro.hbs",{
            name:'Piyush',
            surename:"sewlia",
            phone_number:9023839321,
            email_id:"piyushsewlia@gmail.com",
            photo:"intro.jpg"


        });
    });
    app.get('/academic',(req,res)=>
    {
        res.render("academic.hbs",{
            name:'Piyush',
            

        });
    });
    app.get('/hobbies',(req,res)=>
    {
        res.render("hobbies.hbs",{
            name:'Piyush',
            

        });
    });
    app.get('/personal',(req,res)=>
    {
        res.render("personal.hbs",{
            name:'Piyush',
            

        });
    });
        


    
    
app.listen(3000,()=>{
console.log("server running successfully in port no--3000");
});
