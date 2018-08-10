const MapWrapper = function(container, coords, zoom){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

  this.map = L.map(container).setView(coords, zoom).addLayer(osmLayer);
  // this.map.on('click', event => {
  //
  //   coords = [event.latlng.lat, event.latlng.lng];
  //
  //   this.addMarker(coords);
  // })
}


MapWrapper.prototype.addMarker = function (coords) {
  L.marker(coords).addTo(this.map).bindPopup(coords.toString()).openPopup();
};

MapWrapper.prototype.changeLocations = function (coords) {
  this.map.panTo(coords);
};

MapWrapper.prototype.currentLocation = function (coords) {
  this.map.locate(coords);
};
