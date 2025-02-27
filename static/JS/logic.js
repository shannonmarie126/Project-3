// initialize map 1 (rent)
// Create the map object with center on Denver and set zoom.
let myMap1 = L.map("map1", {
  center: [39.7392, -104.9903],
  zoom: 3,
});

// Create and add the 'basemap' tile layer to the map.
let baseMap1 = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(myMap1);

// open object for rent layers
let rentLayers = {};
//set the years
let years = [2020, 2021, 2022, 2023, 2024];
//define rent color scale 
let rentColorScale=[]

//define GeoJSON data
d3.json("output/updated.geojson").then(function (response) {
  console.log(response);
  //loop through each year and create a choropleth layer for each one
  years.forEach(function (year) {
    rentLayers[`Rent ${year}`] = L.choropleth(response, {
 //function to determine which property of the geojson to use for fill color
      valueProperty: function (feature) {
      
      },
    // set the color scale for the choropleth
      scale: rentColorScale,
      steps: ,
      mode: "q",
      style: function (feature) {
      //determine value of rentValue and handling if there is not one
      //use if/else statement 
        let rentValue 
        

        if (rentValue === null) {
          return {
            color: "gray",
            weight: 1,
            fillOpacity: 1,
            fillColor: "gray",
          };
        } else {
          return {
            color: "white",
            weight: 0.5,
            fillOpacity: 0.8,
          };
        }
      },
      //function to bind pop up and handle state with no data 
      onEachFeature: function (feature, layer) {
        let rentText =
        layer.bindPopup();
      },
    });
  });
  L.control.layers(null, rentLayers, { collapsed: false }).addTo(myMap1);
  // have rent 2020 layer open upon loading
  rentLayers[`Rent 2020`].addTo(myMap1);
  // create the legend 
  let legend = L.control({position:""})
    // Add the legend to the map
  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");
    let limits = 
    let colors = 
    let labels = [];

    // Add min & max values to the legend
    div.innerHTML = '<div class="labels"><div class="min">' + limits[0] + '</div> \
        <div class="max">' + limits[limits.length - 1] + '</div></div>';

    // Loop through the limits and add color boxes for each range
    limits.forEach(function (limit, index) {
      labels.push('<li style="background-color: ' + colors[index] + '"></li>');
    });

    div.innerHTML += '<ul>' + labels.join("") + "</ul>";
    return div;
  };

  // Add the legend to the map
  legend.addTo(myMap1);
})

// initialize map 2 (mortgage)
// Create the map object with center on Denver and set zoom.
let myMap2 = L.map("map2", {
  center: [39.7392, -104.9903],
  zoom: 3,
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
  d3.json("output/updated.geojson").then((response) => {
    //loop through the states and if state matches create bar chart
    for (let i = 0; i <= 50; i++) {
      if (response.features[i].properties.name == state) {
        let sampleData = response.features[i];
        if (sampleData.properties.rent && sampleData.properties.mortgage) {
          //set the data in the bar chart (two sets for a grouped chart)
          let chartData = {
            labels: Object.keys(sampleData.properties.rent),
            datasets: [
              {
                label: "Rent",
                data: Object.values(sampleData.properties.rent),
                backgroundColor: "#12cc5a",
              },
              {
                label: "Mortgage",
                data: Object.values(sampleData.properties.mortgage),
                backgroundColor: "#1dc2db",
              },
            ],
          };
          // build a config for rent and for mortgage
          let config = {
            type: "bar",
            data: chartData,
          };
          // Clear any previous chart instance before creating a new one
          let ctx = document.getElementById("barChart").getContext("2d");
          document.getElementById("chartMessage").innerText = "";
          if (window.chartInstance) {
            window.chartInstance.destroy(); // Destroy the previous chart
          }
          window.chartInstance = new Chart(ctx, config); // Create a new chart instance
        } else {
          // If rent or mortgage data is missing remove graph and message that no data is available
          if (window.chartInstance) {
            window.chartInstance.destroy();
          }
          document.getElementById("chartMessage").innerText =
            "No data available for the selected state.";
        }
      }
    }
  });
}

// page load function
function init() {
  d3.json("output/updated.geojson").then((response) => {
    // get the states names field
    statesList = [];
    for (let i = 0; i < response.features.length; i++) {
      let state = response.features[i].properties.name;
      statesList.push(state);
    }
    // use d3 to select the dropdown
    let dropDown = d3.select("#selState");
    //populate the dropdown menu with the states
    statesList.forEach((state) => {
      dropDown.append("option").attr("value", state).text(state);
    });
    //get the first state
    let firstState = statesList[0];
    //barChart function for initial state
    barChart(firstState);
  });
}

// function to listen for the dropdown
d3.select("#selState").on("change", function () {
  let newState = d3.select(this).property("value");
  updateChart(newState);
});
//function to update the chart based off dropdown selection
function updateChart(newState) {
  barChart(newState);
}
init();
