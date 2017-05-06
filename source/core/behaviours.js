
var instances = {};

export function behaviour(name, inst) {
  
  inst._name = name;
  
  return instances[name] = inst;
}

export function behaviours() {
  return instances;
}

behaviours._reset = function() {
   instances = {};
};
