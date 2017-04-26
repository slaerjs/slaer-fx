
/// The version number
//export const version = VERSION;

// Export the api modules
export * from './core/config';
export * from './core/entities';
export * from './core/objects';
export * from './core/behaviours';
export * from './core/engine';
export * from './core/utils';

// Import the stuf we need
import { config } from './core/config';
import { start } from './core/engine';

// Initialise the bootstrapper
window.addEventListener('load', function() {
  if (config('autorun')) {
    start();
  }
});
