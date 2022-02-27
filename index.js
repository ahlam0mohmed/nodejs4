const express=require("express");
const app=express();

app.set('view engine','ejs');
app.set('views','app_views');

app.use(express.static('app_views/css'));
app.use(express.static('app_views/js'));
app.use(express.static('app_views/img'));
 
app.get("/",(req,res)=>{
    
    res.render("home",{title:'potofilo'});
    
});

app.listen("3008", ()=>{
    console.log("The server 3008 is ok");
});
