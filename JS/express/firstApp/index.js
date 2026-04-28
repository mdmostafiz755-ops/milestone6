const express = require("express")

const app = express()
// app.use((req,res)=>{
//     console.log('we got a new request')//we we get a new request 
//     //res.send('<h1>hello, we got your request</h1>')
// })
app.set('view engine','ejs');
app.get('/cats', (req, res) => {
    res.send('meow')
})
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`this is the ${subreddit} postID:${postId}`);
})
app.get('/dogs', (req, res) => {
    res.send('woof')
})
app.get('/', (req, res) => {
    res.send('welcome to homepage')
})

app.post('/cats', (req, res) => {
    res.send('a post request')
})
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q)
        res.send('nothing searched and found');
    res.send(`search result for: ${q}`)
})
// app.get('*',(req,res)=>{
//     res.send('i do not know that path')
// })
app.listen(4000, () => {
    console.log('listening to port 4000');//which port is it listening to
})
