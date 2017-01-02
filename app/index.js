module.exports=function(app,db)
{
    var searches=db.collection("searches");
    
    var img_searcher=require("./imagesearcher.js");

   app.get('/',function(req,res){
        res.render('index');
    });

    app.get('/api/imagesearch/:searchTerm(*)',(req, res)=>{
        
           var searchTerm=req.params.searchTerm;
           var offset=0|| req.query.offset;
           
           img_searcher.search(searchTerm,offset,function(err,result)
            {
             if(err) throw err;
              
             //log the search term
             searches.insert({term:searchTerm, when:new Date().toISOString()}); 
             
             //send the result
             res.send(result);
            });
    });
    
    app.get('/api/latest/imagesearch',(req,res)=>{
         //return recent 10 searches
          searches.find({},{_id:0})
          .sort({when:-1})
          .limit(10)
          .toArray((err, docs)=>{
              if (err) throw err;
              
              res.json(docs);
            });
    });
    
}