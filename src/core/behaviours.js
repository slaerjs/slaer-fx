
export var behaviours = {};

export function behaviour(name, inst) {
  
  inst._name = name;
  
  return behaviours[name] = inst;
};
