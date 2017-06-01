/*!
This file setups up a fake browser environment
and runs a few work-in-progress tests / experiments.
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

