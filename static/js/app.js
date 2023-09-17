// Read in samples.json from the URL 
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

let samplesData;
let metaData;
let sampleNames;

// Promise for obtaining JSON data from URL
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch data and initialize the page
d3.json(url).then(function(data){
    samplesData = data.samples;
    metaData = data.metadata;
    sampleNames = data.names;

// Populate dropdown menu
    let selector = d3.select("#selDataset");
    sampleNames.forEach((id) => {
        selector.append("option").text(id).property("value", id);
    });

// Display default sample
    updateCharts(sampleNames[0]);
});

// Function to update all charts and metadata
function updateCharts(sampleID){
    const selectedIndex = sampleNames.indexOf(sampleID);
    const selectedSample = samplesData[selectedIndex];
    const selectedMetaData = metaData[selectedIndex];

// Update demographic info
    displayMetaData(selectedMetaData);

// Update bar chart and bubble chart
    hbarChart(selectedSample);
    bubbleChart(selectedSample);
}

// Function to update demographic info
function displayMetaData(demographicInfo){
    let demoSelect = d3.select("#sample-metadata");

    demoSelect.html(
        `id: ${demographicInfo.id} <br> 
        ethnicity: ${demographicInfo.ethnicity} <br>
        gender: ${demographicInfo.gender} <br>
        age: ${demographicInfo.age} <br>
        location: ${demographicInfo.location} <br>
        bbtype: ${demographicInfo.bbtype} <br>
        wfreq: ${demographicInfo.wfreq}`
    );
}

// Function to generate bar chart
function hbarChart(selectedSample){
    let x_axis = selectedSample.sample_values.slice(0, 10).reverse();
    let y_axis = selectedSample.otu_ids.slice(0, 10).reverse().map((item) => `OTU ${item}`);
    let text = selectedSample.otu_labels.slice(0,10).reverse();
    let trace = {
        x: x_axis,
        y: y_axis,
        text: text,
        type: "bar",
        orientation: "h",
    };

    let data = [trace];

    let layout = {
        margin: {
            1: 100,
            r: 20,
            t: 0,
            b: 100,
        },
        height: 500,
        width: 600,
    };
    Plotly.newPlot("bar", data, layout);
}

// Function to generate bubble chart
function bubbleChart(selectedSample){
    let x_axis = selectedSample.otu_ids;
    let y_axis = selectedSample.sample_values;
    let marker_size = selectedSample.sample_values;
    let color = selectedSample.otu_ids;
    let text = selectedSample.otu_labels;

    let trace = {
        x: x_axis,
        y: y_axis,
        text: text,
        mode: "markers",
        marker: {
            color: color,
            colorscale: "Earth",
            size: marker_size,
        },
        type: "scatter",
    };
    let data = [trace];

    let layout = {
        xaxis: {
            title: { text: "OTU ID" },
        },
        yaxis: {
            title: { text: "Sample Values" },
        }
    };
    Plotly.newPlot("bubble", data, layout);
}

// Event listener for dropdown change
function optionChanged(value){
    updateCharts(value);
}

// Initialize the page
updateCharts(sampleNames[0]);