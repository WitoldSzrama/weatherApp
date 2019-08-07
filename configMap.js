var mapboxgl = require('/node_modules/mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoid2l0b2xkLXN6cmFtYSIsImEiOiJjanl5andieHQwaHNwM2JtbWZ6bGg0NmNrIn0.rNRWiLkGZoaBHA4BUjyVjQ';
var map = new mapboxgl.Map({
  container: 'YOUR_CONTAINER_ELEMENT_ID',
  style: 'mapbox://styles/mapbox/streets-v11'
});
