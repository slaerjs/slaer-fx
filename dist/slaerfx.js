(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.slaer = global.slaer || {})));
}(this, (function (exports) { 'use strict';

var settings = {
  autorun: true
};

function configure(name, value) {
    settings[name] = value;
}

function config(name) {
    if (name) {
      return settings[name];
    }
    
    return settings;
}

/*!
Extends {out} from one or more other objects (L <-- R).
This function preserves any existing properties.

@returns out
*/
function extend(out) {
  var i = arguments.length;

  while (0 <-- i) {
    for (var key in arguments[i]) {
      if (typeof out[key] !== 'undefined') {
        out[key] = arguments[i][key];
      }
    }
  }

  return out;
}

/*!
Merges one or more objects over {out} (L --> R)
This function overwrites any existing properties.

@returns out
*/
function merge(out) {
  for (var i = 1, N = arguments.length; i < N; i++) {
    for (var key in arguments[i]) {
      out[key] = arguments[i][key];
    }
  }

  return out;
}

/*!
Extends an object based on the results from a merge operation.
*/
function mergeExtend(out) {
  // FIXME: Use ES2015 spread syntax
  return extend(out, merge.apply(null, [{}].concat(Array.prototype.slice.call(arguments, 1))));
}

var annonymous$1 = 0;

function object(name, components) {
  if (name && typeof name !== 'string') {
    components = name;
    name = "obj#" + annonymous$1++;
  }

  var inst = SlaerObject.instances[name] || new SlaerObject(name, components);

  if (components && inst.components !== components) {
    merge(inst.components, components);
  }

  return inst;
}

function objects() {
  return SlaerObject.instances;
}


//----------------------------------------------------------
// INTERNALS
//----------------------------------------------------------


function SlaerObject(name, components) {
  this.name = name;
  this.components = components || {};

  SlaerObject.instances[name] = this;
}

SlaerObject.instances = {};

SlaerObject.prototype.clone = function(name, components) {
  return new SlaerObject(name, extend({}, this.components, components));
};

/*!
Entities represents the the types of things that can exist in the virtual world.
Rather thaan being the actual things themselves, they more describe what things can be.

For example, a "bullet" could be an entity with some inital default velocity and position.
But object "bullet#18765" is a specific instance of a bullet.

Entities allow you to define an object template, consisting of a set of inital, default components, flags and/or behaviours.
*/

var annonymous = 0;

function entity(name, components) {
  if (name && typeof name !== 'string') {
    components = name;
    name = "ent#" + annonymous++;
  }

  var inst = SlaerEntity.instances[name] || new SlaerEntity(name, components);

  if (components && inst.components !== components) {
    merge(inst.components, components);
  }

  return inst;
}

function entities() {
  return SlaerEntity.instances;
}


//----------------------------------------------------------
// INTERNALS
//----------------------------------------------------------

function SlaerEntity(name, components) {
  this.name = name;
  this.components = components || {};

  SlaerEntity.instances[name] = this;
}

SlaerEntity.instances = {};

SlaerEntity.prototype.create = function(name, components) {
  return object(name, extend({}, this.components, components));
};

var instances = {};

function behaviour(name, inst) {
  
  inst._name = name;
  
  return instances[name] = inst;
}
function behaviours() {
  return instances;
}

var runToken = null;

/*!
Starts the engine.
*/
function start() {
  console.log('SlaerFX Engine is starting...');
  
  (function loop() {
    var _objects = objects();
    var _behaviours = behaviours();

    for (var key in _objects) {
      for (var component in _objects[key].components) {
        if (typeof component === 'function') {
          component.call(_objects[key]);
        }
        else if (_behaviours[component]) {
          _behaviours[component].call(_objects[key], _objects[key].components[component]);
        }
      }
    }
    
    window.requestAnimationFrame(loop);
  }());
}

/*!
Stops the engine running
*/
function stop() {
  window.cancelAnimationFrame(runToken);
}

// Import the stuf we need
// Initialise the bootstrapper
window.addEventListener('load', function() {
  if (config('autorun')) {
    start();
  }
});

exports.configure = configure;
exports.config = config;
exports.entity = entity;
exports.entities = entities;
exports.object = object;
exports.objects = objects;
exports.behaviour = behaviour;
exports.behaviours = behaviours;
exports.start = start;
exports.stop = stop;
exports.extend = extend;
exports.merge = merge;
exports.mergeExtend = mergeExtend;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=slaerfx.js.map
