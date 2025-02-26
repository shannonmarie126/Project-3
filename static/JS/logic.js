// Create the map object with center on Denver and set zoom.
let myMap = L.map("map", {
  center: [39.7392, -104.9903],
  zoom: 4
});

// Create and add the 'basemap' tile layer to the map.
let baseMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);