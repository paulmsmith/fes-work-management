var _ = require('lodash');

module.exports = function(router, config) {
  
  router.all(config.route.page, function(req,res,next){
    
    var postData = req.body || {};
    
    next();
  
  });

  return router;
	
}