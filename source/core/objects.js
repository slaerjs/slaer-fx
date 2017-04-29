
import { extend, merge } from './utils';

var annonymous = 0;

export function object(name, components) {
  if (name && typeof name !== 'string') {
    components = name;
    name = "obj#" + annonymous++;
  }

  var inst = SlaerObject.instances[name] || new SlaerObject(name, components);

  if (components && inst.components !== components) {
    merge(inst.components, components);
  }

  return inst;
};

export function objects() {
  return SlaerObject.instances;
}
objects._reset = function() {
   SlaerObject.instances = {};
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
