// creating tabledata object from raw data file
var tableData = data;

// print to console to verify accuracy
// console.log(tableData)

// create a variable to hold table body HTML element
var tbody = d3.select("tbody");

// code to select data from input form 
// select button and form
var button = d3.select("#filter-btn");

// create and add table row into tbody for each object iterated on
tableData.forEach(function (ufo) {
    var row = tbody.append("tr");
    
    Object.entries(ufo).forEach(function ([key,value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// create variable to hold user's search filters
var search_input = d3.selectAll(".form-control");

// create function to handle text input
function handleChange(event) {
    
    d3.event.preventDefault();
    tbody.html('');
    var key = d3.select(this).property('id');
    var value = d3.select(this).property('value');

    if (value) {
        filteredData = tableData.filter(obj => obj[key] == value);
    };
    
   
    filteredData.forEach(function (obj) {
        var row = tbody.append("tr");
        
        Object.entries(obj).forEach(function ([key,value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

};
search_input.on("change", handleChange);




