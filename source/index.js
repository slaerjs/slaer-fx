
/// The version number
//export const version = VERSION;

// Export the core api modules
export * from './core/config';
export * from './core/entities';
export * from './core/objects';
export * from './core/behaviours';
export * from './core/engine';
export * from './core/utils';

// Export the rendering api modules
export * from './rendering/surfaces'

// Import the stuff we need for init
import { config } from './core/config';
import { start } from './core/engine';

// Initialise the bootstrapper
window.addEventListener('load', function() {
  if (config('autorun')) {
    start();
  }
});
