
// Annonymous surface counter
var annonymous = 0;

export function surface(components) {
  if (name && typeof name !== 'string') {
    components = name;
    name = "surface#" + annonymous++;
  }

  return new SlaerSurface();
}

//----------------------------------------------------------
// INTERNALS
//----------------------------------------------------------

function SlaerSurface(components) {
  components = components || {};
  
  this._canvas = document.createElement('canvas');

  this._canvas.style.position = 'fixed';
  this._canvas.style.width = '100%';
  this._canvas.style.height = '100%';
  this._canvas.style.top = 0;
  this._canvas.style.left = 0;
  
  if (components.background) {
    this._canvas.style.backgroundColor = components.background;
  }

  if (!components.resolution) {
    components.resolution = [1.0, 1.0];
  }
  else if (typeof components.resolution === 'number') {
    components.resolution = [components.resolution, components.resolution];
  }
  else if (typeof components.resolution === 'string') {
    components.resolution = parseFloat(components.resolution);
    components.resolution = [components.resolution, components.resolution];
  }

  this._resolution = components.resolution;

  this.resize([window.innerWidth, window.innerHeight], components.resolution);

  document.body.appendChild(this._canvas);

  this._ctx = this._canvas.getContext('2d');

  SlaerSurface.instances.push(this);
}

SlaerSurface.prototype.resize = function(size, res) {
  this._canvas.width = size[0] * res[0];
  this._canvas.height = size[1] * res[1];
};

SlaerSurface.instances = [];

window.addEventListener('resize', function() {
  for (var i = 0, N = SlaerSurface.instances.length; i < N; i++) {
    SlaerSurface.instances[i].resize([window.innerWidth, window.innerHeight], SlaerSurface.instances[i]._resolution);
  }
});
