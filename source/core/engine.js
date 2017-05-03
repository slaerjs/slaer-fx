

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

    var canvas = document.getElementsByTagName('canvas')[0];
    canvas.width = canvas.width;
    canvas.height = canvas.height;

    for (var key in _objects) {
      for (var component in _objects[key].components) {
        if (_behaviours[component]) {
          _behaviours[component].call(_objects[key], dt, _objects[key].components[component]);
        }
        else if (typeof component === 'function') {
          component.call(_objects[key], dt);
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
