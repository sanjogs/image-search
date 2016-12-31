var express=require('express');
var app=express();
var mongodb=require('mongodb');

var routes=require("./routes/index.js");

routes(app);

app.listen(process.env.Port,()=>{
    
    console.log('listening');
})


