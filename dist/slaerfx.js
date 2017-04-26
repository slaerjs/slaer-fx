var slaer =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return behaviours; });
/* harmony export (immutable) */ __webpack_exports__["b"] = behaviour;

var behaviours = {};

function behaviour(name, inst) {
  
  inst._name = name;
  
  return behaviours[name] = inst;
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = entity;
/* harmony export (immutable) */ __webpack_exports__["b"] = entities;
/*!
Entities represents the the types of things that can exist in the virtual world.
Rather thaan being the actual things themselves, they more describe what things can be.

For example, a "bullet" could be an entity with some inital default velocity and position.
But object "bullet#18765" is a specific instance of a bullet.

Entities allow you to define an object template, consisting of a set of inital, default components, flags and/or behaviours.
*/



var annonymous = 0;

function entity(name, components) {
  if (name && typeof name !== 'string') {
    components = name;
    name = "ent#" + annonymous++;
  }

  var inst = SlaerEntity.instances[name] || new SlaerEntity(name, components);

  if (components && inst.components !== components) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* merge */])(inst.components, components);
  }

  return inst;
};

function entities() {
  return SlaerEntity.instances;
}


//----------------------------------------------------------
// INTERNALS
//----------------------------------------------------------



function SlaerEntity(name, components) {
  this.name = name;
  this.components = components || {};

  SlaerEntity.instances[name] = this;
}

SlaerEntity.instances = {};

SlaerEntity.prototype.create = function(name, components) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__objects__["a" /* object */])(name, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* extend */])({}, this.components, components));
};



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__behaviours__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = start;
/* harmony export (immutable) */ __webpack_exports__["b"] = stop;





var runToken = null;

/*!
Starts the engine.
*/
function start() {
  console.log('SlaerFX Engine is starting...');
  
  (function loop() {
    // var _objects = objects();
    // var _behaviours = behaviours();

    // for (var key in _objects) {
    //   for (var component in _objects[key]) {
    //     if (typeof component === 'function') {
    //       component.call(_objects[key]);
    //     }
    //     else if (_behaviours[component]) {
    //       _behaviours[component].call(_objects[key], _objects[key][component]);
    //     }
    //   }
    // }
    
    runToken = window.requestAnimationFrame(loop);
  }());
}

/*!
Stops the engine running
*/
function stop() {
  window.cancelAnimationFrame(runToken);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_config__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return __WEBPACK_IMPORTED_MODULE_0__core_config__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "config", function() { return __WEBPACK_IMPORTED_MODULE_0__core_config__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_entities__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "entity", function() { return __WEBPACK_IMPORTED_MODULE_1__core_entities__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "entities", function() { return __WEBPACK_IMPORTED_MODULE_1__core_entities__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_objects__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "object", function() { return __WEBPACK_IMPORTED_MODULE_2__core_objects__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "objects", function() { return __WEBPACK_IMPORTED_MODULE_2__core_objects__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_behaviours__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "behaviours", function() { return __WEBPACK_IMPORTED_MODULE_3__core_behaviours__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "behaviour", function() { return __WEBPACK_IMPORTED_MODULE_3__core_behaviours__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_engine__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_4__core_engine__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return __WEBPACK_IMPORTED_MODULE_4__core_engine__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_utils__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return __WEBPACK_IMPORTED_MODULE_5__core_utils__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_5__core_utils__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mergeExtend", function() { return __WEBPACK_IMPORTED_MODULE_5__core_utils__["c"]; });

/// The version number
const version = "0.0.0";
/* harmony export (immutable) */ __webpack_exports__["version"] = version;


// Export the api modules







// Import the stuf we need



// Initialise the bootstrapper
window.addEventListener('load', function() {
  //if (config('autorun')) {
  //  start();
  //}
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extend;
/* harmony export (immutable) */ __webpack_exports__["b"] = merge;
/* harmony export (immutable) */ __webpack_exports__["c"] = mergeExtend;

/*!
Extends {out} from one or more other objects (L <-- R).
This function preserves any existing properties.

@returns out
*/
function extend(out) {
  var i = arguments.length;

  while (0 <-- i) {
    for (var key in arguments[i]) {
      if (typeof out[key] !== 'undefined') {
        out[key] = arguments[i][key];
      }
    }
  }

  return out;
};

/*!
Merges one or more objects over {out} (L --> R)
This function overwrites any existing properties.

@returns out
*/
function merge(out) {
  for (var i = 1, N = arguments.length; i < N; i++) {
    for (var key in arguments[i]) {
      out[key] = arguments[i][key];
    }
  }

  return out;
};

/*!
Extends an object based on the results from a merge operation.
*/
function mergeExtend(out) {
  // FIXME: Use ES2015 spread syntax
  return extend(out, merge.apply(null, [{}].concat(Array.prototype.slice.call(arguments, 1))));
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = object;
/* harmony export (immutable) */ __webpack_exports__["b"] = objects;



var annonymous = 0;

function object(name, components) {
  if (name && typeof name !== 'string') {
    components = name;
    name = "obj#" + annonymous++;
  }

  var inst = SlaerObject.instances[name] || new SlaerObject(name, components);

  if (components && inst.components !== components) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* merge */])(inst.components, components);
  }

  return inst;
};

function objects() {
  return SlaerObject.instances;
}


//----------------------------------------------------------
// INTERNALS
//----------------------------------------------------------


function SlaerObject(name, components) {
  this.name = name;
  this.components = components || {};

  SlaerObject.instances[name] = this;
}

SlaerObject.instances = {};

SlaerObject.prototype.clone = function(name, components) {
  return new SlaerObject(name, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* extend */])({}, this.components, components));
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configure;
/* harmony export (immutable) */ __webpack_exports__["b"] = config;

var settings = {
  autorun: true
};

function configure(name, value) {
    settings[name] = value;
};

function config(name) {
    if (name) {
      return settings[name];
    }
    
    return settings;
};



/***/ })
/******/ ]);