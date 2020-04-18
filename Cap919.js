const express=require("express");
const hbs=require('hbs');
 var app=express();
 
 app.use(express.static(__dirname+'/public'));
 app.set('view engines','hbs');
 const port=process.env.PORT||3000;
 hbs.registerPartials(__dirname+'/views/partials');
 
 
 hbs.registerHelper('getCurrentYear',()=>{
     return new Date().getFullYear()
 })
 app.get('/',(req,res)=>{
     res.render('Homepagehere.hbs',{
         pageTitle:'CONNECTED',
         plansolution:"button services",
         workes:"44,942 ",
         node:"buttonround",



     });


 });
 
 app.get('/AboutPage',(req,res)=>
	{
		res.render("aboutpagehere.hbs",{
            about:'Facebook is an American online social media and social networking service based in Menlo Park, California and a flagship service of the namesake company Facebook, Inc. It was founded by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.', 
            Headquarters:"UK",
            Editor:"Mark Zuckerberg",
            


		});
	});
app.get('/ContactUs',(req,res)=>
{
    res.render("contactushere.hbs",{
    ////
        contactus:"Guru Nanak Dev university",
        pin:143005,
        phone_number:9023839321,
        

    });
});
app.get('/ReachUs',(req,res)=>
{
    res.render("reachushere.hbs",{
        
        address:"Chheharta Amritsar Punjab",
        pin:143105,
        

    });
});

app.listen(port,()=>{

    console.log('sever running successfully in port no:-3000');
});