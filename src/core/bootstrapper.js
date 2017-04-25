
import { entities } from './entities';
import { behaviours } from './behaviours';

var runToken = null;

export function start() {
  console.log('SlaerFX Engine is starting...');
  console.log('SlaerFX Engine is starting...22222');

  (function loop() {
    console.log('running');
    runToken = window.requestAnimationFrame(loop);
    
    for (var e in entities) {
      for (var component in entities[e]) {
        if (behaviours[component]) {
          behaviours[component].call(entities[e], entities[e][component]);
        }
      }
    }
  }());
}

export function stop() {
  window.cancelAnimationFrame(runToken);
}

// Bootstrap the Engine...
window.addEventListener('load', start);
