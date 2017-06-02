

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

  var now = new Date().getTime(), then = now, dt = 0;

  (function loop() {
    then = now;
    now = new Date().getTime();
    dt = Math.min((now - then) / 1000.0, 0.1);

    for (var key in _objects) {
      for (var component in _objects[key].components) {
        if (component[0] === '_') {
          continue;
        }

        if (_behaviours[component]) {
          _behaviours[component].call(_objects[key], dt, _objects[key].components[component]);
        }
        else if (typeof _objects[key].components[component] === 'function') {
          _objects[key].components[component].call(_objects[key].components, dt);
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
