const express=require('express')
const path=require('path')
const app= express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


//comment array

const comments=[
    {
        id:1,
        username: 'jhon Doe',
        comment: 'lol that is so funny'
    },
    {
        id:2,
        username: 'Asik',
        comment: 'Hi'
    },
    {
        id:3,
        username: 'Riaz',
        comment: 'Kemon acho'
    }
]

app.get('/comments',(req,res)=>{
 res.render('comments/index',{comments})
})
app.get('/comments/new',(req,res)=>{
 res.render('comments/new')
})
app.get('/comments/:id',(req,res)=>{
    const{id}=req.params;
    const comment=comments.find(c=>c.id===parseInt(id));
    res.render('comments/show',{comment})
})
app.post('/comments',(req,res)=>{
    const{username,comment}=req.body;
    comments.push({username,comment})
    res.redirect('/comments')
})
app.listen(4040,()=>{
    console.log('connected to port 4040')
})