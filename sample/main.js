
document.body.style.padding = 0;
document.body.style.overflow = 'hidden'

var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');

var N = Math.random() * 1000;
console.log(N);

for (var i = 0; i < N; i++) {
  slaer.object('ball#' + i, {
    physics: {
      pos: [Math.random() * 100, Math.random() * 100],
      vel: [Math.random() * 1000, Math.random() * 100],
      bounciness: Math.random() / 2,
      size: Math.random() * 25
    },
    render: function() {
      ctx.fillRect(this.physics.pos[0]-(this.physics.size/2), this.physics.pos[1]-(this.physics.size/2), this.physics.size, this.physics.size);
    }
  });
}

slaer.behaviour('render', function(dt, fn) {
  fn.call(this.components);
});

slaer.behaviour('physics', function(dt, physics) {
  // gravity
  physics.vel[1] += 10;

  // update
  physics.pos[0] += physics.vel[0] * dt;
  physics.pos[1] += physics.vel[1] * dt;


  if (physics.pos[1] >= canvas.height - (physics.size/2)) {
    physics.vel[1] *= -physics.bounciness;
    physics.vel[0] *= 1.0-physics.bounciness;
    physics.pos[1] = canvas.height - (physics.size/2)
  }
  if (physics.pos[1] <= (physics.size/2)) {
    physics.vel[1] *= -physics.bounciness;
    physics.vel[0] *= 1.0-physics.bounciness;
    physics.pos[1] = (physics.size/2)
  }

  if (physics.pos[0] >= canvas.width - (physics.size/2)) {
    physics.vel[0] *= -physics.bounciness;
    physics.vel[1] *= 1.0-physics.bounciness;
    physics.pos[0] = canvas.width - (physics.size/2)
  }
  if (physics.pos[0] <= (physics.size/2)) {
    physics.vel[0] *= -physics.bounciness;
    physics.vel[1] *= 1.0-physics.bounciness;
    physics.pos[0] = (physics.size/2)
  }
});

