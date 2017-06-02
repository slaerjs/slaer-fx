(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.slaer = global.slaer || {})));
}(this, (function (exports) { 'use strict';

var pipeline = [];
var middlewares = {};
var runToken;

/*!
Appends middleware(s) to the pipeline via installer factory functions
*/
function use(middleware, config) {
  if (typeof middleware === 'string') {
    var id = middleware;
    middleware = middlewares[id];

    if (!middleware) {
      console.warn("MIDDLEWARE NOT FOUND:", id);
      return;
    }
  }

  var elements = middleware(config || {});

  if (typeof elements === 'function') {
    elements = [ elements ];
  }
  
  pipeline = pipeline.concat(elements);
}

/*!
Registers a middleware installer
*/
function middleware(id, installer) {
  middlewares[id] = installer;
}

/*!
Starts the engine
*/
function start() {
  console.log("Start your engines...");

  var i, N;
  (function loop() {
    var state, result;
    for (i = 0, N = pipeline.length; i < N; i++) {
      result = pipeline[i](state);

      if (result) {
        state = result;
      }
    }

    runToken = setTimeout(loop, 1000);
  }());
}

/*!
Stops the engine
*/
function stop() {
  clearTimeout(runToken);
  runToken = null;
}

// export * from './core/utils';

// Export the rendering api modules
// export * from './rendering/surfaces'

// Import the stuff we need for init
// import { config } from './core/config';
// import { start } from './core/engine';

// Initialise the bootstrapper
// window.addEventListener('load', function() {
//   if (config('autorun')) {
//     start();
//   }
// });

exports.use = use;
exports.middleware = middleware;
exports.start = start;
exports.stop = stop;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=slaerfx.js.map
