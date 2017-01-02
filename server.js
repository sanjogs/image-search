var app=require('express')();

var mongodb=require('mongodb');
var api=require("./app/index.js");

var mongoURI = process.env.MONGOURI || 'mongodb://localhost:27017/image-search';

mongodb.MongoClient.connect(mongoURI, function(err, db) {
    if(err) throw err;
     
    api(app,db);
});

app.listen(process.env.PORT || 5000, function(){
    console.log('listening');
});
