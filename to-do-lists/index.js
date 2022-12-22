const express = require('express');
const app = express();
const methodOverride = require('method-override')
// let data = require('./data.json');
app.use(methodOverride('_method'));

app.use(express.static('views'))
let data = [
  {
    id: 1,
    todo: "eat",
  },
  {
    id: 2,
    todo: "sleep",
  },
  {
    id: 3,
    todo: "code",
  },
  {
    id: 4,
    todo: "repeat",
  },
];

app.use(express.urlencoded({
    extended:true
  }));  
app.set('view engine','ejs');


/* function to generate random ID */
function randomId(){
    let flag = true;
    while(flag){
        let num = Math.floor(Math.random()*100);
        const fil = data.filter((ele)=>{
            return ele.id == num;
        })
        if(fil.length==0){
            return num;
        }
    }
}

app.get('/todos',(req,res)=>{
    res.render('todos',{data});
})

app.post('/todo/new',(req,res)=>{
    const {content} = req.body;
    const newTodo = {
        id:randomId(),
        todo:content
    }
    data.push(newTodo);
    res.redirect('/');
})

app.get('/',(req,res)=>{
    res.render('home',{data});
})

app.get('/todo/:id/edit',(req,res)=>{
    const {id} = req.params;
    const editData = data.find((ele)=>{
      return ele.id===parseInt(id);
    })
    res.render('edit.ejs',{editData});
})

app.patch('/todo/:id/edit',(req,res)=>{
    const {id} = req.params;
    const change = req.body
    let fnd = data.find((c)=>{return c.id===parseInt(id)});
    fnd.todo = change.content
    res.redirect('/');
  })

app.delete('/todo/:id',(req,res)=>{
    const {id} = req.params
    const fil = data.filter((e)=>{return e.id!==parseInt(id)})
    data = fil;
    res.redirect('/');
})

app.listen(4444,()=>{
    console.log(`http://localhost:${4444}/`)
})