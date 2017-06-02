
var pipeline = [],
    middlewares = {},
    runToken;

/*!
Appends middleware(s) to the pipeline via installer factory functions
*/
export function use(middleware, config) {
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
export function middleware(id, installer) {
  middlewares[id] = installer;
}

/*!
Starts the engine
*/
export function start() {
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
export function stop() {
  clearTimeout(runToken);
  runToken = null;
}
