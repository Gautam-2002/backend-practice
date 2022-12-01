const express = require('express');
const nodemon = require('nodemon');
const app = express();
// .use vs .get
// middleware
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send('hello');
})
app.get("/search", (req, res) => {
  console.log(req.query);
  // http://localhost:4002/search?name=gautam&lastname=sethi
  //   { name: 'gautam', lastname: 'sethi' }
  const {name,lastname,place} = req.query;
  res.send(`this is query
            ${name} ${lastname} ${place}`);
});
app.get('/:path',(req,res)=>{
    res.send(`${req.params.path}`)
})
app.listen(4002,()=>{
    console.log("server : 4002");
})
//nodemon index.js