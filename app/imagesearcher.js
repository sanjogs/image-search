module.exports = (() =>
{
    var self=this;
    self.search= function(searchTerm,callback)
                {
                   //todo: call 3rd party api and perform search
                   
                    callback.call(self,null,{data:searchTerm});
                    
                }
return self;
})();
