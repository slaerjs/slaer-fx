
// Export the version number (as configured during the build)
export const version = VERSION;

// Export the api modules
export * from './core/entities';
export * from './core/behaviours';

// Import the bootstrapper
import './core/bootstrapper'
