
var slaer  = require('../dist/slaerfx');

slaer.middleware('messager', function(config) {
  return function() {
    console.log(config.message);
  };
});

slaer.use('messager', {
  message: "hello"
});

slaer.use(function() {
  return function() {
    console.log("running my custom middleware");
  };
});

slaer.use(function() {
  return [
    function(state) {
      return {};
    },
    function(state) {
      state.test = "hello";
    },
    function(state) {
      console.log(state);
      return "123";
    },
    function(state) {
      console.log(state);
    }
  ];
});

// GO!
slaer.start();
