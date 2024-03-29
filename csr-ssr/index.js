const express = require('express');
const app = express();

app.use(express.static('public'))//this is a middleware function
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
const arr = ['-1','0','1']

app.get('/todo',(req,res)=>{
    if (req.xhr) {
        // client side rendering 
        // console.log('this is ajax req')
        res.json(arr)
    }
    else{
        // server side render
        // console.log('normal req')
        res.render('index',{arr})
    }
    // res.send("hello, mr. sethi !!")
})
app.post('/todo',(req,res)=>{
    // console.log(req.body)
    const {todo} = req.body
    arr.push(todo)
    res.redirect('/todo')
})
app.listen(3000,()=>{
    console.log('server running on port no. 3000')
})