module.exports = (() =>
{
    var flickrapi=require('flickrapi');
    var self=this;
    
 

    self.search= function(searchTerm,offset,callback)
    {
       
       var Flickr = require("flickrapi"),
        flickrOptions = {
          api_key: process.env.Flickr_API_Key,
          secret: process.env.Flickr_API_Secret
        };
         
        Flickr.tokenOnly(flickrOptions, function(error, flickr) {
          // we can now use "flickr" as our API object,
          // but we can only call public methods and access public data
          flickr.photos.search({
                              text: searchTerm,
                              page:offset,
                              per_page:10
                            }, function(err, result) {
                              if(err) { throw new Error(err); }
                              // do something with result
                             if(result && result.photos && result.photos.photo.length)
                             {
                                 var resultPhotos=[]
                                 result.photos.photo.forEach(function(photo){
                                      var url=
                                     
                                     resultPhotos.push({
                                         url:"https://farm" + photo.farm + ".staticflickr.com/" + photo.server
                                     + "/" + photo.id +  "_" + photo.secret + ".jpg",
                                         snippet:photo.title,
                                         thumbnail:"https://farm" + photo.farm + ".staticflickr.com/" + photo.server
                                     + "/" + photo.id +  "_" + photo.secret + "_t.jpg",
                                     context:"https://flickr.com/photos/" + photo.owner
                                     });
                                 })
                                 
                             }
                            callback.call(self,null,{resultPhotos});
                            });
        });    
           
      
   
    
       
       
    }
return self;
})();
