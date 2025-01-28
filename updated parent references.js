document.addEventListener('DOMContentLoaded', function() {
    const countyData = {
        'Barrow': {
            'jails': ['Barrow County Detention Center'],
            'agencies': [
                'Barrow County Sheriff\'s Office',
                'Auburn Police Department',
                'Statham Police Department',
                'Winder Police Department'
            ]
        },
        'Bartow': {
            'jails': ['Bartow County Jail'],
            'agencies': [
                'Bartow County Sheriff\'s Office',
                'Adairsville Police Department',
                'Cartersville Police Department'
            ]
        },
        'Carroll': {
            'jails': ['Carroll County Jail'],
            'agencies': [
                'Carroll County Sheriff\'s Office',
                'Carrollton Police Department',
                'Villa Rica Police Department'
            ]
        },
        'Cherokee': {
            'jails': ['Cherokee County Adult Detention Center'],
            'agencies': [
                'Cherokee County Sheriff\'s Office',
                'Canton Police Department',
                'Woodstock Police Department'
            ]
        },
        'Clarke': {
            'jails': ['Clarke County Jail'],
            'agencies': [
                'Clarke County Sheriff\'s Office',
                'Athens-Clarke County Police Department'
            ]
        },
        'Cobb': {
            'jails': ['Cobb County Adult Detention Center', 'Smyrna City Jail'],
            'agencies': [
                'Cobb County Sheriff\'s Office',
                'Marietta Police Department',
                'Smyrna Police Department',
                'Kennesaw Police Department',
                'Acworth Police Department',
                'Powder Springs Police Department',
                'Austell Police Department'
            ]
        },
        'Floyd': {
            'jails': ['Floyd County Jail'],
            'agencies': [
                'Floyd County Sheriff\'s Office',
                'Rome Police Department',
                'Cave Spring Police Department',
                'Lindale Police Department'
            ]
        },
        'Gordon': {
            'jails': ['Gordon County Jail'],
            'agencies': [
                'Gordon County Sheriff\'s Office',
                'Calhoun Police Department',
                'Fairmount Police Department'
            ]
        },
        'Gwinnett': {
            'jails': ['Gwinnett County Jail'],
            'agencies': [
                'Gwinnett County Police Department',
                'Duluth Police Department',
                'Lawrenceville Police Department',
                'Lilburn Police Department',
                'Norcross Police Department',
                'Snellville Police Department',
                'Suwanee Police Department'
            ]
        },
        'Haralson': {
            'jails': ['Haralson County Jail'],
            'agencies': [
                'Haralson County Sheriff\'s Office',
                'Bremen Police Department',
                'Tallapoosa Police Department',
                'Buchanan Police Department',
                'Waco Police Department'
            ]
        },
        'Paulding': {
            'jails': ['Paulding County Jail'],
            'agencies': [
                'Paulding County Sheriff\'s Office',
                'Hiram Police Department',
                'Dallas Police Department'
            ]
        },
        'Polk': {
            'jails': ['Polk County Jail'],
            'agencies': [
                'Polk County Sheriff\'s Office',
                'Cedartown Police Department',
                'Rockmart Police Department',
                'Aragon Police Department',
                'Braswell Police Department'
            ]
        },
        'Pickens': {
            'jails': ['Pickens County Jail'],
            'agencies': [
                'Pickens County Sheriff\'s Office',
                'Jasper Police Department',
                'Nelson Police Department',
                'Talking Rock Police Department'
            ]
        }
    };

    const countySelect = document.getElementById('county');
    const jailSelect = document.getElementById('jail');
    const agencySelect = document.getElementById('arresting-agency');

    // Populate counties
    for (let county in countyData) {
        let countyOption = document.createElement('option');
        countyOption.value = county;
        countyOption.textContent = county;
        countySelect.appendChild(countyOption);
    }

    // Update jail and agency options based on selected county
    countySelect.addEventListener('change', function() {
        const selectedCounty = countySelect.value;
        updateOptions(selectedCounty);
    });

    function updateOptions(selectedCounty) {
        jailSelect.innerHTML = '<option value="">Select Jail</option>';
        agencySelect.innerHTML = '<option value="">Select Agency</option>';

        if (selectedCounty) {
            countyData[selectedCounty].jails.forEach(jail => {
                let jailOption = document.createElement('option');
                jailOption.value = jail;
                jailOption.textContent = jail;
                jailSelect.appendChild(jailOption);
            });

            countyData[selectedCounty].agencies.forEach(agency => {
                let agencyOption = document.createElement('option');
                agencyOption.value = agency;
                agencyOption.textContent = agency;
                agencySelect.appendChild(agencyOption);
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const dateOfBirthInput = document.getElementById('dob'); // Match ID in HTML
    const ageDisplay = document.getElementById('age'); // Match ID in HTML

    if (dateOfBirthInput && ageDisplay) {
        dateOfBirthInput.addEventListener('change', () => {
            const selectedDate = new Date(dateOfBirthInput.value);
            const today = new Date();
            let age = today.getFullYear() - selectedDate.getFullYear();
            const monthDiff = today.getMonth() - selectedDate.getMonth();

            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < selectedDate.getDate())) {
                age--;
            }

            ageDisplay.value = age >= 0 ? age : "-";
            console.log(`Selected date: ${selectedDate.toDateString()} | Calculated Age: ${age}`);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Show Birthplace field when "GA Life" is No
    document.getElementById('ga-life').addEventListener('change', function () {
        document.getElementById('birthplace-container').style.display = this.value === 'no' ? 'block' : 'none';
    });

    // Show Birth Place input when "GA Life" in the second div is No
    document.getElementById('ga-life-2').addEventListener('change', function () {
        document.getElementById('birthplace-input-container').style.display = this.value === 'no' ? 'block' : 'none';
    });
});




/**
 * Formats the raw phone number input into standard format.
 * e.g., "1234567890" -> "(123) 456-7890"
 */
function formatPhoneNumber(rawValue) {
  let digits = rawValue.replace(/\D/g, "");

  // Limit to 10 digits
  if (digits.length > 10) {
    digits = digits.slice(0, 10);
  }

  if (digits.length <= 3) {
    // Up to 3 digits: "123"
    return digits;
  } else if (digits.length <= 6) {
    // 4–6 digits: "(123) 456"
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  } else {
    // 7–10 digits: "(123) 456-7890"
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
}

/**
 * Event handler for ALL phone fields.
 * - Reads the raw input
 * - Applies the formatting
 * - Updates the field’s value
 */
function handlePhoneFieldInput(event) {
  const inputField = event.target;
  inputField.value = formatPhoneNumber(inputField.value);
}

/**********************************************
 * HELPER: updateToggleLabel
 * Dynamically changes label based on checked state.
 **********************************************/
function updateToggleLabel(toggleId, labelId, onText, offText) {
  const toggleEl = document.getElementById(toggleId);
  const labelEl  = document.getElementById(labelId);
  if (!toggleEl || !labelEl) return;
  labelEl.textContent = toggleEl.checked ? onText : offText;
}

/**
 * Adds a new phone field group for Defendant with formatted input.
 */
function addPhoneField() {
  const phoneFieldsContainer = document.getElementById("contact-section-container");
  
  // Determine the next index for unique IDs
  const nextIndex = phoneFieldsContainer.children.length;

  // Create a wrapper for each phone input + device type + remove button
  const fieldGroup = document.createElement("div");
  fieldGroup.className = "phone-field-group";

  // PHONE label + input
  const phoneInputLabel = document.createElement("label");
  phoneInputLabel.textContent = "PHONE #: ";
  phoneInputLabel.className = "phone-input-label";
  phoneInputLabel.setAttribute("for", `phoneNumber${nextIndex}`); // Unique 'for' attribute

  const phoneInput = document.createElement("input");
  phoneInput.type = "text";
  phoneInput.name = "phoneNumber[]"; // Array notation for multiple entries
  phoneInput.placeholder = "(555) 555-5555"; // Updated placeholder
  phoneInput.className = "phoneField"; // Ensure class is set for formatting
  phoneInput.required = true;

  // Attach the formatting event listener to the new phone input
  phoneInput.addEventListener("input", handlePhoneFieldInput);

  // Device Type Dropdown
  const deviceTypeLabel = document.createElement("label");
  deviceTypeLabel.className = "device-type-label";
  deviceTypeLabel.textContent = ""; // Blank label for alignment

  const deviceTypeSelect = document.createElement("select");
  deviceTypeSelect.name = "deviceType[]"; // Array notation for multiple entries
  deviceTypeSelect.required = true;

  const deviceTypes = ["Mobile", "Home", "Other"];
  deviceTypes.forEach(function(type) {
      const option = document.createElement("option");
      option.value = type.toLowerCase();
      option.textContent = type;
      deviceTypeSelect.appendChild(option);
  });

  // Create a Remove button
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "−"; // Use a minus sign for consistency
  removeButton.className = "remove-phone-btn"; // Ensure class is set for styling

  // Attach the remove event handler
  removeButton.addEventListener("click", function() {
      removePhoneField(this);
  });

  // Append elements to the fieldGroup
  fieldGroup.appendChild(phoneInputLabel);
  fieldGroup.appendChild(phoneInput);
  fieldGroup.appendChild(deviceTypeLabel);
  fieldGroup.appendChild(deviceTypeSelect);
  fieldGroup.appendChild(removeButton);

  // Finally, append the fieldGroup to the container
  phoneFieldsContainer.appendChild(fieldGroup);

  // Update the visibility of remove buttons
  updateRemoveButtonsVisibility();
}

/**
 * Removes a specific phone field group for Defendant.
 * @param {HTMLElement} button - The remove button that was clicked.
 */
function removePhoneField(button) {
  const phoneFieldsContainer = document.getElementById("phoneFieldsContainer");
  const fieldGroup = button.parentElement;
  phoneFieldsContainer.removeChild(fieldGroup);
  
  // Update the visibility of remove buttons after removal
  updateRemoveButtonsVisibility();
}

/**
 * Updates the visibility of remove buttons for phone fields.
 * Only show remove buttons if there's more than one phone field.
 */
function updateRemoveButtonsVisibility() {
  const phoneFields = document.querySelectorAll('#phoneFieldsContainer .phone-field-group');
  const removeButtons = document.querySelectorAll('#phoneFieldsContainer .remove-phone-btn');

  if (phoneFields.length > 1) {
    removeButtons.forEach(btn => {
      btn.style.display = 'inline-block';
    });
  } else {
    removeButtons.forEach(btn => {
      btn.style.display = 'none';
    });
  }
}

/**********************************************
 * INITIALIZE EVENT LISTENERS FOR EXISTING PHONE FIELDS
 **********************************************/
document.addEventListener("DOMContentLoaded", function() {
  // Select all inputs that should have phone-formatting
  const phoneFields = document.querySelectorAll('.phoneField');

  phoneFields.forEach(function(field) {
    // Listen for user input on each field
    field.addEventListener("input", handlePhoneFieldInput);
  });

  // Initialize Remove Buttons visibility
  updateRemoveButtonsVisibility();
});

/**********************************************
 * OPTIONAL: Initialize on Page Load
 **********************************************/
window.onload = function() {
  // Initialize any toggles or other sections here
  // Example:
  // toggleDefendantContactContainer();
  // updateToggleLabel('defendantContactToggle', 'defendantContactLabel', 'CONTACT INFORMATION', 'None');
};



function toggleArrestContainer() {
  const isChecked = document.getElementById("priorArrestToggle").checked;
  const arrestContainer = document.getElementById("priorArrestContainer");
  
  // If toggle is ON => YES => show container. Otherwise hide it.
  if (isChecked) {
    arrestContainer.classList.remove("hidden");
  } else {
    arrestContainer.classList.add("hidden");
  }
}

function toggleCoDefendantInfoContainer() {
  const checkBox = document.getElementById("coDefendantInfoToggle");
  const coDefendantSection = document.getElementById("coDefendantInfoContainer");
  
  if (checkBox.checked) {
    coDefendantSection.classList.remove("hidden");
  } else {
    coDefendantSection.classList.add("hidden");
  }
}

function toggleProbationContainer() {
  const isChecked = document.getElementById("probationToggle").checked;
  const probationContainer = document.getElementById("probationContainer");

  if (isChecked) {
    probationContainer.classList.remove("hidden");
  } else {
    probationContainer.classList.add("hidden");
  }
}
function removeThisField(btn) {
  // 'parentNode' of the button is the <p> container holding label/input/button
  btn.parentNode.remove();
}

/**
 * Creates a new paragraph containing (label + input + remove button),
 * then appends it to the specified container.
 * 
 * @param {string} containerId - ID of the container (e.g., 'defMiddleNameContainer')
 * @param {string} labelText   - Text for the label (e.g. "MIDDLE:")
 * @param {string} inputName   - name="" attribute for the <input> (e.g. "defMiddleName")
 */
function addMiddleNameField(containerId, labelText, inputName) {
  const container = document.getElementById(containerId);

  // Create a new paragraph
  const paragraph = document.createElement("p");

  // Create the label
  const label = document.createElement("label");
  label.textContent = labelText;

  // Create the input
  const input = document.createElement("input");
  input.type = "text";
  input.name = inputName;

  // Create the remove button
  const removeBtn = document.createElement("button");
  removeBtn.class = "minus-btn";
  removeBtn.type = "button";
  removeBtn.textContent = "-";
  removeBtn.onclick = function() {
    paragraph.remove();  // remove only this <p> block
  };

  // Append them all to the paragraph
  paragraph.appendChild(label);
  paragraph.appendChild(document.createTextNode(" "));
  paragraph.appendChild(input);
  paragraph.appendChild(removeBtn);

  // Finally, add paragraph to container
  container.appendChild(paragraph);
}


// =============== Defendant Middle Name ===============
function addDefMiddleName() {
  addMiddleNameField("defMiddleNameContainer", "MIDDLE:", "defMiddleName");
}

// =============== Co-Signer Middle Name ===============
function addCoSignerMiddleName() {
  addMiddleNameField("coSignerMiddleNameContainer", "MIDDLE:", "coSignerMiddleName");
}
  

function updateCombinedEmail() {
  const username = document.getElementById("emailUser").value.trim();
  const domain = document.getElementById("emailDomain").value;
  const combinedEmail = username + "@" + domain;

  // Display result in an optional read-only field (if desired)
  const combinedOutput = document.getElementById("fullEmailOutput");
  if (combinedOutput) {
    combinedOutput.value = combinedEmail;
  }
}

function updateCoSignerEmail() {
  const username = document.getElementById("coSignerEmailUser").value.trim();
  const domain   = document.getElementById("coSignerEmailDomain").value;
  const combinedEmail = username + "@" + domain;

  // Display result in a read-only field
  const combinedOutput = document.getElementById("coSignerFullEmailOutput");
  if (combinedOutput) {
    combinedOutput.value = combinedEmail;
  }
}

function toggleMaritalStatusContainer() {
  // Is the checkbox ON/checked?
  const isChecked = document.getElementById("maritalStatusToggle").checked;
  
  // Our spouse info container
  const spouseSection = document.getElementById("defendantSpouseSection");

  if (isChecked) {
    // If toggle is ON => show spouse fields
    spouseSection.classList.remove("hidden");
  } else {
    // If toggle is OFF => hide spouse fields
    spouseSection.classList.add("hidden");
  }
}

function toggleCosigner1MaritalStatusContainer() {
  const checkBox = document.getElementById("cosigner1MaritalStatusToggle");
  const spouseSection = document.getElementById("cosigner1SpouseSection");
  
  if (checkBox.checked) {
    spouseSection.classList.remove("hidden");
  } else {
    spouseSection.classList.add("hidden");
  }
}

function handleMotherStatusChange() {
  const motherStatus = document.getElementById("motherStatus").value;
  const motherCity = document.getElementById("motherCity");
  const motherState = document.getElementById("motherState");
  const motherPhoneInput = document.getElementById("motherPhoneInput");

  if (motherStatus === "contact") {
    // "IN CONTACT" => clear the fields
    motherCity.value = "";
    motherState.value = "";
    motherPhoneInput.value = "";
  } else {
    // "NO CONTACT", "INCARCERATED", or "DECEASED" => set to N/A
    motherCity.value = "N/A";
    motherState.value = "N/A";
    motherPhoneInput.value = "N/A";
  }
}

function handleFatherStatusChange() {
  const fatherStatus = document.getElementById("fatherStatus").value;
  const fatherCity = document.getElementById("fatherCity");
  const fatherState = document.getElementById("fatherState");
  const fatherPhoneInput = document.getElementById("fatherPhoneInput");

  if (fatherStatus === "contact") {
    // "IN CONTACT" => clear the fields
    fatherCity.value = "";
    fatherState.value = "";
    fatherPhoneInput.value = "";
  } else {
    // "NO CONTACT", "INCARCERATED", or "DECEASED" => set to N/A
    fatherCity.value = "N/A";
    fatherState.value = "N/A";
    fatherPhoneInput.value = "N/A";
  }
}

function updateToggleLabel(toggleId, labelId, onText, offText) {
  const toggleEl = document.getElementById(toggleId);
  const labelEl  = document.getElementById(labelId);

  if (toggleEl.checked) {
    labelEl.textContent = onText;
  } else {
    labelEl.textContent = offText;
  }
}

/**
 * Hides/shows a section. Clears or sets "N/A" in the fields.
 */
function handleToggle(toggleId, sectionId, fieldIds) {
  const toggle = document.getElementById(toggleId);
  const section = document.getElementById(sectionId);

  if (toggle.checked) {
    // Show section, clear fields
    section.classList.remove("hidden");
    fieldIds.forEach(id => {
      document.getElementById(id).value = "";
    });
  } else {
    // Hide section, set fields to N/A
    section.classList.add("hidden");
    fieldIds.forEach(id => {
      document.getElementById(id).value = "N/A";
    });
  }
}

// ========== DEFENDANT VEHICLE ==========
function toggleDefendantVehicle() {
  handleToggle(
    "defendantVehicleToggle", 
    "defendantVehicleSection", 
    [
      "defendantVehicleYear",
      "defendantMake",
      "defendantModel",
      "defendantColor",
      "defendantTagNumber"
    ]
  );
}

// ========== DEFENDANT EMPLOYMENT ==========
function toggleDefendantEmployment() {
  handleToggle(
    "defendantEmploymentToggle", 
    "defendantEmploymentSection", 
    [
      "defendantEmployer",
      "defendantCity",
      "defendantState"
    ]
  );
}

// ========== COSIGNER #1 VEHICLE ==========
function toggleCos1Vehicle() {
  handleToggle(
    "cos1VehicleToggle",
    "cos1VehicleSection",
    [
      "cos1VehicleYear",
      "cos1Make",
      "cos1Model",
      "cos1Color",
      "cos1TagNumber"
    ]
  );
}

// ========== COSIGNER #1 EMPLOYMENT ==========
function toggleCos1Employment() {
  handleToggle(
    "cos1EmploymentToggle",
    "cos1EmploymentSection",
    [
      "cos1Employer",
      "cos1City",
      "cos1State"
    ]
  );
}

// Run these once the page loads to make toggles default OFF (thus hidden and "N/A").
window.onload = function() {
  toggleDefendantVehicle();
  updateToggleLabel('defendantVehicleToggle','defendantVehicleLabel','VEHICLE DETAILS','NO VEHICLE');

  toggleDefendantEmployment();
  updateToggleLabel('defendantEmploymentToggle','defendantEmploymentLabel','EMPLOYMENT DETAILS','UNEMPLOYED');

  toggleCos1Vehicle();
  updateToggleLabel('cos1VehicleToggle','cos1VehicleLabel','VEHICLE DETAILS','NO VEHICLE');

  toggleCos1Employment();
  updateToggleLabel('cos1EmploymentToggle','cos1EmploymentLabel','EMPLOYMENT DETAILS','UNEMPLOYED');
};


    
    const heightInput = document.getElementById('height');
    heightInput.addEventListener('input', () => {
      // 1) Strip out non-digit characters
      const numericString = heightInput.value.replace(/[^0-9]/g, '');

      // 2) If no digits, clear the field
      if (numericString === '') {
        heightInput.value = '';
        return;
      }

      // 3) Parse feet and inches
      let feet;
      let inches;
      
      if (numericString.length === 1) {
        // If only one digit: "5" => 5'0"
        feet = parseInt(numericString, 10);
        inches = 0;
      } else {
        // Two or more digits: "56" => 5'6", "510" => 5'10"
        feet = parseInt(numericString.charAt(0), 10);
        inches = parseInt(numericString.substring(1), 10);
      }

      // 4) Format the displayed value
      heightInput.value = feet + "'" + inches + '"';
    });
    const weightInput = document.getElementById('weight');
    weightInput.addEventListener('blur', () => {
        const value = weightInput.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
        if (value) {
            weightInput.value = `${value} lbs`;
        }
    });
    const ssnInput = document.getElementById('ssnInput');

    /**
     * Formats a string of digits as a US Social Security Number (xxx-xx-xxxx).
     * @param {string} inputValue The unformatted input string.
     * @returns {string} The formatted SSN string.
     */
    function formatSsn(inputValue) {
      // Remove all non-digit characters
      const digits = inputValue.replace(/[^0-9]/g, '');
      
      // If fewer than 4 digits, just return what we have
      if (digits.length < 4) {
        return digits;
      }
      // If 4 or 5 digits, we have: xxx-xx
      if (digits.length < 6) {
        return digits.slice(0, 3) + '-' + digits.slice(3);
      }
      // If 6 or more digits, format: xxx-xx-xxxx
      return digits.slice(0, 3) + '-' + digits.slice(3, 5) + '-' + digits.slice(5, 9);
    }

    
    // Listen for input on the SSN field
    ssnInput.addEventListener('input', function() {
      this.value = formatSsn(this.value);
    });


    const cosSsnInput = document.getElementById('cosSsnInput');

    /**
     * Formats a string of digits as a US Social Security Number (xxx-xx-xxxx).
     * @param {string} inputValue The unformatted input string.
     * @returns {string} The formatted SSN string.
     */
    function formatSsn(inputValue) {
      // Remove all non-digit characters
      const digits = inputValue.replace(/[^0-9]/g, '');
  
      // If fewer than 4 digits, just return what we have
      if (digits.length < 4) {
        return digits;
      }
      // If 4 or 5 digits, format is xxx-xx
      if (digits.length < 6) {
        return digits.slice(0, 3) + '-' + digits.slice(3);
      }
      // If 6 or more digits, format is xxx-xx-xxxx
      return digits.slice(0, 3) + '-' + digits.slice(3, 5) + '-' + digits.slice(5, 9);
    }
  
    // 2) Listen for input on the Co-Signer SSN field
    cosSsnInput.addEventListener('input', function() {
      // Format as SSN and update the field
      this.value = formatSsn(this.value);
    });



 

/**********************************************
 * HELPER: updateToggleLabel
 * Dynamically changes label based on checked state.
 **********************************************/
function updateToggleLabel(toggleId, labelId, onText, offText) {
  const toggleEl = document.getElementById(toggleId);
  const labelEl  = document.getElementById(labelId);
  if (!toggleEl || !labelEl) return;
  labelEl.textContent = toggleEl.checked ? onText : offText;
}

/**********************************************
 * HELPER: handleToggle
 * Shows/Hides a section and updates field values.
 **********************************************/
function handleToggle(toggleId, sectionId, fieldIds) {
  const toggle = document.getElementById(toggleId);
  const section = document.getElementById(sectionId);

  if (toggle.checked) {
    // Show section, clear fields
    section.classList.remove("hidden");
    fieldIds.forEach(id => {
      const field = document.getElementById(id);
      if (field) field.value = "";
    });
  } else {
    // Hide section, set fields to "N/A"
    section.classList.add("hidden");
    fieldIds.forEach(id => {
      const field = document.getElementById(id);
      if (field) field.value = "N/A";
    });
  }
}

function toggleAliasSection() {
  const toggle = document.getElementById('aliasToggle');
  const container = document.getElementById('aliasContainer');

  if (toggle.checked) {
    container.classList.remove('hidden'); // Show the section
  } else {
    container.classList.add('hidden'); // Hide the section
  }

  // Debugging
  console.log('Alias List Contents:', document.getElementById('aliasList').innerHTML);
}

/**
 * Adds a new alias field with a remove button.
 */
function addAlias() {
  const aliasList = document.getElementById('aliasList');
  const div = document.createElement('div');
  div.className = 'alias-entry';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Alias Name';
  input.name = 'alias[]'; // Use array notation for form submissions

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '−';
  removeBtn.className = 'minus-btn';
  removeBtn.type = 'button';
  removeBtn.onclick = function() {
    aliasList.removeChild(div);
  };

  div.appendChild(input);
  div.appendChild(removeBtn);
  aliasList.appendChild(div);
}

/**********************************************
 * 2) ID MARKS SECTION
 **********************************************/
function toggleIdMarksSection() {
  const toggle = document.getElementById('idMarksToggle');
  const container = document.getElementById('idMarksContainer');

  if (toggle.checked) {
    container.classList.remove('hidden'); // Show the section
  } else {
    container.classList.add('hidden'); // Hide the section without clearing the data
  }
}

/**
 * Adds a new ID mark entry: 
 * [ Type Dropdown | Description Field | Minus Btn ]
 * Then updates summary dynamically.
 */
function addIdMark() {
  const list    = document.getElementById('idMarksList');
  const entry   = document.createElement('div');
  entry.className = 'id-mark-entry';

  // Dropdown
  const select = document.createElement('select');
  const options = ['Tattoo','Scar','Piercing','Mark'];
  options.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt;
    o.textContent = opt;
    select.appendChild(o);
  });
  // Track changes to update the summary
  select.onchange = updateIdMarksSummary;

  // Description input
  const desc = document.createElement('textarea');
  desc.placeholder = 'Description...';
  desc.name = 'idMarkDescription[]'; // Use array notation for form submissions

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = '−';
  removeBtn.type = 'button';
  removeBtn.className = 'minus-btn';
  removeBtn.onclick = function() {
    list.removeChild(entry);
    updateIdMarksSummary();
  };

  // Build the entry
  entry.appendChild(select);
  entry.appendChild(desc);
  entry.appendChild(removeBtn);

  // Add to the list
  list.appendChild(entry);

  // Update summary counts
  updateIdMarksSummary();
}

/**
 * Updates the summary label: "Tattoos: X | Scars: Y | Piercings: Z | Marks: W"
 * by scanning all the <select> elements in #idMarksList.
 */
function updateIdMarksSummary() {
  const selects = document.querySelectorAll('#idMarksList select');
  let tattooCount = 0, scarCount = 0, piercingCount = 0, markCount = 0;

  selects.forEach(sel => {
    if (sel.value === 'Tattoo')    tattooCount++;
    if (sel.value === 'Scar')      scarCount++;
    if (sel.value === 'Piercing')  piercingCount++;
    if (sel.value === 'Mark')      markCount++;
  });

  const summaryEl = document.getElementById('idMarksSummary');
  summaryEl.textContent = 
    `Tattoos: ${tattooCount} | Scars: ${scarCount} | Piercings: ${piercingCount} | Marks: ${markCount}`;
}

/**********************************************
 * 3) HOLDS SECTION
 **********************************************/
function toggleHoldsSection() {
  const toggle = document.getElementById('holdsToggle');
  const container = document.getElementById('holdsContainer');
  if (toggle.checked) {
    container.classList.remove('hidden');
  } else {
    container.classList.add('hidden');
    // Optionally, clear all holds when toggled off
    document.getElementById('holdsList').innerHTML = '';
  }
}

/**
 * Creates a new hold entry: 
 * [Hold Type input | Hold Location input | - button]
 */
function addHold() {
  const holdsList = document.getElementById('holdsList');
  const div = document.createElement('div');
  div.className = 'hold-entry';

  // Hold Type
  const holdType = document.createElement('input');
  holdType.type = 'text';
  holdType.placeholder = 'TYPE';
  holdType.name = 'holdType[]'; // Use array notation for form submissions

  // Hold Location
  const holdLocation = document.createElement('input');
  holdLocation.type = 'text';
  holdLocation.placeholder = 'LOCATION';
  holdLocation.name = 'holdLocation[]'; // Use array notation for form submissions

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = '−';
  removeBtn.type = 'button';
  removeBtn.className = 'minus-btn';
  removeBtn.onclick = function() {
    holdsList.removeChild(div);
  };

  // Append them all
  div.appendChild(holdType);
  div.appendChild(holdLocation);
  div.appendChild(removeBtn);
  holdsList.appendChild(div);
}

/**********************************************
 * OPTIONAL: Run toggles on page load 
 * to ensure default OFF states are hidden.
 **********************************************/
window.onload = function() {
  // Alias section default off
  toggleAliasSection();
  updateToggleLabel('aliasToggle', 'aliasToggleLabel', 'HAS ALIAS', 'NONE');

  // ID Marks default off
  toggleIdMarksSection();
  updateToggleLabel('idMarksToggle','idMarksLabel','ID MARK DESCRIPTION','NONE');

  // Holds default off
  toggleHoldsSection();
  updateToggleLabel('holdsToggle','holdsLabel','TYPE/LOCATION','NONE');
};


function updateToggleLabel(toggleId, labelId, onText, offText) {
  const toggleEl = document.getElementById(toggleId);
  const labelEl  = document.getElementById(labelId);
  if (!toggleEl || !labelEl) return;
  labelEl.textContent = toggleEl.checked ? onText : offText;
}

/**********************************************
 * 1) PHONE NUMBER FORMATTING FUNCTIONS
 **********************************************/

/**
 * Formats the raw phone number input into standard US format.
 * e.g., "1234567890" -> "(123) 456-7890"
 * @param {string} rawValue - The raw input value from the phone field.
 * @returns {string} - The formatted phone number.
 */
function formatPhoneNumber(rawValue) {
  let digits = rawValue.replace(/\D/g, "");

  // Limit to 10 digits
  if (digits.length > 10) {
    digits = digits.slice(0, 10);
  }

  if (digits.length <= 3) {
    // Up to 3 digits: "123"
    return digits;
  } else if (digits.length <= 6) {
    // 4–6 digits: "(123) 456"
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  } else {
    // 7–10 digits: "(123) 456-7890"
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
}

/**
 * Event handler for all phone fields.
 * - Reads the raw input.
 * - Applies the formatting.
 * - Updates the field’s value.
 * @param {Event} event - The input event triggered on the phone field.
 */
function handlePhoneFieldInput(event) {
  const inputField = event.target;
  inputField.value = formatPhoneNumber(inputField.value);
}

/**********************************************
 * 2) TOGGLE LABEL HELPER FUNCTION
 **********************************************/

/**
 * Dynamically changes label based on checked state.
 * @param {string} toggleId - The ID of the toggle input.
 * @param {string} labelId - The ID of the label to update.
 * @param {string} onText - The text to display when toggle is ON.
 * @param {string} offText - The text to display when toggle is OFF.
 */
function updateToggleLabel(toggleId, labelId, onText, offText) {
  const toggleEl = document.getElementById(toggleId);
  const labelEl  = document.getElementById(labelId);
  if (!toggleEl || !labelEl) return;
  labelEl.textContent = toggleEl.checked ? onText : offText;
}

/**********************************************
 * 3) MARITAL STATUS PHONE FIELDS MANAGEMENT
 **********************************************/

/**
 * Toggles the visibility of the Marital Status container.
 * Shows or hides the container based on the toggle state.
 */
function toggleMaritalStatusContainer() {
  const toggle = document.getElementById('maritalStatusToggle');
  const container = document.getElementById('maritalStatusContainer');
  if (toggle.checked) {
    container.classList.remove('hidden');
  } else {
    container.classList.add('hidden');
    // Reset phone fields to default when toggled off
    resetMaritalStatusPhoneFields();
  }
}

/**
 * Resets the Marital Status Phone Fields to a single default field.
 * Clears all additional phone fields and ensures only the main field remains.
 */
function resetMaritalStatusPhoneFields() {
  const phoneFieldsContainer = document.getElementById('maritalStatusPhoneFieldsContainer');
  phoneFieldsContainer.innerHTML = `
    <div class="phone-field-group">
      <label for="maritalStatusPhoneNumberDefault">PHONE #: </label>
      <input 
        type="text" 
        id="maritalStatusPhoneNumberDefault" 
        name="maritalStatusPhoneNumber[]" 
        class="phoneField"
        placeholder="(555) 555-5555"
        required
      >
      <select id="maritalStatusDeviceTypeDefault" name="maritalStatusDeviceType[]" required>
        <option value="">--Select Device Type--</option>
        <option value="main">Main</option>
        <option value="mobile">Mobile</option>
        <option value="home">Home</option>
        <option value="other">Other</option>
      </select>
      <button type="button" class="remove-phone-btn" onclick="removeMaritalStatusPhoneField(this)" style="display: none;">−</button>
    </div>
  `;
  // Hide remove buttons since there's only one phone field now
  updateMaritalStatusRemoveButtonsVisibility();

  // Attach event listener to the main phone input
  const mainPhoneInput = document.getElementById('maritalStatusPhoneNumberDefault');
  if (mainPhoneInput) {
    mainPhoneInput.addEventListener("input", handlePhoneFieldInput);
  }
}

/**
 * Adds a new phone field group for Marital Status.
 * Creates a new phone input with device type and a remove button.
 */
function addMaritalStatusPhoneField() {
  const phoneFieldsContainer = document.getElementById('maritalStatusPhoneFieldsContainer');

  // Determine the next index for unique IDs (optional)
  const nextIndex = phoneFieldsContainer.children.length;

  // Create a new phone field group div
  const phoneFieldGroup = document.createElement('div');
  phoneFieldGroup.className = 'phone-field-group';

  // PHONE label + input
  const phoneInputLabel = document.createElement('label');
  phoneInputLabel.textContent = "PHONE #: ";
  phoneInputLabel.className = "phone-input-label";
  phoneInputLabel.setAttribute("for", `maritalStatusPhoneNumber${nextIndex}`); // Unique 'for' attribute

  const phoneInput = document.createElement('input');
  phoneInput.type = 'text';
  phoneInput.name = 'maritalStatusPhoneNumber[]'; // Array notation for multiple entries
  phoneInput.placeholder = "(555) 555-5555"; // Updated placeholder
  phoneInput.className = 'phoneField'; // Ensure class is set for formatting
  phoneInput.required = true;

  // Attach the formatting event listener to the new phone input
  phoneInput.addEventListener("input", handlePhoneFieldInput);

  // Device Type Dropdown
  const deviceTypeSelect = document.createElement('select');
  deviceTypeSelect.name = 'maritalStatusDeviceType[]'; // Array notation for multiple entries
  deviceTypeSelect.required = true;

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = '--Select Device Type--';
  deviceTypeSelect.appendChild(defaultOption);

  const mobileOption = document.createElement('option');
  mobileOption.value = 'mobile';
  mobileOption.textContent = 'Mobile';
  deviceTypeSelect.appendChild(mobileOption);

  const homeOption = document.createElement('option');
  homeOption.value = 'home';
  homeOption.textContent = 'Home';
  deviceTypeSelect.appendChild(homeOption);

  const otherOption = document.createElement('option');
  otherOption.value = 'other';
  otherOption.textContent = 'Other';
  deviceTypeSelect.appendChild(otherOption);

  // Create a Remove button
  const removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.className = 'remove-phone-btn';
  removeButton.textContent = "−";
  removeButton.addEventListener("click", function() {
    removeMaritalStatusPhoneField(this);
  });

  // Append elements to the phoneFieldGroup
  phoneFieldGroup.appendChild(phoneInputLabel);
  phoneFieldGroup.appendChild(phoneInput);
  phoneFieldGroup.appendChild(deviceTypeSelect);
  phoneFieldGroup.appendChild(removeButton);

  // Append phoneFieldGroup to container
  phoneFieldsContainer.appendChild(phoneFieldGroup);

  // Update remove buttons visibility
  updateMaritalStatusRemoveButtonsVisibility();
}

/**
 * Removes a specific phone field group for Marital Status.
 * @param {HTMLElement} button - The remove button that was clicked.
 */
function removeMaritalStatusPhoneField(button) {
  const phoneFieldGroup = button.parentElement;
  const phoneFieldsContainer = document.getElementById('maritalStatusPhoneFieldsContainer');
  phoneFieldsContainer.removeChild(phoneFieldGroup);

  // Update remove buttons visibility after removal
  updateMaritalStatusRemoveButtonsVisibility();
}

/**
 * Updates the visibility of remove buttons for Marital Status phone fields.
 * Only show remove buttons if there's more than one phone field.
 */
function updateMaritalStatusRemoveButtonsVisibility() {
  const phoneFields = document.querySelectorAll('#maritalStatusPhoneFieldsContainer .phone-field-group');
  const removeButtons = document.querySelectorAll('#maritalStatusPhoneFieldsContainer .remove-phone-btn');

  if (phoneFields.length > 1) {
    removeButtons.forEach(btn => {
      btn.style.display = 'inline-block';
    });
  } else {
    removeButtons.forEach(btn => {
      btn.style.display = 'none';
    });
  }
}

/**********************************************
 * 4) INITIALIZATION ON DOM CONTENT LOADED
 **********************************************/

document.addEventListener("DOMContentLoaded", function() {
  // Attach event listeners to existing phone fields
  const phoneFields = document.querySelectorAll('.phoneField');
  phoneFields.forEach(function(field) {
    field.addEventListener("input", handlePhoneFieldInput);
  });

  // Initialize Remove Buttons visibility for Marital Status
  updateMaritalStatusRemoveButtonsVisibility();
});

/**********************************************
 * 5) INITIALIZE MARITAL STATUS SECTION ON PAGE LOAD
 **********************************************/

window.onload = function() {
  // Initialize Marital Status Section
  toggleMaritalStatusContainer();
  updateToggleLabel(
    'maritalStatusToggle',
    'maritalStatusLabel',
    'MARRIED',
    'SINGLE / DIVORCED / WIDOWED'
  );

  // Initialize Remove Buttons visibility for Marital Status
  updateMaritalStatusRemoveButtonsVisibility();

  // If you have other sections (Alias, ID Marks, Holds, etc.), initialize them here
  // Example:
  // toggleAliasSection();
  // updateToggleLabel('aliasToggle','aliasToggleLabel','HAS ALIAS','NO ALIAS');
};

/**********************************************
 * HELPER: updateToggleLabel
 * Dynamically changes label based on checked state.
 **********************************************/
function updateToggleLabel(toggleId, labelId, onText, offText) {
  const toggleEl = document.getElementById(toggleId);
  const labelEl  = document.getElementById(labelId);
  if (!toggleEl || !labelEl) return;
  labelEl.textContent = toggleEl.checked ? onText : offText;
}
function formatPhoneNumber(rawValue) {
  let digits = rawValue.replace(/\D/g, "");

  // Limit to 10 digits
  if (digits.length > 10) {
    digits = digits.slice(0, 10);
  }

  if (digits.length <= 3) {
    // Up to 3 digits: "123"
    return digits;
  } else if (digits.length <= 6) {
    // 4–6 digits: "(123) 456"
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  } else {
    // 7–10 digits: "(123) 456-7890"
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
}

/**
 * Event handler for ALL phone fields.
 * - Reads the raw input
 * - Applies the formatting
 * - Updates the field’s value
 */
function handlePhoneFieldInput(event) {
  const inputField = event.target;
  inputField.value = formatPhoneNumber(inputField.value);
}

/**********************************************
 * HELPER: updateToggleLabel
 * Dynamically changes label based on checked state.
 **********************************************/
function updateToggleLabel(toggleId, labelId, onText, offText) {
  const toggleEl = document.getElementById(toggleId);
  const labelEl  = document.getElementById(labelId);
  if (!toggleEl || !labelEl) return;
  labelEl.textContent = toggleEl.checked ? onText : offText;
}

function toggleAttorneyContainer() {
  const toggle = document.getElementById('attorneyToggle');
  const container = document.getElementById('attorneyContainer');

  if (toggle.checked) {
    container.classList.remove('hidden'); // Show the section
  } else {
    container.classList.add('hidden'); // Hide the section without clearing the data
  }
}

/**********************************************
 * RESET ATTORNEY PHONE FIELDS TO DEFAULT
 **********************************************/
function resetAttorneyPhoneFields() {
  const phoneFieldsContainer = document.getElementById('attorneyPhoneFieldsContainer');
  phoneFieldsContainer.innerHTML = `
    <div class="phone-field-group">
      <label for="attorneyPhoneNumberDefault">PHONE #: </label>
      <input 
        type="text" 
        id="attorneyPhoneNumberDefault" 
        name="attorneyPhoneNumber[]" 
        class="phoneField"
        placeholder="(555) 555-5555"
        required
      >
      <select id="attorneyDeviceTypeDefault" name="attorneyDeviceType[]" required>
        <option value="">--Select Device Type--</option>
        <option value="main">Main</option>
        <option value="mobile">Mobile</option>
        <option value="other">Other</option>
      </select>
      <button type="button" class="remove-phone-btn" onclick="removeAttorneyPhoneField(this)" style="display: none;">−</button>
    </div>
  `;
  // Hide remove buttons since there's only one phone field now
  updateAttorneyRemoveButtonsVisibility();

  // Attach event listener to the main phone input
  const mainPhoneInput = document.getElementById('attorneyPhoneNumberDefault');
  if (mainPhoneInput) {
    mainPhoneInput.addEventListener("input", handlePhoneFieldInput);
  }
}

/**********************************************
 * 2) ATTORNEY PHONE FIELDS MANAGEMENT
 **********************************************/

/**
 * Adds a new phone field group for Attorney.
 */
function addAttorneyPhoneField() {
  const phoneFieldsContainer = document.getElementById('attorneyPhoneFieldsContainer');

  // Determine the next index for unique IDs
  const nextIndex = phoneFieldsContainer.children.length;

  // Create a new phone field group div
  const phoneFieldGroup = document.createElement('div');
  phoneFieldGroup.className = 'phone-field-group';

  // PHONE label + input
  const phoneInputLabel = document.createElement('label');
  phoneInputLabel.textContent = "PHONE #: ";
  phoneInputLabel.className = "phone-input-label";
  phoneInputLabel.setAttribute("for", `attorneyPhoneNumber${nextIndex}`); // Unique 'for' attribute

  const phoneInput = document.createElement('input');
  phoneInput.type = 'text';
  phoneInput.name = 'attorneyPhoneNumber[]'; // Array notation for multiple entries
  phoneInput.placeholder = "(555) 555-5555"; // Updated placeholder
  phoneInput.className = 'phoneField'; // Ensure class is set for formatting
  phoneInput.required = true;

  // Attach the formatting event listener to the new phone input
  phoneInput.addEventListener("input", handlePhoneFieldInput);

  // Device Type Dropdown
  const deviceTypeSelect = document.createElement('select');
  deviceTypeSelect.name = 'attorneyDeviceType[]'; // Array notation for multiple entries
  deviceTypeSelect.required = true;

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = '--Select Device Type--';
  deviceTypeSelect.appendChild(defaultOption);

  const mobileOption = document.createElement('option');
  mobileOption.value = 'mobile';
  mobileOption.textContent = 'Mobile';
  deviceTypeSelect.appendChild(mobileOption);

  const mainOption = document.createElement('option');
  mainOption.value = 'main';
  mainOption.textContent = 'Main';
  deviceTypeSelect.appendChild(mainOption);

  const otherOption = document.createElement('option');
  otherOption.value = 'other';
  otherOption.textContent = 'Other';
  deviceTypeSelect.appendChild(otherOption);

  // Create a Remove button
  const removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.className = 'remove-phone-btn';
  removeButton.textContent = "−";
  removeButton.addEventListener("click", function() {
    removeAttorneyPhoneField(this);
  });

  // Append elements to the phoneFieldGroup
  phoneFieldGroup.appendChild(phoneInputLabel);
  phoneFieldGroup.appendChild(phoneInput);
  phoneFieldGroup.appendChild(deviceTypeSelect);
  phoneFieldGroup.appendChild(removeButton);

  // Append phoneFieldGroup to container
  phoneFieldsContainer.appendChild(phoneFieldGroup);

  // Update remove buttons visibility
  updateAttorneyRemoveButtonsVisibility();
}

/**
 * Removes a specific phone field group for Attorney.
 * @param {HTMLElement} button - The remove button that was clicked.
 */
function removeAttorneyPhoneField(button) {
  const phoneFieldGroup = button.parentElement;
  const phoneFieldsContainer = document.getElementById('attorneyPhoneFieldsContainer');
  phoneFieldsContainer.removeChild(phoneFieldGroup);

  // Update remove buttons visibility after removal
  updateAttorneyRemoveButtonsVisibility();
}

/**
 * Updates the visibility of remove buttons for Attorney phone fields.
 * Only show remove buttons if there's more than one phone field.
 */
function updateAttorneyRemoveButtonsVisibility() {
  const phoneFields = document.querySelectorAll('#attorneyPhoneFieldsContainer .phone-field-group');
  const removeButtons = document.querySelectorAll('#attorneyPhoneFieldsContainer .remove-phone-btn');

  if (phoneFields.length > 1) {
    removeButtons.forEach(btn => {
      btn.style.display = 'inline-block';
    });
  } else {
    removeButtons.forEach(btn => {
      btn.style.display = 'none';
    });
  }
}

/**********************************************
 * INITIALIZATION ON DOM CONTENT LOADED
 **********************************************/
document.addEventListener("DOMContentLoaded", function() {
  // Attach event listeners to existing phone fields
  const phoneFields = document.querySelectorAll('.phoneField');
  phoneFields.forEach(function(field) {
    field.addEventListener("input", handlePhoneFieldInput);
  });

  // Initialize Remove Buttons visibility
  updateAttorneyRemoveButtonsVisibility();
});

/**********************************************
 * INITIALIZE ATTORNEY SECTION ON PAGE LOAD
 **********************************************/
window.onload = function() {
  // Initialize Attorney Section
  toggleAttorneyContainer();
  updateToggleLabel(
    'attorneyToggle',
    'attorneyLabel',
    'ATTORNEY INFORMATION',
    'None'
  );

  // Initialize Remove Buttons visibility
  updateAttorneyRemoveButtonsVisibility();

  // If you have other sections (Alias, ID Marks, Holds, etc.), initialize them here
  // Example:
  // toggleAliasSection();
  // updateToggleLabel('aliasToggle','aliasToggleLabel','HAS ALIAS','NO ALIAS');
};


/**
 * Shows or hides the custom domain input based on the selected domain.
 */
function toggleSpouseCustomDomain() {
  const domainSelect = document.getElementById('spouseEmailDomain');
  const customDomainInput = document.getElementById('spouseEmailCustomDomain');
  
  if (domainSelect.value === 'other') {
    customDomainInput.style.display = 'inline-block';
  } else {
    customDomainInput.style.display = 'none';
    customDomainInput.value = ''; // Clear the custom domain input
  }
}

// Attach the toggle function to the domain select onchange event
document.getElementById('spouseEmailDomain').addEventListener('change', toggleSpouseCustomDomain);


/**
 * Combines the username and domain to form the full email address for Defendant's Spouse.
 */
function updateSpouseEmail() {
  const username = document.getElementById("spouseEmailUser").value.trim();
  let domain = document.getElementById("spouseEmailDomain").value;
  
  // Check if 'Other' is selected and get the custom domain
  if (domain === 'other') {
    domain = document.getElementById("spouseEmailCustomDomain").value.trim();
  }
  
  // Validate that both username and domain are provided
  if (username && domain) {
    const combinedEmail = `${username}@${domain}`;
    document.getElementById("spouseFullEmailOutput").value = combinedEmail;
  } else {
    document.getElementById("spouseFullEmailOutput").value = "";
  }
}

/**
 * Event handler for all phone fields.
 * - Reads the raw input.
 * - Applies the formatting.
 * - Updates the field’s value.
 * @param {Event} event - The input event triggered on the phone field.
 */
function handlePhoneFieldInput(event) {
  const inputField = event.target;
  inputField.value = formatPhoneNumber(inputField.value);
}

/**********************************************
 * 2) TOGGLE LABEL HELPER FUNCTION
 **********************************************/

/**
 * Dynamically changes label based on checked state.
 * @param {string} toggleId - The ID of the toggle input.
 * @param {string} labelId - The ID of the label to update.
 * @param {string} onText - The text to display when toggle is ON.
 * @param {string} offText - The text to display when toggle is OFF.
 */
function updateToggleLabel(toggleId, labelId, onText, offText) {
  const toggleEl = document.getElementById(toggleId);
  const labelEl  = document.getElementById(labelId);
  if (!toggleEl || !labelEl) return;
  labelEl.textContent = toggleEl.checked ? onText : offText;
}

/**********************************************
 * 3) DEFENDANT'S SPOUSE EMAIL FUNCTIONS
 **********************************************/

/**
 * Combines the username and domain to form the full email address for Defendant's Spouse.
 */
function updateSpouseEmail() {
  const username = document.getElementById("spouseEmailUser").value.trim();
  let domain = document.getElementById("spouseEmailDomain").value;
  
  // Check if 'Other' is selected and get the custom domain
  if (domain === 'other') {
    domain = document.getElementById("spouseEmailCustomDomain").value.trim();
  }
  
  // Validate that both username and domain are provided
  if (username && domain) {
    const combinedEmail = `${username}@${domain}`;
    document.getElementById("spouseFullEmailOutput").value = combinedEmail;
  } else {
    document.getElementById("spouseFullEmailOutput").value = "";
  }
}

/**
 * Shows or hides the custom domain input based on the selected domain.
 */
function toggleSpouseCustomDomain() {
  const domainSelect = document.getElementById('spouseEmailDomain');
  const customDomainInput = document.getElementById('spouseEmailCustomDomain');
  
  if (domainSelect.value === 'other') {
    customDomainInput.style.display = 'inline-block';
  } else {
    customDomainInput.style.display = 'none';
    customDomainInput.value = ''; // Clear the custom domain input
    // Also, trigger email update to remove any invalid domain
    updateSpouseEmail();
  }
}

/**********************************************
 * 4) INITIALIZATION ON DOM CONTENT LOADED
 **********************************************/

document.addEventListener("DOMContentLoaded", function() {
  // Attach event listeners to existing phone fields
  const phoneFields = document.querySelectorAll('.phoneField');
  phoneFields.forEach(function(field) {
    field.addEventListener("input", handlePhoneFieldInput);
  });

  // Initialize Remove Buttons visibility for other phone sections if any
  // Example:
  // updateRemoveButtonsVisibility();

  // Initialize Marital Status Section if implemented
  // Example:
  // toggleMaritalStatusContainer();
  // updateToggleLabel('maritalStatusToggle', 'maritalStatusLabel', 'MARRIED', 'SINGLE / DIVORCED / WIDOWED');
});

/**********************************************
 * 5) INITIALIZE SPOUSE EMAIL CUSTOM DOMAIN TOGGLE
 **********************************************/

// Attach the toggle function to the domain select onchange event
document.getElementById('spouseEmailDomain').addEventListener('change', toggleSpouseCustomDomain);

/**********************************************
 * 6) OPTIONAL: Initialize Sections on Page Load
 **********************************************/

window.onload = function() {
  // Initialize any sections like Marital Status, Alias, etc.
  // Example:
  // toggleMaritalStatusContainer();
  // updateToggleLabel('maritalStatusToggle', 'maritalStatusLabel', 'MARRIED', 'SINGLE / DIVORCED / WIDOWED');
};

document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('dateInput');

  dateInput.addEventListener('change', () => {
      const selectedDate = new Date(dateInput.value);
      console.log(`Selected date: ${selectedDate.toDateString()}`);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const calculateAge = (dateInputId, ageDisplayId) => {
      const dateInput = document.getElementById(dateInputId);
      const ageDisplay = document.getElementById(ageDisplayId);

      dateInput.addEventListener('change', () => {
          const selectedDate = new Date(dateInput.value);
          const today = new Date();
          let age = today.getFullYear() - selectedDate.getFullYear();
          const monthDiff = today.getMonth() - selectedDate.getMonth();

          if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < selectedDate.getDate())) {
              age--;
          }

          ageDisplay.value = age >= 0 ? age : "-";
      });
  };

  calculateAge('cosDob', 'cosAgeDisplay');
  calculateAge('date-of-birth', 'age-display');
});

document.addEventListener('DOMContentLoaded', () => {
  const chargeSelect = document.getElementById('chargeSelect');
  const addChargeBtn = document.getElementById('addChargeBtn');
  const chargesTable = document.getElementById('chargesTable').querySelector('tbody');

  // Function to add a new charge row
  const addChargeRow = (charge) => {
      const row = document.createElement('tr');

      // Charge cell
      const chargeCell = document.createElement('td');
      chargeCell.textContent = charge;

      // Count cell
      const countCell = document.createElement('td');
      const countInput = document.createElement('input');
      countInput.type = 'number';
      countInput.value = 1;
      countInput.min = 1;
      countCell.appendChild(countInput);

      // Actions cell
      const actionsCell = document.createElement('td');
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';
      removeBtn.addEventListener('click', () => row.remove());
      actionsCell.appendChild(removeBtn);

      // Append cells to row
      row.appendChild(chargeCell);
      row.appendChild(countCell);
      row.appendChild(actionsCell);

      // Append row to table
      chargesTable.appendChild(row);
  };

  // Event listener for Add Charge button
  addChargeBtn.addEventListener('click', () => {
      const selectedCharge = chargeSelect.value.trim();

      if (selectedCharge) {
          addChargeRow(selectedCharge);
          chargeSelect.value = ''; // Reset input
      } else {
          alert('Please select or enter a charge.');
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  function formatDmvInput(inputElement) {
    inputElement.addEventListener('input', () => {
      let value = inputElement.value.replace(/-/g, ''); // Remove any existing dashes
      let formattedValue = '';

      for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 3 === 0) {
          formattedValue += '-'; // Add dash after every third character
        }
        formattedValue += value[i];
      }

      inputElement.value = formattedValue;
    });
  }

  // Apply the function to both DMV input fields
  const dmvInput = document.getElementById('dmv');
  const cosignerDmvInput = document.getElementById('cosDriversLic');

  if (dmvInput) formatDmvInput(dmvInput);
  if (cosignerDmvInput) formatDmvInput(cosignerDmvInput);
});



function openTab(tabId) {
  // Hide all tabs
  let tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => tab.classList.remove("active"));

  // Show the selected tab
  document.getElementById(tabId).classList.add("active");
}

// Optional: Set a default tab on page load
document.addEventListener("DOMContentLoaded", () => {
  openTab("defMainContainer"); // Show the first tab by default
});

document.addEventListener('DOMContentLoaded', () => {
  const chargeSelect = document.getElementById('chargeSelect');
  const addChargeBtn = document.getElementById('addChargeBtn');
  const chargesTable = document.getElementById('chargesTable').querySelector('tbody');

  // Function to check if charge already exists in the table
  const chargeExists = (charge) => {
      const rows = chargesTable.getElementsByTagName('tr');
      for (let row of rows) {
          if (row.cells[0].textContent === charge) {
              return row;
          }
      }
      return null;
  };

  // Function to add or update a charge row dynamically
  const addChargeRow = (charge) => {
      let existingRow = chargeExists(charge);

      if (existingRow) {
          // If the charge exists, increase the count
          const countInput = existingRow.cells[1].querySelector('input');
          countInput.value = parseInt(countInput.value) + 1;
      } else {
          // If the charge doesn't exist, add a new row
          const row = document.createElement('tr');

          // Charge cell
          const chargeCell = document.createElement('td');
          chargeCell.textContent = charge;

          // Count cell
          const countCell = document.createElement('td');
          const countInput = document.createElement('input');
          countInput.type = 'number';
          countInput.value = 1;
          countInput.min = 1;
          countCell.appendChild(countInput);

          // Actions cell
          const actionsCell = document.createElement('td');
          const removeBtn = document.createElement('button');
          removeBtn.textContent = 'Remove';
          removeBtn.className = 'remove-btn';
          removeBtn.addEventListener('click', () => row.remove());
          actionsCell.appendChild(removeBtn);

          // Append cells to row
          row.appendChild(chargeCell);
          row.appendChild(countCell);
          row.appendChild(actionsCell);

          // Append row to table
          chargesTable.appendChild(row);
      }
  };

  // Event listener for Add Charge button
  addChargeBtn.addEventListener('click', () => {
      const selectedCharge = chargeSelect.value.trim();

      if (selectedCharge) {
          addChargeRow(selectedCharge);
          chargeSelect.value = ''; // Reset input
      } else {
          alert('Please select or enter a charge.');
      }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const signatureCanvas = document.getElementById("signatureCanvas");
  const initialsCanvas = document.getElementById("initialsCanvas");
  const sigCtx = signatureCanvas.getContext("2d");
  const initCtx = initialsCanvas.getContext("2d");
  const clearSigBtn = document.getElementById("clearSignature");
  const saveSigBtn = document.getElementById("saveSignature");
  const clearInitBtn = document.getElementById("clearInitials");
  const saveInitBtn = document.getElementById("saveInitials");
  const savedSignature = document.getElementById("savedSignature");
  const savedInitials = document.getElementById("savedInitials");

  let drawing = false;

  function setupCanvas(canvas, ctx, clearBtn, saveBtn, storageKey, imageElement) {
      ctx.strokeStyle = "black"; 
      ctx.lineWidth = 2; 

      function getMousePos(canvas, e) {
          const rect = canvas.getBoundingClientRect();
          return {
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
          };
      }

      function startDrawing(e) {
          drawing = true;
          const pos = getMousePos(canvas, e);
          ctx.beginPath();
          ctx.moveTo(pos.x, pos.y);
      }

      function draw(e) {
          if (!drawing) return;
          const pos = getMousePos(canvas, e);
          ctx.lineTo(pos.x, pos.y);
          ctx.stroke();
      }

      function stopDrawing() {
          drawing = false;
          ctx.closePath();
      }

      canvas.addEventListener("mousedown", startDrawing);
      canvas.addEventListener("mousemove", draw);
      canvas.addEventListener("mouseup", stopDrawing);
      canvas.addEventListener("mouseout", stopDrawing);

      canvas.addEventListener("touchstart", (e) => startDrawing(e.touches[0]));
      canvas.addEventListener("touchmove", (e) => {
          draw(e.touches[0]);
          e.preventDefault();
      });
      canvas.addEventListener("touchend", stopDrawing);

      clearBtn.addEventListener("click", () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
      });

      saveBtn.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent page jump
          const imageData = canvas.toDataURL("image/png");
          imageElement.src = imageData;
          imageElement.style.display = "block";
          localStorage.setItem(storageKey, imageData);
      });

      if (localStorage.getItem(storageKey)) {
          imageElement.src = localStorage.getItem(storageKey);
          imageElement.style.display = "block";
      }
  }

  setupCanvas(signatureCanvas, sigCtx, clearSigBtn, saveSigBtn, "savedSignature", savedSignature);
  setupCanvas(initialsCanvas, initCtx, clearInitBtn, saveInitBtn, "savedInitials", savedInitials);

  window.insertSignature = function(targetId) {
      const savedSignature = localStorage.getItem("savedSignature");
      if (savedSignature) {
          document.getElementById(targetId).src = savedSignature;
          document.getElementById(targetId).style.display = "block";
      } else {
          alert("No saved signature found. Please sign first.");
      }
  };

  window.insertInitials = function(targetId) {
      const savedInitials = localStorage.getItem("savedInitials");
      if (savedInitials) {
          document.getElementById(targetId).src = savedInitials;
          document.getElementById(targetId).style.display = "block";
      } else {
          alert("No saved initials found. Please initial first.");
      }
  };

  document.getElementById("date1").innerText = new Date().toLocaleDateString();
  document.getElementById("date3").innerText = new Date().toLocaleDateString();
});
document.addEventListener("DOMContentLoaded", () => {
  const confirmedEntries = new Set();

  function formatPhoneNumber(value) {
      let digits = value.replace(/\D/g, "");
      if (digits.length > 10) {
          digits = digits.slice(0, 10);
      }
      if (digits.length <= 3) {
          return digits;
      } else if (digits.length <= 6) {
          return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      } else {
          return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
      }
  }

  function handlePhoneInput(event) {
      const inputField = event.target;
      inputField.value = formatPhoneNumber(inputField.value);
  }

  function confirmEntry(event) {
      event.preventDefault(); // Prevent scrolling to top
      const button = event.target;
      const phoneInput = button.previousElementSibling;
      const lastNameInput = phoneInput.previousElementSibling;
      const firstNameInput = lastNameInput.previousElementSibling;
      
      const fullName = `${firstNameInput.value.trim()} ${lastNameInput.value.trim()}`;
      const formattedNumber = phoneInput.value;
      const nameKey = `${fullName}`;
      const numberKey = `${formattedNumber}`;

      if (confirmedEntries.has(nameKey) || confirmedEntries.has(numberKey)) {
          alert("This name or number has already been confirmed.");
      } else if (formattedNumber.length === 14 && firstNameInput.value.trim().length > 0 && lastNameInput.value.trim().length > 0) {
          confirmedEntries.add(nameKey);
          confirmedEntries.add(numberKey);
          firstNameInput.disabled = true;
          lastNameInput.disabled = true;
          phoneInput.disabled = true;
          button.disabled = true;
          button.nextElementSibling.disabled = false;
          alert("Entry confirmed successfully!");
      } else {
          alert("Please enter a valid name and 10-digit US phone number.");
      }
  }

  function editEntry(event) {
      event.preventDefault(); // Prevent scrolling to top
      const button = event.target;
      const confirmButton = button.previousElementSibling;
      const phoneInput = confirmButton.previousElementSibling;
      const lastNameInput = phoneInput.previousElementSibling;
      const firstNameInput = lastNameInput.previousElementSibling;
      
      const fullName = `${firstNameInput.value.trim()} ${lastNameInput.value.trim()}`;
      const formattedNumber = phoneInput.value;
      const nameKey = `${fullName}`;
      const numberKey = `${formattedNumber}`;

      confirmedEntries.delete(nameKey);
      confirmedEntries.delete(numberKey);
      firstNameInput.disabled = false;
      lastNameInput.disabled = false;
      phoneInput.disabled = false;
      confirmButton.disabled = false;
      button.disabled = true;
  }

  const container = document.getElementById("phoneContainer");
  for (let i = 0; i < 7; i++) {
      const div = document.createElement("div");
      div.classList.add("entry-group");

      const firstNameInput = document.createElement("input");
      firstNameInput.type = "text";
      firstNameInput.placeholder = "First Name";

      const lastNameInput = document.createElement("input");
      lastNameInput.type = "text";
      lastNameInput.placeholder = "Last Name";

      const phoneInput = document.createElement("input");
      phoneInput.type = "text";
      phoneInput.placeholder = "(123) 456-7890";
      phoneInput.addEventListener("input", handlePhoneInput);

      const confirmButton = document.createElement("button");
      confirmButton.textContent = "Confirm";
      confirmButton.addEventListener("click", confirmEntry);

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.disabled = true;
      editButton.addEventListener("click", editEntry);

      div.appendChild(firstNameInput);
      div.appendChild(lastNameInput);
      div.appendChild(phoneInput);
      div.appendChild(confirmButton);
      div.appendChild(editButton);
      container.appendChild(div);
  }
});

document.getElementById("confirmApproval").addEventListener("click", function(event) {
  event.preventDefault(); // Prevents the default action of scrolling to top
  
  const approvalAgentSelect = document.getElementById("approvalAgent");
  const prospectStatusSelect = document.getElementById("prospectStatus");
  const updatedBySelect = document.getElementById("updatedBy");
  const confirmationMessage = document.getElementById("confirmationMessage");

  const approvalAgent = approvalAgentSelect.options[approvalAgentSelect.selectedIndex].text;
  const prospectStatus = prospectStatusSelect.options[prospectStatusSelect.selectedIndex].text;
  const updatedBy = updatedBySelect.options[updatedBySelect.selectedIndex].text;

  if (!approvalAgentSelect.value || !prospectStatusSelect.value || !updatedBySelect.value) {
      confirmationMessage.textContent = "Please select all fields before confirming.";
      confirmationMessage.classList.remove("hidden");
      confirmationMessage.style.color = "red";
      return;
  }

  const timestamp = new Date().toLocaleString();

  let statusColor = prospectStatus.toLowerCase() === "hot" ? "green" : "red";

  confirmationMessage.innerHTML = 
      ` <span class='status-black'> ${approvalAgent}</span>
       <span class='status-${statusColor}'>${prospectStatus}</span><br>
  <span class='status-black'>      ${timestamp}</span>    
      <span class='status-black'>  ${updatedBy} </span>
  `
  confirmationMessage.classList.remove("hidden");
});



function openTab(tabId) {
    // Hide all tabs
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.add("hidden"));

    // Show the selected tab
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) selectedTab.classList.remove("hidden");
}


function removeTab(event, contentId, buttonId) {
    event.stopPropagation(); // Prevent accidental tab switching

    const tabButton = document.getElementById(buttonId);
    const tabContent = document.getElementById(contentId);

    if (tabButton) tabButton.remove();
    if (tabContent) tabContent.remove();
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('input', function () {
            let name = this.name;
            let value = this.value;
            document.querySelectorAll(`[name="${name}"]`).forEach(el => {
                if (el !== this) {
                    el.value = value;
                }
            });
        });
    });
});

function addProspectContinue() {
    alert("Prospect added, continuing...");
}

function addProspectClose() {
    alert("Prospect added, closing...");
}

function cancelProspect() {
    alert("Prospect addition canceled.");
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-tabs a').forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
              const header = document.querySelector('.sticky-header');
              const headerOffset = header ? header.offsetHeight : 0;
              const offsetPosition = targetElement.offsetTop - headerOffset;

              window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
              });

              document.querySelectorAll('.nav-tabs a').forEach(nav => {
                  nav.classList.remove('active');
              });
              this.classList.add('active');
          }
      });
  });

  // Automatically highlight the current section when scrolling
  const sections = document.querySelectorAll('.section');
  window.addEventListener('scroll', () => {
      let currentSection = "";
      const scrollPosition = window.scrollY + (document.querySelector('.sticky-header')?.offsetHeight || 0) + 20;

      sections.forEach(section => {
          if (section.offsetTop <= scrollPosition) {
              currentSection = section.id;
          }
      });

      document.querySelectorAll('.nav-tabs a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === currentSection) {
              link.classList.add('active');
          }
      });
  });

  // Add confirm and edit buttons inside each section
  document.querySelectorAll('.header-bar').forEach(section => {
      const confirmButton = document.createElement('button');
      confirmButton.textContent = 'Confirm';
      confirmButton.classList.add('confirm-button');
      confirmButton.addEventListener('click', () => {
          section.nextElementSibling.querySelectorAll('input, select, textarea').forEach(field => {
              field.setAttribute('disabled', 'true');
          });
      });

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-button');
      editButton.addEventListener('click', () => {
          section.nextElementSibling.querySelectorAll('input, select, textarea').forEach(field => {
              field.removeAttribute('disabled');
          });
      });

      section.appendChild(confirmButton);
      section.appendChild(editButton);
  });
});


function toggleInputs(sectionClass, disable) {
  document.querySelectorAll(`.${sectionClass} input`).forEach(input => {
      input.disabled = disable;
  });
}

function toggleInputs(sectionClass, disable) {
  document.querySelectorAll(`.${sectionClass} input, .${sectionClass} select`).forEach(element => {
      element.disabled = disable;
  });
}

function toggleInputs(sectionClass, disable) {
  document.querySelectorAll(`.${sectionClass} select`).forEach(element => {
      element.disabled = disable;
  });
}

function toggleInputs(sectionClass, disable) {
  document.querySelectorAll(`.${sectionClass} input, .${sectionClass} select`).forEach(element => {
      element.disabled = disable;
  });
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-tabs a').forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
              const header = document.querySelector('.sticky-header');
              const headerOffset = header ? header.offsetHeight : 0;
              const offsetPosition = targetElement.offsetTop - headerOffset;

              window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
              });

              document.querySelectorAll('.nav-tabs a').forEach(nav => {
                  nav.classList.remove('active');
              });
              this.classList.add('active');
          }
      });
  });

  // Automatically highlight the current section when scrolling
  const sections = document.querySelectorAll('.section');
  window.addEventListener('scroll', () => {
      let currentSection = "";
      const scrollPosition = window.scrollY + (document.querySelector('.sticky-header')?.offsetHeight || 0) + 20;

      sections.forEach(section => {
          if (section.offsetTop <= scrollPosition) {
              currentSection = section.id;
          }
      });

      document.querySelectorAll('.nav-tabs a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === currentSection) {
              link.classList.add('active');
          }
      });
  });

  // Add confirm and edit buttons inside each section
  document.querySelectorAll('.header-bar').forEach(section => {
      const confirmButton = document.createElement('button');
      confirmButton.textContent = 'Confirm';
      confirmButton.classList.add('confirm-button');
      confirmButton.addEventListener('click', () => {
          section.nextElementSibling.querySelectorAll('input, select, textarea').forEach(field => {
              field.setAttribute('disabled', 'true');
          });
      });

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-button');
      editButton.addEventListener('click', () => {
          section.nextElementSibling.querySelectorAll('input, select, textarea').forEach(field => {
              field.removeAttribute('disabled');
          });
      });

      section.appendChild(confirmButton);
      section.appendChild(editButton);
  });

  // Update Prospect Button - Improved User Confirmation
  document.getElementById('update-prospect').addEventListener('click', function() {
      const confirmationBox = document.createElement('div');
      confirmationBox.classList.add('confirmation-box');
      confirmationBox.innerHTML = `
          <div class="confirmation-content">
              <h3>Confirm Update</h3>
              <p>Are you sure you want to update this prospect?</p>
              <button id="confirm-update">Yes, Update</button>
              <button id="cancel-update">Cancel</button>
          </div>
      `;
      document.body.appendChild(confirmationBox);

      document.getElementById('confirm-update').addEventListener('click', function() {
          document.body.removeChild(confirmationBox);
          showSuccessAlert();
      });

      document.getElementById('cancel-update').addEventListener('click', function() {
          document.body.removeChild(confirmationBox);
      });
  });

  function showSuccessAlert() {
      const alertBox = document.createElement('div');
      alertBox.classList.add('success-alert');
      alertBox.textContent = 'Prospect updated successfully!';
      document.body.appendChild(alertBox);
      setTimeout(() => {
          alertBox.remove();
      }, 3000);
  }
});
