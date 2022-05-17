// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = "\nbody{\n  background-color: #fcf7c5;\n}\n.pikachu {\n  position: relative;\n  animation: floaty 5s ease-in-out infinite;\n}\n.head {\n  z-index: 10;\n  height: 9rem;\n  width: 10rem;\n  position: relative;\n}\n.head > .face {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-top-left-radius: 50% 4.75rem;\n  border-top-right-radius: 50% 4.75rem;\n  border-bottom-left-radius: 50% 3rem;\n  border-bottom-right-radius: 50% 3rem;\n  overflow: hidden;\n  background-color: #f9ed7c;\n  will-change: transform, opacity;\n}\n.face::before,\n.face::after {\n  content: \"\";\n  bottom: 1.125rem;\n  height: 1.5rem;\n  width: 1.75rem;\n  border-radius: 50%;\n  background-color: #e65a41;\n  position: absolute;\n}\n.face::before {\n  left: -0.2rem;\n}\n.face::after {\n  right: -0.2rem;\n}\n.head > .face > .eyes {\n  width: 20px;\n  height: 20px;\n  bottom: 2.5rem;\n  background: #444;\n  border-radius: 45% 50% 45% 50%;\n  transform-origin: center 70%;\n  animation: blinky 7s infinite;\n  position: absolute;\n}\n.eyes::before {\n  content: \"\";\n  top: 15%;\n  left: 20%;\n  width: 30%;\n  height: 30%;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n}\n.eyeL {\n  left: 1.25rem;\n}\n.eyeR {\n  right: 1.25rem;\n}\n.nose {\n  width: 0.25rem;\n  height: 0.125rem;\n  bottom: 2.5rem;\n  left: calc(50%);\n  border-radius: 50%;\n  background-color: #444;\n  position: absolute;\n}\n.head > .ears {\n  top: -1rem;\n  width: 2rem;\n  height: 3.75rem;\n  overflow: hidden;\n  background-color: #f9ed7c;\n  border-top-left-radius: 50% 3rem;    border-top-right-radius: 50% 3rem;\n  transform-origin: bottom center;\n  position: absolute;\n  }\n.ears::before {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 40%;\n  content: \"\";\n  background-color: #444;\n  position: absolute;\n}\n.earL {\n  left: 0;\n  transform: rotate(-40deg);\n  animation: rotateEarL 5s infinite;\n}\n.earL::before {\n  transform-origin: bottom left;\n  transform: rotate(-15deg);\n}\n.earR {\n  right: 0;\n  transform: rotate(40deg);\n  animation: rotateEarR 5s infinite;\n}\n.body {\n  width: 9rem;\n  height: 8rem;\n  right: -2rem;\n  position: absolute;\n  top: 45%;\n  z-index: 9;\n}\n.mainBody {\n  z-index: 5;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  background: #f9ed7c;\n  transform: skew(15deg);\n  border-top-left-radius: 50% 5.5rem;\n  border-top-right-radius: 50% 5.5rem;\n  border-bottom-left-radius: 40% 2.5rem;\n  border-bottom-right-radius: 40% 2.5rem;\n}\n.mainBody::before,\n.mainBody::after {\n  content: \"\";\n  right: 0;\n  bottom: 65%;\n  width: 2rem;\n  height: 0.75rem;\n  position: absolute;\n  background-color: #9c5200;\n  border-top-left-radius: 2rem 50%;\n  border-bottom-left-radius: 2rem 50%;\n  transform: rotate(-25deg);\n  transform-origin: right center;\n}\n.mainBody::before {\n  right: -1rem;\n  top: 40%;\n}\n.mainBody::after {\n  right: -0.5rem;\n}\n.arms {\n  z-index: 9;\n  width: 1.5rem;\n  height: 1.5rem;\n  position: absolute;\n  background-color: #f7e64b;\n  border: top left radius 0.25rem;\n  border-top-right-radius: 0.25rem;\n  border-bottom-left-radius: 3rem 5.5rem;\n  border-bottom-right-radius: 3rem 5.5rem;\n  transform-origin: top center;\n}\n.armL {\n  top: 50%;\n  left: -1.125rem;\n  animation: rotateArmL 5s infinite;\n}\n.armR {\n  top: 50%;\n  left: 4.25rem;\n  animation: rotateArmR 5s infinite;\n}\n.legs {\n  z-index: 1;\n  width: 1.25rem;\n  height: 1.75rem;\n  position: absolute;\n  background-color: #f7e64b;\n  border: top left radius 0.25rem;\n  border-top-right-radius: 0.25rem;\n  border-bottom-left-radius: 3rem 5.5rem;\n  border-bottom-right-radius: 3rem 5.5rem;\n  transform-origin: top center;\n}\n.legL {\n  bottom: 0;\n  left: 1rem;\n  animation: rotateLegL 2s infinite;\n}\n.legR {\n  top: 90%;\n  right: 0.75rem;\n  animation: rotateLegR 2s infinite;\n}\n.tail {\n  width: 1rem;\n  height: 1.5rem;\n  top: 40%;\n  right: -0.5rem;\n  position: absolute;\n  transform: rotate(45deg);\n  background-color: #9c5200;\n  transform-origin: bottom center;\n  animation: rotateTail 5s infinite;\n}\n.tail::before,\n.tail::after {\n  content: \"\";\n  position: absolute;\n  background-color: #f9ed7c;\n}\n.tail::before {\n  top: -1.5rem;\n  right: 0.36rem;\n  height: 2rem;\n  width: 1.25rem;\n  transform: rotate(-90deg);\n  border-top-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.tail::after {\n  height: 2rem;\n  width: 1.25rem;\n  top: -2.75rem;\n  right: 0.72rem;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n@keyframes rotateEarL {\n  0%, 100% {\n    transform: rotate(-35deg);\n  }\n  50% {\n    transform: rotate(-40deg);\n  }\n}\n@keyframes rotateEarR {\n  0%, 100% {\n    transform: rotate(35deg);\n  }\n  50% {\n    transform: rotate(45deg);\n  }\n}\n@keyframes rotateArmL {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(25deg);\n  }\n}\n@keyframes rotateArmR {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-25deg);\n  }\n}\n@keyframes rotateLegL {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(20deg);\n  }\n}\n@keyframes rotateLegR {\n  0%,100% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-25deg);\n  }\n}\n@keyframes rotateTail {\n  0%, 100% {\n    transform: rotate(45deg);\n  }\n  50% {\n    transform: rotate(55deg);\n  }\n}\n@keyframes floaty {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(1rem);\n  }\n}\n@keyframes blinky {\n  0%, 9%, 11%, 19%, 21%, 69%, 71%, 100% {\n    transform: scaleY(1);\n  }\n  10%, 20%, 70% {\n    transform: scaleY(0.1);\n  }\n}\n";

exports.default = string;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = require("./css.js");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css2.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
    player.play();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > _css2.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = _css2.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};

player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.7252c063.map