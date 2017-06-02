

/*!
This setups up a fake browser environment when testing
*/
// if (!window && global) {
//   var jsdom = require('jsdom').JSDOM;
//   var dom = new jsdom('');

//   global.window = dom.window;
//   global.document = dom.window.document;

//   window.requestAnimationFrame = window.requestAnimationFrame || function(fn) {
//     return setTimeout(fn, 166);
//   }
//   window.cancelAnimationFrame = window.requestAnimationFrame || function(cancellationToken) {
//     return cancelTimeout(cancellationToken);
//   }
// }

/// The version number
//export const version = VERSION;

// Export the core api modules
//export * from './core/app';
// export * from './core/config';
// export * from './core/entities';
// export * from './core/objects';
// export * from './core/behaviours';
export * from './core/engine';
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

