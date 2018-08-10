const app = function(){

  var glasgow = [55.864237,-4.251806]
  var edinburgh = [55.953252, -3.188267];
  var zoom = 13;
  let containerID = 'main-map';

  const mainMap = new MapWrapper(containerID, glasgow, zoom);

  mainMap.addMarker(glasgow);
  //mainMap.addMarker(coords2);

  var relocateButton = document.querySelector('#relocate');
  relocateButton.addEventListener('click', function(){
    mainMap.changeLocations(edinburgh);
      mainMap.addMarker(edinburgh);
  });

 var whereAmI = document.querySelector('#whereAmI');
 whereAmI.addEventListener('click', function(){
   mainMap.changeLocations();
   mainMap.addMarker();
 })


};


window.addEventListener('DOMContentLoaded', app);
