
module.exports = function(env) {
  return require('./' + env + '.js')(env);
};
