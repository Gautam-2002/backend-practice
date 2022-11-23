//npm init
// node index.js heelo hye

// console.log("heya...");
// const arg = process.argv.slice(2);
// console.log(arg);

// const data = require('./app')
// console.log(data.name1);
// console.log(data);
// data.add(5,4);

// const fs = require('fs');
// console.log(fs);

// fs.writeFileSync('../app.txt','new file boi')
// fs.writeFileSync("../temp/app.txt", "new file boi");
// fs.unlinkSync('../temp/app.txt');
// console.log(fs.readFileSync('../app.txt').toString());

// fs.writeFile('app.txt','Helooooooo',(err)=>{
//     if (err) {
//         return err;
//     }
//     console.log("file created");
// })

// fs.appendFileSync('../app.txt',' gimrish');

// fs.unlinkSync('../app.txt');


// var giveMeAJoke = require("give-me-a-joke");
// const chalk = require("chalk");
// // To get a random dad joke
// giveMeAJoke.getRandomDadJoke(function (joke) {
//     // console.log(joke);
//    console.log(chalk.red(joke));
// });


// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end("hello Mr. Stark")
// })

// server.listen(4002,()=>{
//     console.log("server runnig successfully!!");
// })





const express = require('express');

const app = express();
// app.use((req,res)=>{
//     res.send("hello Mr. Sethi, this is express")
    
// })
app.get('/',(req, res) => {
  res.send("welcome home");
});
app.get("/about", (req, res) => {
  res.send("how about u ?");
});
app.get("/cont", (req, res) => {
  res.send("contact me");
});
app.listen(4444,()=>{
    console.log('server running successfully')
})