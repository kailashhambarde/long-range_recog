// Function to populate the table
function populateTable(data) {
    var tbody = document.getElementById('table-body');
    tbody.innerHTML = '';

    var rowCounter = 1;

    data.forEach(function(item) {
        item.PID.forEach(function(pid) {
            var row = document.createElement('tr');
            row.innerHTML = `<td>${rowCounter}</td>
                             <td>${item.Representative}</td>
                             <td>${pid.PID}</td>
                             <td class="${pid.F_image.toLowerCase()}">${pid.F_image}</td>
                             <td class="${pid.L_image.toLowerCase()}">${pid.L_image}</td>
                             <td class="${pid.R_image.toLowerCase()}">${pid.R_image}</td>
                             <td class="${pid.Video.toLowerCase()}">${pid.Video}</td>`;

            // Add classes based on cell values for coloring
            row.querySelectorAll('td').forEach(function(cell) {
                var cellText = cell.textContent.trim();
                if (cellText.toLowerCase() === 'yes') {
                    cell.classList.add('yes');
                } else if (cellText.toLowerCase() === 'no') {
                    cell.classList.add('no');
                }
            });

            tbody.appendChild(row);
            rowCounter++;
        });
    });

    adjustColumnWidths(); // Adjust column widths after populating the table
}

// Function to adjust table column widths based on data
function adjustColumnWidths() {
    var table = document.querySelector('table');
    var rows = table.querySelectorAll('tr');
    var maxWidths = [];

    rows.forEach(function(row) {
        var cells = row.querySelectorAll('td');
        cells.forEach(function(cell, index) {
            var cellWidth = cell.clientWidth;
            maxWidths[index] = Math.max(maxWidths[index] || 0, cellWidth);
        });
    });

    var headerCells = table.querySelectorAll('th');
    headerCells.forEach(function(headerCell, index) {
        headerCell.style.width = maxWidths[index] + 'px';
    });
}

// Function to filter the table by column
function filterTableByColumn(columnIndex, filterValue) {
    var rows = document.querySelectorAll('#table-body tr');

    rows.forEach(function(row) {
        var cell = row.querySelectorAll('td')[columnIndex];
        if (!cell) return; // If cell does not exist (header row), skip
        if (filterValue === 'all' || cell.textContent.toLowerCase().includes(filterValue.toLowerCase())) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Add event listeners for filters
document.getElementById('filterSR').addEventListener('input', function() {
    filterTableByColumn(0, this.value);
});

document.getElementById('filterRepresentative').addEventListener('input', function() {
    filterTableByColumn(1, this.value);
});

document.getElementById('filterPID').addEventListener('input', function() {
    filterTableByColumn(2, this.value);
});

document.getElementById('filterF_image').addEventListener('change', function() {
    filterTableByColumn(3, this.value);
});

document.getElementById('filterL_image').addEventListener('change', function() {
    filterTableByColumn(4, this.value);
});

document.getElementById('filterR_image').addEventListener('change', function() {
    filterTableByColumn(5, this.value);
});

document.getElementById('filterVideo').addEventListener('change', function() {
    filterTableByColumn(6, this.value);
});

// Fetch the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        populateTable(data);
        window.addEventListener('resize', adjustColumnWidths); // Adjust column widths on window resize
    })
    .catch(error => console.error('Error fetching data:', error));
