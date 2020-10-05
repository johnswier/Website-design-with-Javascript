// creating tabledata object from raw data file
var tableData = data;

// print to console to verify accuracy
console.log(tableData)

// create a variable to hold table body HTML element
var tbody = d3.select("tbody");

// create and add table row into tbody for each object iterated on
tableData.forEach(function (ufo) {
    var row = tbody.append("tr");
    
    Object.entries(ufo).forEach(function ([key,value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// create variable to hold input text
var text = d3.select("#datetime");


// create function to handle text input

function handleChange(event) {
    
    d3.event.preventDefault();
    tbody.html('');
    var inputDate = d3.event.target.value;
    var filteredData = tableData.filter(ufo => ufo.datetime === inputDate);
    filteredData.forEach(function (ufo) {
        var row = tbody.append("tr");
        
        Object.entries(ufo).forEach(function ([key,value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

};

text.on("change", handleChange);