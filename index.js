const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();

app.use(express.static(__dirname + '/css'));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
})

app.listen(process.env.PORT,()=>{
    console.log("listening");
})

export default app;