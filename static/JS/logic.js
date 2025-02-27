// // initialize map 1 (rent)
// // Create the map object with center on Denver and set zoom.
// let myMap1 = L.map("map1", {
//   center: [39.7392, -104.9903],
//   zoom: 4,
// });

// // Create and add the 'basemap' tile layer to the map.
// let baseMap1 = L.tileLayer(
//   "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
//   {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   }
// ).addTo(myMap1);

// // Define the data for each year's rent data

// // Function to style the choropleth based on rent data
// function style(feature, year){

// }

// //Function to get color based on rent value
// function getColor(rent){

// }

// //Function to show popups with rent information
// function onEachFeature(feature, layer){

// }

// //Create and add layers for each year's data
// let layers ={}

// //Add layer control to toggle between years

// //Create a legend to show the rent ranges

// //Initialize map with the 2020 data as default layer

// // initialize map 2 (mortgage)
// // Create the map object with center on Denver and set zoom.
// let myMap2 = L.map("map2", {
//   center: [39.7392, -104.9903],
//   zoom: 4,
// });

// // Create and add the 'basemap' tile layer to the map.
// let baseMap2 = L.tileLayer(
//   "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
//   {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   }
// ).addTo(myMap2);

// build the bar chart
function barChart(state) {
  d3.json("output/updated.geojson").then((response) => {
    for (let i = 0; i <= 50; i++) {
      if (response.features[i].properties.name == state) {
        let sampleData = response.features[i];
        if (sampleData.properties.rent && sampleData.properties.mortgage) {
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
          if (window.chartInstance) {
            window.chartInstance.destroy(); // Destroy the previous chart
          }
          window.chartInstance = new Chart(ctx, config); // Create a new chart instance
        } else {
          // If rent or mortgage data is missing remove graph
          window.chartInstance.destroy();
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
  console.log("Dropdown changed, selected state:", newState);
  updateChart(newState);
});
function updateChart(newState) {
  barChart(newState);
}
init();
