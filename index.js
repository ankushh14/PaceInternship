const express = require('express');
const index = express();
const path = require('path');
const dotenv = require('dotenv').config();

index.use(express.static(__dirname + '/css'));


index.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
})

index.listen(process.env.PORT,()=>{
    console.log("listening");
})

module.exports = index;