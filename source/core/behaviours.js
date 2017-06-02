
import { app } from './app';

app.behaviours = {};

export function behaviour(id, factory) {
  return app.behaviours[id] = new SlaerBehavior(id, factory);
}

export function behaviours() {
  return Object.keys(app.behaviours).map(function(id) { return app.behaviours[id] });
}

function SlaerBehavior(id, factory) {
  this.id = id;
  this.exec = factory(app);
}
