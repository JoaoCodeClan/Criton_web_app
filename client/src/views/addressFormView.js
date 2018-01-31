const MapView = require('./mapView.js');


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
