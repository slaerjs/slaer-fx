/*!
This file setups up a browser environment
that is used during the test suite.
*/
var jsdom = require('jsdom').JSDOM;

var dom = new jsdom('');

global.window = dom.window;
global.document = dom.window.document;

window.requestAnimationFrame = window.requestAnimationFrame || function(fn) {
  return setTimeout(fn, 166);
}
window.cancelAnimationFrame = window.requestAnimationFrame || function(cancellationToken) {
  return cancelTimeout(cancellationToken);
}
