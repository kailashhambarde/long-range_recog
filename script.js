



function populateTable(data) {
    console.log(data);

    var tbody = document.getElementById("table-body");
    tbody.innerHTML = "";

    var rowCounter = 1;

    data.forEach(function (item) {
        item.PID.forEach(function (pid) {
            var row = document.createElement("tr");

            // Add classes for different backgrounds based on cell content
            row.classList.add("row-animation");
            row.innerHTML = `<td>${rowCounter}</td>
          <td>${item.Representative}</td>
          <td>${pid.PID}</td>
          <td class="${pid.Consent ? pid.Consent.toLowerCase() : ''}">${pid.Consent ? pid.Consent : ''}</td>
          <td class="${pid.F_image ? pid.F_image.toLowerCase() : ''}">${pid.F_image ? pid.F_image : ''}</td>
          <td class="${pid.L_image ? pid.L_image.toLowerCase() : ''}">${pid.L_image ? pid.L_image : ''}</td>
          <td class="${pid.R_image ? pid.R_image.toLowerCase() : ''}">${pid.R_image ? pid.R_image : ''}</td>
          <td class="${pid.Video ? pid.Video.toLowerCase() : ''}">${pid.Video ? pid.Video : ''}</td>
          <td class="${pid.S1P1 ? pid.S1P1.toLowerCase() : ''}">${pid.S1P1 ? pid.S1P1 : ''}</td>
          <td class="${pid.S1P2 ? pid.S1P2.toLowerCase() : ''}">${pid.S1P2 ? pid.S1P2 : ''}</td>
          <td class="${pid.S1P3 ? pid.S1P3.toLowerCase() : ''}">${pid.S1P3 ? pid.S1P3 : ''}</td>
          <td class="${pid.S1P4 ? pid.S1P4.toLowerCase() : ''}">${pid.S1P4 ? pid.S1P4 : ''}</td>
          <td class="${pid.S1P5 ? pid.S1P5.toLowerCase() : ''}">${pid.S1P5 ? pid.S1P5 : ''}</td>
          <td class="${pid.S1P6 ? pid.S1P6.toLowerCase() : ''}">${pid.S1P6 ? pid.S1P6 : ''}</td>
          <td class="${pid.S1P7 ? pid.S1P7.toLowerCase() : ''}">${pid.S1P7 ? pid.S1P7 : ''}</td>
          <td class="${pid.S1P8 ? pid.S1P8.toLowerCase() : ''}">${pid.S1P8 ? pid.S1P8 : ''}</td>
          <td class="${pid.S1P9 ? pid.S1P9.toLowerCase() : ''}">${pid.S1P9 ? pid.S1P9 : ''}</td>
          <td class="${pid.S1P10 ? pid.S1P10.toLowerCase() : ''}">${pid.S1P10 ? pid.S1P10 : ''}</td>
          <td class="${pid.S1P11 ? pid.S1P11.toLowerCase() : ''}">${pid.S1P11 ? pid.S1P11 : ''}</td>
          <td class="${pid.S1P12 ? pid.S1P12.toLowerCase() : ''}">${pid.S1P12 ? pid.S1P12 : ''}</td>
          <td class="${pid.S1P13 ? pid.S1P13.toLowerCase() : ''}">${pid.S1P13 ? pid.S1P13 : ''}</td>
          <td class="${pid.S1P14 ? pid.S1P14.toLowerCase() : ''}">${pid.S1P14 ? pid.S1P14 : ''}</td>
          <td class="${pid.S1P15 ? pid.S1P15.toLowerCase() : ''}">${pid.S1P15 ? pid.S1P15 : ''}</td>
          <td class="${pid.S1P16 ? pid.S1P16.toLowerCase() : ''}">${pid.S1P16 ? pid.S1P16 : ''}</td>
          <td class="${pid.S1P17 ? pid.S1P17.toLowerCase() : ''}">${pid.S1P17 ? pid.S1P17 : ''}</td>
          <td class="${pid.S1P18 ? pid.S1P18.toLowerCase() : ''}">${pid.S1P18 ? pid.S1P18 : ''}</td>
          <td class="${pid.S2P1 ? pid.S2P1.toLowerCase() : ''}">${pid.S2P1 ? pid.S2P1 : ''}</td>
          <td class="${pid.S2P2 ? pid.S2P2.toLowerCase() : ''}">${pid.S2P2 ? pid.S2P2 : ''}</td>
          <td class="${pid.S2P3 ? pid.S2P3.toLowerCase() : ''}">${pid.S2P3 ? pid.S2P3 : ''}</td>
          <td class="${pid.S2P4 ? pid.S2P4.toLowerCase() : ''}">${pid.S2P4 ? pid.S2P4 : ''}</td>
          <td class="${pid.S2P5 ? pid.S2P5.toLowerCase() : ''}">${pid.S2P5 ? pid.S2P5 : ''}</td>
          <td class="${pid.S2P6 ? pid.S2P6.toLowerCase() : ''}">${pid.S2P6 ? pid.S2P6 : ''}</td>
          <td class="${pid.S2P7 ? pid.S2P7.toLowerCase() : ''}">${pid.S2P7 ? pid.S2P7 : ''}</td>
          <td class="${pid.S2P8 ? pid.S2P8.toLowerCase() : ''}">${pid.S2P8 ? pid.S2P8 : ''}</td>
          <td class="${pid.S2P9 ? pid.S2P9.toLowerCase() : ''}">${pid.S2P9 ? pid.S2P9 : ''}</td>
          <td class="${pid.S2P10 ? pid.S2P10.toLowerCase() : ''}">${pid.S2P10 ? pid.S2P10 : ''}</td>
          <td class="${pid.S2P11 ? pid.S2P11.toLowerCase() : ''}">${pid.S2P11 ? pid.S2P11 : ''}</td>
          <td class="${pid.S2P12 ? pid.S2P12.toLowerCase() : ''}">${pid.S2P12 ? pid.S2P12 : ''}</td>
          <td class="${pid.S2P13 ? pid.S2P13.toLowerCase() : ''}">${pid.S2P13 ? pid.S2P13 : ''}</td>
          <td class="${pid.S2P14 ? pid.S2P14.toLowerCase() : ''}">${pid.S2P14 ? pid.S2P14 : ''}</td>
          <td class="${pid.S2P15 ? pid.S2P15.toLowerCase() : ''}">${pid.S2P15 ? pid.S2P15 : ''}</td>
          <td class="${pid.S2P16 ? pid.S2P16.toLowerCase() : ''}">${pid.S2P16 ? pid.S2P16 : ''}</td>
          <td class="${pid.S2P17 ? pid.S2P17.toLowerCase() : ''}">${pid.S2P17 ? pid.S2P17 : ''}</td>
          <td class="${pid.S2P18 ? pid.S2P18.toLowerCase() : ''}">${pid.S2P18 ? pid.S2P18 : ''}</td>
          <td class="filter-count"></td>`; 

            tbody.appendChild(row);
            rowCounter++;
        });
    });
    // Update filter counts after populating the table
    //updateFilterCounts();
    // Create a separate row for filter counts at the end of the table
    createFilterCountRow();
    // Add animation class to rows
    animateRows();
}

function createFilterCountRow() {
    var tbody = document.getElementById("table-body");
    var filterRow = document.getElementById("filter-count-row");

    if (!filterRow) {
        filterRow = document.createElement("tr");
        filterRow.id = "filter-count-row";
        filterRow.style.backgroundColor = "black";
        filterRow.style.fontWeight = "bold";
    } else {
        filterRow.innerHTML = ""; 
    }

    // Loop through all cells except the first one (which is the row counter)
    for (var i = 1; i < tbody.rows[0].cells.length; i++) {
        var filterCount = 0;
        // Loop through all rows except the filter count row itself
        for (var j = 0; j < tbody.rows.length - 1; j++) {
            var cell = tbody.rows[j].cells[i];
            if (tbody.rows[j].style.display !== "none" && cell.textContent !== "") {
                filterCount++;
            }
        }
        // Add filter count cell to the filter row
        var filterCountCell = document.createElement("td");
        filterCountCell.textContent = filterCount;
        filterRow.appendChild(filterCountCell);
    }

    // Add or update filter row to the table body
    if (!document.getElementById("filter-count-row")) {
        tbody.appendChild(filterRow);
    }
}




// Function to animate rows
function animateRows() {
    var rows = document.querySelectorAll('.row-animation');
    rows.forEach(function(row, index) {
        setTimeout(function() {
            row.classList.add('animate');
        }, index * 100);
    });
}









function fetchAndPlotHistogram() {
    Promise.all([
        fetch("data.json").then(response => response.json()), 
        fetch("attribute_counts.json").then(response => response.json())
    ])
    .then(([tableData, histogramData]) => {
        populateTable(tableData); 
        // Plot histograms for each section
        plotHistogram('gender', histogramData.Gender);
        plotHistogram('age', histogramData.Age);
        plotHistogram('height', histogramData.Height);
        plotHistogram('weight', histogramData.Weight);
        plotHistogram('ethnicity', histogramData.Ethnicity);
        plotHistogram('hair-color', histogramData['Hair Color']);
        plotHistogram('hairstyle', histogramData['Hair Style']);
        plotHistogram('beard', histogramData.Beard);
        plotHistogram('moustache', histogramData.Moustache);
        plotHistogram('glasses', histogramData.Glasses);
        plotHistogram('head-accessories', histogramData['Head Accessories']);
        plotHistogram('upper-body-clothing', histogramData['Upper Body Cloths']);
        plotHistogram('lower-body-clothing', histogramData['Lower Body Cloths']);
        plotHistogram('feet', histogramData.Feet);
        plotHistogram('accessories', histogramData.Accessories);
        plotHistogram('action', histogramData.Action);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}


/**
 * Plot a histogram chart.
 * @param {string} sectionId - The ID of the section where the chart will be rendered.
 * @param {Object} data - The data object containing labels and corresponding values.
 */
function plotHistogram(sectionId, data) {
    const ctx = document.getElementById(`${sectionId}-chart`).getContext('2d');
    const labels = Object.keys(data);
    const values = Object.values(data);
    const backgroundColors = generateRandomColors(labels.length); 

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '', 
                data: values,
                backgroundColor: backgroundColors,
                borderColor: backgroundColors, 
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false 
                },
                tooltip: {
                    enabled: true 
                },
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    display: true, 
                    color: 'black', 
                    font: {
                        weight: 'bold' 
                    },
                    formatter: function(value, context) {
                        return value.toLocaleString(); 
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: true, 
                        color: 'rgba(0, 0, 0, 0.1)' 
                    },
                    ticks: {
                        callback: function(value, index, values) {
                            return value.toLocaleString(); 
                        }
                    }
                },
                x: {
                    grid: {
                        display: false 
                    }
                }
            }
        }
    });
}


function generateRandomColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
        colors.push(color);
    }
    return colors;
}



fetchAndPlotHistogram();



function filterTableByColumn(columnIndex, filterValue) {
    var rows = document.querySelectorAll("#table-body tr");

    rows.forEach(function (row, index) {
        var cell = row.querySelectorAll("td")[columnIndex];
        if (!cell) return;

        var filterCount = 0; // Initialize filter count

        // Loop through all cells in the row except the first one (which is the row counter)
        for (var i = 1; i < row.cells.length - 1; i++) {
            var currentCell = row.cells[i];
            if (currentCell.textContent.toLowerCase().includes(filterValue.toLowerCase()) || filterValue === "all") {
                filterCount++;
            }
        }

        if (filterValue === "all" || cell.textContent.toLowerCase().includes(filterValue.toLowerCase())) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

        var tbody =document.getElementById('table-body')
        var filterRow = document.getElementById('filter-count-row');

        if (!filterRow) {
            filterRow = document.createElement('tr');
            filterRow.id = 'filter-count-row';
            filterRow.style.backgroundColor = "lightblue";
            filterRow.style.fontWeight = "bold";
        } else {
            filterRow.innerHTML = '';
        }

        // Add filter count cell to the filter row
        var filterCountCell = document.createElement("td");
        filterCountCell.textContent = filterCount;
        filterRow.appendChild(filterCountCell);

        // Update filter count cell value
        if (filterValue === "all") {
            filterCountCell.textContent = filterCount;
        } else {
            // For "Yes" and "No" filters, count only rows where the specific cell matches the filter value
            if (cell.textContent.toLowerCase() === filterValue.toLowerCase()) {
                filterCountCell.textContent = 1;
            } else {
                // Show the count even if the row is hidden
                filterCountCell.textContent = 0;
            }
        }
    });

    createFilterCountRow();
}











document.getElementById("filterSR").addEventListener("input", function () {
    filterTableByColumn(0, this.value);
});

document.getElementById("filterRepresentative").addEventListener("input", function () {
    filterTableByColumn(1, this.value);
});

document.getElementById("filterPID").addEventListener("input", function () {
    filterTableByColumn(2, this.value);
});

document.getElementById("filterConsent").addEventListener("input", function () {
    filterTableByColumn(3, this.value);
});

document.getElementById("filterF_image").addEventListener("input", function () {
    filterTableByColumn(4, this.value);
});

document.getElementById("filterL_image").addEventListener("input", function () {
    filterTableByColumn(5, this.value);
});

document.getElementById("filterR_image").addEventListener("input", function () {
    filterTableByColumn(6, this.value);
});

document.getElementById("filterVideo").addEventListener("input", function () {
    filterTableByColumn(7, this.value);
});

for (var i = 1; i <= 18; i++) {
    (function (index) {
        document.getElementById(`filterS1P${index}`).addEventListener("input", function () {
            filterTableByColumn(7 + index, this.value);
        });
    })(i);
}

for (var j = 1; j <= 18; j++) {
    (function (index) {
        document.getElementById(`filterS2P${index}`).addEventListener("input", function () {
            filterTableByColumn(25 + index, this.value);
        });
    })(j);
}
