

import { objects } from './objects';
import { behaviours } from './behaviours';

var runToken = null;

/*!
Starts the engine.
*/
export function start() {
  console.log('SlaerFX Engine is starting...');
  
  (function loop() {
    // var _objects = objects();
    // var _behaviours = behaviours();

    // for (var key in _objects) {
    //   for (var component in _objects[key]) {
    //     if (typeof component === 'function') {
    //       component.call(_objects[key]);
    //     }
    //     else if (_behaviours[component]) {
    //       _behaviours[component].call(_objects[key], _objects[key][component]);
    //     }
    //   }
    // }
    
    runToken = window.requestAnimationFrame(loop);
  }());
}

/*!
Stops the engine running
*/
export function stop() {
  window.cancelAnimationFrame(runToken);
}
