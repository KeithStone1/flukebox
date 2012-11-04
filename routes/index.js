
/*
 * GET home page.
 */

exports.showDefault = function(req, res){
  res.render('index', { title: 'Flukebox' });
};