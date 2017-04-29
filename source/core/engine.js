

import { objects } from './objects';
import { entities } from './entities';
import { behaviours } from './behaviours';

var runToken = null;

/*!
Starts the engine.
*/
export function start() {
  var _objects = objects();
  var _behaviours = behaviours();

  (function loop() {
    for (var key in _objects) {
      for (var component in _objects[key].components) {
        if (typeof component === 'function') {
          component.call(_objects[key]);
        }
        else if (_behaviours[component]) {
          _behaviours[component].call(_objects[key], _objects[key].components[component]);
        }
        else {
          console.warn('Unknown behaviour ' + component);
        }
      }
    }
    
    runToken = window.requestAnimationFrame(loop);
  }());
}

/*!
Stops the engine running
*/
export function stop() {
  window.cancelAnimationFrame(runToken);
}

/*!
Wipes the data and restarts the engine.
*/
export function reset() {
  objects._reset();
  entities._reset();
  behaviours._reset();
}
