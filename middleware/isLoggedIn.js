module.exports = function(req, res, next){
  if(!req.user){
    req.flash('error', "WOOOOOOAAAAAaaaaahh Nelly! You ain't logged in Buckaroo!");
    res.redirect('/auth/login');
  }
  else{
    next();
  }
}
