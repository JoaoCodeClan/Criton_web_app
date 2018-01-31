const AddressFormView = require('./views/addressFormView.js');
const MapView = require('./views/mapView.js');


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
