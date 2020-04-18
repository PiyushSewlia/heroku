
const express =require('express');
var app= express(); //

app.get('/',(req, res)=>{
	
	res.send({
        name:'Piyush',
        courses: ['CAP 919, CAP 918']
    });
});
    app.get('/about', (req, res)=>{
        res.send('<br> ABOUT PAGE </br>')
    });


app.listen(3000);