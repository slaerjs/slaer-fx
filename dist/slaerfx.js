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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return entities; });
/* harmony export (immutable) */ __webpack_exports__["b"] = entity;

var entities = {};

function entity(name, inst) {
  
  inst._name = name;
  
  return entities[name] = inst;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__behaviours__ = __webpack_require__(0);
/* unused harmony export start */
/* unused harmony export stop */




var runToken = null;

function start() {
  console.log('SlaerFX Engine is starting...');
  console.log('SlaerFX Engine is starting...22222');

  (function loop() {
    console.log('running');
    runToken = window.requestAnimationFrame(loop);
    
    for (var e in __WEBPACK_IMPORTED_MODULE_0__entities__["a" /* entities */]) {
      for (var component in __WEBPACK_IMPORTED_MODULE_0__entities__["a" /* entities */][e]) {
        if (__WEBPACK_IMPORTED_MODULE_1__behaviours__["a" /* behaviours */][component]) {
          __WEBPACK_IMPORTED_MODULE_1__behaviours__["a" /* behaviours */][component].call(__WEBPACK_IMPORTED_MODULE_0__entities__["a" /* entities */][e], __WEBPACK_IMPORTED_MODULE_0__entities__["a" /* entities */][e][component]);
        }
      }
    }
  }());
}

function stop() {
  window.cancelAnimationFrame(runToken);
}

// Bootstrap the Engine...
window.addEventListener('load', start);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_entities__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "entities", function() { return __WEBPACK_IMPORTED_MODULE_0__core_entities__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "entity", function() { return __WEBPACK_IMPORTED_MODULE_0__core_entities__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_behaviours__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "behaviours", function() { return __WEBPACK_IMPORTED_MODULE_1__core_behaviours__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "behaviour", function() { return __WEBPACK_IMPORTED_MODULE_1__core_behaviours__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_bootstrapper__ = __webpack_require__(2);

// Export the version number (as configured during the build)
const version = "0.0.0";
/* harmony export (immutable) */ __webpack_exports__["version"] = version;


// Export the api modules



// Import the bootstrapper



/***/ })
/******/ ]);