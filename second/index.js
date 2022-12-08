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
app.use(express.urlencoded({extended:true}))
const arr = [
  {
    user: "one",
    code: "white",
  },
  {
    user: "two",
    code: "grey",
  },
  {
    user: "three",
    code: "black",
  },
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
app.listen(4444,()=>{
    console.log('server running fine')
})
