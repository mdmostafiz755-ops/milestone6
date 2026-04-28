const express=require("express")

const app=express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/tacos',(req,res)=>{
    console.log(req.body)
    res.send('HI')
})
app.get('/',(req,res)=>{
    res.send('HI')
})
app.listen(2000,()=>{
    console.log('listening to 2000 port')
})