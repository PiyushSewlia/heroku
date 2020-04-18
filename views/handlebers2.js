const express =require('express');
const hbs =require('hbs');

var app=express(); //creating app using express
app.set('wiew engine','hbs'); //set --key and value
app.use(express.static(__dirname+'/public'));

app.get('/',(req, res)=>{
    res.send({
        name:'Piyush',
        courses:['CAP919','CAP917','CAP918']

    });

});
app.get('/about',(req, res)=>{
    res.render('about.hbs',{
        pagetitle: 'About',
        Yr: new Date().getFullYear()
    });
});
app.listen(3000, ()=>{
    console.log("server running succesfully to port 3000);S
})