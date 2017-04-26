
var settings = {
  autorun: true
};

export function configure(name, value) {
    settings[name] = value;
};

export function config(name) {
    if (name) {
      return settings[name];
    }
    
    return settings;
};

