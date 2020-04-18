const express=require('express');

var app=express();
app.use(express.static(__dirname+'/public'));
app.set('view engine','hbs');

app.get('/',(req,res) => {
res.send('<h1>hello express and hbs</h1>');

});
app.get('/contact',(req,res) => {
    res.send('Contact page');
    
    });
    app.get('/about',(req,res) => {
        res.render('about.hbs',{
            pageTitle:'About',
            yr: new Date().getFullYear()
        });
        
        });

app.listen(2002,()=>
{
    console.log("running s")
});