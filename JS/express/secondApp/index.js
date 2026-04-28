const express=require("express");
const path=require('path');
const app=express()
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'))
app.get('/',(req,res)=>{
    res.render('home.ejs');
})
app.get('/rand',(req,res)=>{
    const num=Math.floor(Math.random()*10)+1;
    res.render('random',{num:num})
})
app.listen(5000,()=>{
    console.log('listening at port 5000');
})
