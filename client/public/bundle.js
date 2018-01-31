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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const MapView = function(container, coords, zoom) {
  this.map = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}


MapView.prototype.addMarker= function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.map,
    animation: google.maps.Animation.DROP
  });
  return marker;
}



module.exports = MapView;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const AddressFormView = __webpack_require__(2);
const MapView = __webpack_require__(0);


const app = function(){

  const addressToFind = new AddressFormView();

  const addressToSearch = document.querySelector('#address-input');
  const latOut = document.querySelector('#lat-output');
  const lngOut = document.querySelector('#lng-output');


  const location = {

    lat : 0.0,
    lng : 0.0
  }
  const mapContainer = document.querySelector('#google-map');

  let map = new MapView(mapContainer, location, 3 );

  addressToSearch.addEventListener('keyup', function(key) {
    if(key.which == 10 || key.which == 13) {
      addressToFind.getAddress();
    }



  });



}

document.addEventListener("DOMContentLoaded", app);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const MapView = __webpack_require__(0);


const AddressFormView = function (){



}

AddressFormView.prototype.getAddress = function () {

  const address = document.querySelector('#address-input').value;

  const  geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      const result = results[0].geometry.location;
      const lat = result.lat();
      const lng = result.lng();

      const latOuput = document.querySelector('#lat-output');
      latOuput.value= lat;
      const lngOutput = document.querySelector('#lng-output');
      lngOutput.value = lng;


      const mapContainer = document.querySelector('#google-map');
      const newLocation = {

        lat: lat,
        lng: lng
      }
      const map = new MapView(mapContainer, newLocation, 15);
      map.addMarker(newLocation);

    }else{alert("Address not found.Please check if address is correct.")};

  })
};





module.exports = AddressFormView;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map