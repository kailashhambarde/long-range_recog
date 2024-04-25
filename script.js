function populateTable(data) {
    // Log the data to see what we have
    console.log(data);

    var tbody = document.getElementById("table-body");
    tbody.innerHTML = "";

    var rowCounter = 1;

    data.forEach(function (item) {
        item.PID.forEach(function (pid) {
            var row = document.createElement("tr");
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
          `;
           
            // Add classes based on cell values for coloring
            row.querySelectorAll("td").forEach(function (cell) {
                var cellText = cell.textContent.trim();
                if (cellText.toLowerCase() === "yes") {
                    cell.classList.add("yes");
                } else if (cellText.toLowerCase() === "no") {
                    cell.classList.add("no");
                }
            });

            tbody.appendChild(row);
            rowCounter++;
        });
    });

}




// Function to filter the table by column
function filterTableByColumn(columnIndex, filterValue) {
    var rows = document.querySelectorAll("#table-body tr");

    rows.forEach(function (row) {
        var cell = row.querySelectorAll("td")[columnIndex];
        if (!cell) return; // If cell does not exist (header row), skip
        if (
            filterValue === "all" ||
            cell.textContent.toLowerCase().includes(filterValue.toLowerCase())
        ) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}



// Add event listeners for filters
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
    document.getElementById(`filterS1P${i}`).addEventListener("input", function () {
        filterTableByColumn(7 + i, this.value);
    });
}

for (var j = 1; j <= 18; j++) {
    document.getElementById(`filterS2P${j}`).addEventListener("input", function () {
        filterTableByColumn(25 + j, this.value);
    });
}

// Fetch the JSON file
fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        populateTable(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
