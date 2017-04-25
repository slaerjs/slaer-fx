
export var entities = {};

export function entity(name, inst) {
  
  inst._name = name;
  
  return entities[name] = inst;
};
