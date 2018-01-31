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
