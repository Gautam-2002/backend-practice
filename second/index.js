// const express = require('express');
// const nodemon = require('nodemon');
// const app = express();
// // .use vs .get
// // middleware
// app.use(express.static('public'));
// app.get('/',(req,res)=>{
//     res.send('hello');
// })
// app.get("/search", (req, res) => {
//   console.log(req.query);
//   // http://localhost:4002/search?name=gautam&lastname=sethi
//   //   { name: 'gautam', lastname: 'sethi' }
//   const {name,lastname,place} = req.query;
//   res.send(`this is query
//             ${name} ${lastname} ${place}`);
// });
// app.get('/:path',(req,res)=>{
//     res.send(`${req.params.path}`)
// })
// app.listen(4002,()=>{
//     console.log("server : 4002");
// })
// //nodemon index.js


// date - 06-12-2022
// ejs, hbs, pug, nudjug - 
// EJS simply stands for Embedded Javascript. It is a simple 
// templating language/engine that lets its user generate HTML 
// with plain javascript. EJS is mostly useful whenever you 
// have to output HTML with a lot of javascript. 

// const express = require('express');
// const app = express();
// app.set('view engine','ejs')

// app.get('/',(req,res)=>{
//     res.render('index')
// })
// // app.get('/random',(req,res)=>{
// //     const data = Math.floor(Math.random()*100)
// //     res.render('random',{data})
// // })
// app.get("/random", (req, res) => {
//   const data = ['delhi','shimla','solan'];
//   res.render("random", { data });
// });
// app.get("/form", (req, res) => {
//   res.render("form");
// });
// app.get("/user", (req, res) => {
// //   console.log(req.query)
//   const {user_name,age}=req.query;
//   res.send(`${user_name} and ${age}`);
// });
// const port = 2424
// app.listen(port,()=>{
//     console.log(`server running on ${port}`)

// })




// date - 08-12-2022

// const express = require('express');
// const app = express();
// app.use(express.urlencoded({extended:true}))
// app.set('view engine','ejs');
// app.get('/',(req,res)=>{
//   res.send('Good morning Mr. Sethi');
// })
// app.get("/user", (req, res) => {
//   res.render('form');
// });
// app.get("/data", (req, res) => {
//   res.send("got all data");
// });
// app.post("/data", (req, res) => {
//   console.log(req.body)
//   res.send("got all data from post");
// });
// app.listen(4444,()=>{
//   console.log('server running on 4444');
// })


// Restfull API - provide architecture(syntax) to write code(good code).
// Restfull API used for CRUD operations.

const express = require('express');
const app = express();
const methodOverride = require('method-override');
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
let arr = [
  {
    id: 1,
    user: "one",
    code: "white",
  },
  {
    id: 2,
    user: "two",
    code: "grey",
  },
  {
    id: 3,
    user: "three",
    code: "black",
  },
  {
    id: 4,
    user: "four",
    code: "pink",
  }
];
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send(" it's a fine day")
})

app.get('/code',(req,res)=>{
    res.render('index',{arr})
})
app.get("/code/new", (req, res) => {
  res.render('new');
});
app.post("/code", (req, res) => {
  arr.push(req.body)
  res.redirect('/code');
});
app.get('/code/:id',(req,res)=>{
  // console.log(req.params.id);
  const {id}=req.params;
  const data = arr.find((c)=>c.id===parseInt(id))
  console.log(data)
  res.render('show',{data});
})
app.get('/code/:id/edit',(req,res)=>{
  const {id} = req.params
  const olddata = arr.find((data)=>data.id===parseInt(id));
  res.render('edit',{olddata});
})
app.put('/code/:id',(req,res)=>{
  const {id} = req.params;
  const newcode = req.body.code
  const data = arr.find((c) => c.id === parseInt(id));
  data.code=newcode;
  res.redirect('/code')
})
app.delete('/code/:id',(req,res)=>{
  const {id}=req.params
  // console.log(id)
  const newData = arr.filter((ele)=>{return ele.id!==parseInt(id)})
  // const newData = arr.filter((ele)=>ele.id!==parseInt(id))
  console.log(newData)
  arr=newData;
  // res.send('delete page at maintainance!!')
  res.redirect('/code');
})
app.listen(4444,()=>{
    console.log('server running fine')
})
