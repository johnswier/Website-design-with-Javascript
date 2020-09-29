// creating tabledata object from raw data file
var tableData = data;

// print to console to verify accuracy
// console.log(tableData)

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



