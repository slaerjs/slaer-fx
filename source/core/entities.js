/*!
Entities represents the the types of things that can exist in the virtual world.
Rather thaan being the actual things themselves, they more describe what things can be.

For example, a "bullet" could be an entity with some inital default velocity and position.
But object "bullet#18765" is a specific instance of a bullet.

Entities allow you to define an object template, consisting of a set of inital, default components, flags and/or behaviours.
*/

import { extend, merge } from './utils';

var annonymous = 0;

export function entity(name, components) {
  if (name && typeof name !== 'string') {
    components = name;
    name = "ent#" + annonymous++;
  }

  var inst = SlaerEntity.instances[name] || new SlaerEntity(name, components);

  if (components && inst.components !== components) {
    merge(inst.components, components);
  }

  return inst;
};

export function entities() {
  return SlaerEntity.instances;
}
entities._reset = function() {
   SlaerEntity.instances = {};
}


//----------------------------------------------------------
// INTERNALS
//----------------------------------------------------------

import { object } from './objects';

function SlaerEntity(name, components) {
  this.name = name;
  this.components = components || {};

  SlaerEntity.instances[name] = this;
}

SlaerEntity.instances = {};

SlaerEntity.prototype.create = function(name, components) {
  return object(name, extend({}, this.components, components || {}));
};

