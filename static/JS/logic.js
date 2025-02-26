// initialize map 1 (rent)
// Create the map object with center on Denver and set zoom.
let myMap1 = L.map("map1", {
  center: [39.7392, -104.9903],
  zoom: 4,
});

// Create and add the 'basemap' tile layer to the map.
let baseMap1 = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(myMap1);

// Define the data for each year's rent data

// Function to style the choropleth based on rent data
function style(feature, year)

//Function to get color based on rent value
function getColor(rent)

//Function to show popups with rent information
function onEachFeature(feature, layer)

//Create and add layers for each year's data
let layers ={}

//Add layer control to toggle between years

//Create a legend to show the rent ranges

//Initialize map with the 2020 data as default layer



// initialize map 2 (mortgage)
// Create the map object with center on Denver and set zoom.
let myMap2 = L.map("map2", {
  center: [39.7392, -104.9903],
  zoom: 4,
});

// Create and add the 'basemap' tile layer to the map.
let baseMap2 = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(myMap2);




// build the bar chart 
function barChart(state) {
    d3.json("output/updated.geojson").then((data)=> {
      console.log(data)
      // get the state field

      // set the labels (years)

      // get mortgage data, rent data
      let chartData ={
        labels:
        datasets: [
            {
                label:'Rent'
                data:
                fillColor:
            },
            {
                label:'Mortgage'
                data:
                fillColor:
            }
        ]
      }

      // build a config for rent and for mortgage
      let config = {
        type: 'bar'
        data: chartData
        }

      // render the barchart 
      new Chart(document.getElementById('barChart'),config);
    });
}
barChart(Alabama)


// page load function 
function init(){
    d3.json("output/updated.geojson").then((data)=> {
        // get the states names field 
        states= 
        // use d3 to select the dropdown 
        let dropDown = d3.select("#selState")
        //populate the dropdown menu with the states 
        for (let i=0; i< states.length ; i++){
            dropDown.append("option").attr("value", ).text()
        };

        //get the first state 
        let firstState=
        //barChart function for initial state 
        barChart(firstState)
    }
)}

// function to listen for the dropdown
d3.select('#selState').on("change", function(){
    let newState = d3.select(this).property("value")
    updateChart(newState)
})
function updateChart(newState) {
    barChart(newState)
}
init()
