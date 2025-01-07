document.addEventListener("DOMContentLoaded", function () {
    let datalistInputs = document.querySelectorAll("input[list]");

    datalistInputs.forEach(input => {
        input.addEventListener("focus", function () {
            this.setAttribute("autocomplete", "off"); // Disable autocomplete interference
            this.value = ""; // Clears the input temporarily to show all options
        });

        input.addEventListener("blur", function () {
            if (!this.value.trim()) {
                this.value = sessionStorage.getItem(this.id) || ""; // Restore previous value if empty
            }
        });

        input.addEventListener("input", function () {
            sessionStorage.setItem(this.id, this.value); // Save input value for auto-save
        });
    });

    // Function to lock all inputs (including datalist and date fields) in a row and persist through refresh
    window.lockRow = function (rowId) {
        let rowElements = document.querySelectorAll(`#${rowId} input`);
        rowElements.forEach(element => {
            element.readOnly = true;
            element.style.backgroundColor = "#d3d3d3"; // Grey out the field
            element.style.pointerEvents = "none"; // Prevent interactions
        });

        // Store locked state in sessionStorage
        sessionStorage.setItem(`locked-${rowId}`, "true");
    };

    // Function to unlock fields in a row and remove grey-out effect
    window.unlockRow = function (rowId) {
        let rowElements = document.querySelectorAll(`#${rowId} input`);
        rowElements.forEach(element => {
            element.readOnly = false;
            element.style.backgroundColor = ""; // Restore normal background
            element.style.pointerEvents = "auto"; // Allow interactions again
        });

        // Remove locked state from sessionStorage
        sessionStorage.removeItem(`locked-${rowId}`);
    };

    // Function to restore locked state from sessionStorage on page load
    function restoreLockedRows() {
        document.querySelectorAll(".row-container, .section-container").forEach(row => {
            let rowId = row.id;
            if (sessionStorage.getItem(`locked-${rowId}`) === "true") {
                lockRow(rowId);
            }
        });
    }

    // Auto-save function to store progress every 3 seconds
    function autoSaveForm() {
        let formFields = document.querySelectorAll("input");
        formFields.forEach(field => {
            sessionStorage.setItem(field.id, field.value);
        });
    }

    // Restore saved data from sessionStorage
    function restoreFormData() {
        let formFields = document.querySelectorAll("input");
        formFields.forEach(field => {
            if (sessionStorage.getItem(field.id)) {
                field.value = sessionStorage.getItem(field.id);
            }
        });
    }

    // Auto-save every 3 seconds
    setInterval(autoSaveForm, 3000);

    // Restore saved data and locked states on page load
    restoreFormData();
    restoreLockedRows();
});

function updateCourtAndJail() {
    let county = document.getElementById("county").value;
    console.log("Selected County:", county);
    // Future logic for updating court and jail options based on county will be added here
}
document.addEventListener('DOMContentLoaded', () => {
    const countyCourts = {
        'Barrow': [
            'State Court',
            'Superior Court',
            'Auburn City Court',
            'Statham City Court',
            'Winder City Court'
        ],
        'Bartow': [
            'State Court',
            'Superior Court',
            'Adairsville City Court',
            'Cartersville City Court'
        ],
        'Carroll': [
            'State Court',
            'Superior Court',
            'Carrollton City Court',
            'Villa Rica City Court'
        ],
        'Cherokee': [
            'State Court',
            'Superior Court',
            'Canton City Court',
            'Woodstock City Court'
        ],
        'Clarke': [
            'State Court',
            'Superior Court',
            'Athens-Clarke County Court'
        ],
        'Cobb': [
            'State Court',
            'Superior Court',
            'Marietta City Court',
            'Smyrna City Court',
            'Kennesaw City Court',
            'Acworth City Court',
            'Powder Springs City Court',
            'Austell City Court'
        ],
        'Floyd': [
            'State Court',
            'Superior Court',
            'Rome City Court',
            'Cave Spring City Court'
        ],
        'Gordon': [
            'State Court',
            'Superior Court',
            'Calhoun City Court',
            'Fairmount City Court'
        ],
        'Gwinnett': [
            'State Court',
            'Superior Court',
            'Duluth City Court',
            'Lawrenceville City Court',
            'Lilburn City Court',
            'Norcross City Court',
            'Snellville City Court',
            'Suwanee City Court'
        ],
        'Haralson': [
            'State Court',
            'Superior Court',
            'Bremen City Court',
            'Tallapoosa City Court',
            'Buchanan City Court',
            'Waco City Court'
        ],
        'Paulding': [
            'State Court',
            'Superior Court',
            'Hiram City Court',
            'Dallas City Court'
        ],
        'Polk': [
            'State Court',
            'Superior Court',
            'Cedartown City Court',
            'Rockmart City Court',
            'Aragon City Court',
            'Braswell City Court'
        ],
        'Pickens': [
            'State Court',
            'Superior Court',
            'Jasper City Court',
            'Nelson City Court',
            'Talking Rock City Court'
        ]
    };

    const countyInput = document.getElementById('county');
    const courtInput = document.getElementById('courtLocation');
    const courtDatalist = document.getElementById('court-options');

    countyInput.addEventListener('input', () => {
        const selectedCounty = countyInput.value;
        
        // Clear previous options
        courtDatalist.innerHTML =  '<option value="">Select Court</option>';
        if (selectedCounty in countyCourts) {
          countyCourts[selectedCounty].forEach(court => {
              let option = document.createElement('option');
              option.value = court;
              courtDatalist.appendChild(option);
          });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const courtDateInput = document.getElementById('courtDateInput');
    
    courtDateInput.addEventListener('change', () => {
        let value = courtDateInput.value;

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const heightInput = document.getElementById('height');

    heightInput.addEventListener('input', () => {
        let numericString = heightInput.value.replace(/[^0-9]/g, ''); // Strip non-digits

        if (numericString === '') {
            heightInput.value = ''; // Allow clearing the field
            return;
        }

        let feet = parseInt(numericString.substring(0, 1), 10) || 0; // First digit is feet
        let inches = parseInt(numericString.substring(1), 10) || 0; // Remaining digits are inches

        if (inches > 11) {
            inches = inches % 10; // Prevent inches from exceeding 11
        }

        // Preserve backspace functionality by only formatting when more than 1 digit is entered
        if (numericString.length === 1) {
            heightInput.value = feet; // Show only feet for single-digit input
        } else {
            heightInput.value = `${feet}'${inches}"`; // Properly format feet & inches
        }
    });

    // WEIGHT FORMATTING
    const weightInput = document.getElementById('weight');
    weightInput.addEventListener('blur', () => {
        const value = weightInput.value.replace(/[^0-9]/g, ''); // Strip non-numeric characters
        if (value) {
            weightInput.value = `${parseInt(value, 10)} lbs`;
        } else {
            weightInput.value = ''; // Clear if empty
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const bondAmountInput = document.getElementById('bondAmount');

    bondAmountInput.addEventListener('input', () => {
        let value = bondAmountInput.value.replace(/[^0-9.]/g, ''); // Remove non-numeric characters except for '.'

        // Ensure only one decimal point
        let parts = value.split('.');
        if (parts.length > 2) {
            value = parts[0] + '.' + parts.slice(1).join(''); // Keep only the first decimal point
        }

        bondAmountInput.value = value; // Update the field with clean numeric value
    });

    bondAmountInput.addEventListener('blur', () => {
        let value = bondAmountInput.value.replace(/[^0-9.]/g, ''); // Remove unwanted characters
        let numericValue = parseFloat(value);

        if (!isNaN(numericValue)) {
            bondAmountInput.value = numericValue.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
            });
        } else {
            bondAmountInput.value = ''; // Clear if invalid
        }
    });
});
