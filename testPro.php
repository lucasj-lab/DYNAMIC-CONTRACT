<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Rewritten Code Example</title>
  <style>
    /* Minimal styling for demonstration. Adjust to fit your design needs */
    .container {
      border: 1px solid #CCC;
      padding: 10px;
      margin: 10px 0;
    }
    .card {
      border: 1px solid #AAA;
      padding: 10px;
      margin: 10px 0;
    }
    .card-content {
      padding: 5px;
    }
    .input-group {
      margin: 5px 0;
    }
    label {
      display: block;
      margin-bottom: 4px;
      font-weight: bold;
    }
    input[type="text"],
    input[type="date"],
    select {
      padding: 5px;
      width: 100%;
      box-sizing: border-box;
    }
    .phone-field-group {
      margin: 10px 0;
    }
    .remove-phone-button {
      margin-top: 5px;
      background-color: red;
      color: white;
      border: none;
      cursor: pointer;
      padding: 5px 10px;
    }
    .remove-phone-button:hover {
      background-color: darkred;
    }
  </style>
</head>
<body>

<div id="defendant-section"></div>

<!-- Example navigation buttons (optional) -->
<div class="section-buttons">
  <button data-target="defendant-section">Defendant</button>
  <button data-target="contact-info">Contact</button>
  <button data-target="employment-info">Employment</button>
</div>

<div class="container-wrapper active" id="defendant-section-wrapper">
  <!-- This is just a container-wrapper for demonstration; 
       your code appends sections inside #defendant-section programmatically. -->
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {

    /**
     * Helper to create a labeled input group or datalist input group.
     * @param {string} labelText - the label text
     * @param {object} inputConfig - config for the input (id, name, placeholder, type, options, hidden)
     * @returns {HTMLDivElement} the wrapper .input-group div containing label + input/datalist
     */
    function createInputGroup(labelText, inputConfig) {
      const inputGroup = document.createElement("div");
      inputGroup.className = "input-group";

      // Create and append label
      const labelElement = document.createElement("label");
      labelElement.setAttribute("for", inputConfig.id);
      labelElement.textContent = labelText;
      inputGroup.appendChild(labelElement);

      let inputElement;

      if (inputConfig.type === "datalist") {
        // Create a text input that uses a <datalist>
        inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.id = inputConfig.id;
        inputElement.name = inputConfig.name;
        inputElement.placeholder = inputConfig.placeholder || "";

        // Create the datalist element
        const dataListElement = document.createElement("datalist");
        dataListElement.id = `${inputConfig.id}-options`;

        // Link the <input> to its <datalist> by "list" attribute
        inputElement.setAttribute("list", dataListElement.id);

        // Populate <option> elements
        (inputConfig.options || []).forEach(optionValue => {
          const optionElem = document.createElement("option");
          optionElem.value = optionValue;
          dataListElement.appendChild(optionElem);
        });

        // Append input + datalist to the group
        inputGroup.appendChild(inputElement);
        inputGroup.appendChild(dataListElement);

      } else {
        // Normal <input> (text, date, etc.)
        inputElement = document.createElement("input");
        inputElement.type = inputConfig.type || "text";
        inputElement.id = inputConfig.id;
        inputElement.name = inputConfig.name;
        inputElement.placeholder = inputConfig.placeholder || "";

        inputGroup.appendChild(inputElement);
      }

      // If 'hidden: true' is specified, hide the input initially
      if (inputConfig.hidden) {
        inputElement.style.display = "none";
      }

      // For CSS or additional logic:
      if (inputConfig.className) {
        inputElement.classList.add(inputConfig.className);
      }

      if (inputConfig.pattern) {
        inputElement.setAttribute("pattern", inputConfig.pattern);
      }
      if (inputConfig.title) {
        inputElement.setAttribute("title", inputConfig.title);
      }

      return inputGroup;
    }

    /**
     * Creates a card-like div with optional title and list of inputs.
     * @param {string} title - the card's title
     * @param {array} inputs - array of input configs
     * @returns {HTMLDivElement} the .card element
     */
    function createCard(title, inputs) {
      const card = document.createElement("div");
      card.className = "card";

      if (title) {
        const cardTitle = document.createElement("h2");
        cardTitle.textContent = title;
        card.appendChild(cardTitle);
      }

      const cardContent = document.createElement("div");
      cardContent.className = "card-content";

      inputs.forEach((inputConfig) => {
        const inputGroup = createInputGroup(inputConfig.label, inputConfig);
        cardContent.appendChild(inputGroup);
      });

      card.appendChild(cardContent);
      return card;
    }

    /**
     * Creates a container with a heading, followed by multiple single-card sections (if desired).
     * @param {string} title - container heading
     * @param {string} containerId
     * @param {array} inputs - array of input configs
     * @returns {HTMLDivElement} the .container element
     */
    function createContainer(title, containerId, inputs) {
      const container = document.createElement("div");
      container.className = "container";
      container.id = containerId;

      // Container heading
      const containerTitle = document.createElement("h2");
      containerTitle.textContent = title;
      container.appendChild(containerTitle);

      // For each input, create a single card
      inputs.forEach((inputConfig) => {
        const singleCard = createCard("", [inputConfig]);
        container.appendChild(singleCard);
      });

      return container;
    }

    /**
     * Returns the license-format object for a given state. 
     * If not found, returns a default/unknown format object.
     */
    function getStateDriverLicenseFormat(state) {
      if (!state) {
        state = "Georgia"; // Default
      }
      const stateDriverLicenseFormats = {
        "Alabama": {
          placeholder: "XXX-XXX-XX",
          pattern: "\\d{1,8}",
          title: "1-8 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Alaska": {
          placeholder: "XXX-XXX-X",
          pattern: "\\d{1,7}",
          title: "1-7 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Arizona": {
          placeholder: "A-XXX-XXX-XX",
          pattern: "[A-Za-z]\\d{8}",
          title: "1 Alpha + 8 Numeric",
          formatFunction: (value) =>
            value.replace(/([A-Za-z])|(\\d{3})(?=\\d)/g,
              (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`)
        },
        "Arkansas": {
          placeholder: "XXX-XXX-XX",
          pattern: "\\d{1,8}",
          title: "1-8 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "California": {
          placeholder: "A-XXX-XXX-XX",
          pattern: "[A-Za-z]\\d{8}",
          title: "1 Alpha + 8 Numeric",
          formatFunction: (value) =>
            value.replace(/([A-Za-z])|(\\d{3})(?=\\d)/g,
              (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`)
        },
        "Colorado": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Connecticut": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Delaware": {
          placeholder: "XXX-XXX-X",
          pattern: "\\d{1,7}",
          title: "1-7 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "District of Columbia": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Florida": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Georgia": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Hawaii": {
          placeholder: "A-XXX-XXX-XX",
          pattern: "[A-Za-z]\\d{8}",
          title: "1 Alpha + 8 Numeric",
          formatFunction: (value) =>
            value.replace(/([A-Za-z])|(\\d{3})(?=\\d)/g,
              (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`)
        },
        "Idaho": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Illinois": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Indiana": {
          placeholder: "A-XXX-XXX-XXX",
          pattern: "[A-Za-z]\\d{9}",
          title: "1 Alpha + 9 Numeric",
          formatFunction: (value) =>
            value.replace(/([A-Za-z])|(\\d{3})(?=\\d)/g,
              (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`)
        },
        "Iowa": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Kansas": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Kentucky": {
          placeholder: "A-XXX-XXX-XXX",
          pattern: "[A-Za-z]\\d{9}",
          title: "1 Alpha + 9 Numeric",
          formatFunction: (value) =>
            value.replace(/([A-Za-z])|(\\d{3})(?=\\d)/g,
              (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`)
        },
        "Louisiana": {
          placeholder: "XXX-XXX-XX",
          pattern: "\\d{1,8}",
          title: "1-8 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Maine": {
          placeholder: "XXX-XXX-X",
          pattern: "\\d{7}",
          title: "7 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Maryland": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Massachusetts": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Michigan": {
          placeholder: "A-XXX-XXX-XXX-X",
          pattern: "[A-Za-z]\\d{10}",
          title: "1 Alpha + 10 Numeric",
          formatFunction: (value) =>
            value.replace(/([A-Za-z])|(\\d{3})(?=\\d)/g,
              (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`)
        },
        "Minnesota": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Mississippi": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Missouri": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Montana": {
          placeholder: "A-XXX-XXX-XX",
          pattern: "[A-Za-z]\\d{8}",
          title: "1 Alpha + 8 Numeric",
          formatFunction: (value) =>
            value.replace(/([A-Za-z])|(\\d{3})(?=\\d)/g,
              (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`)
        },
        "Nebraska": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Nevada": {
          placeholder: "X-XXX-XXX-XX",
          pattern: "[A-Za-z]\\d{8}",
          title: "X + 8 Numeric",
          formatFunction: (value) =>
            value.replace(/([A-Za-z])|(\\d{3})(?=\\d)/g,
              (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`)
        },
        "New Hampshire": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "New Jersey": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "New Mexico": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "New York": {
          placeholder: "A-XXX-XXX-X",
          pattern: "[A-Za-z]\\d{7}",
          title: "1 Alpha + 7 Numeric",
          formatFunction: (value) =>
            value.replace(/([A-Za-z])|(\\d{3})(?=\\d)/g,
              (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`)
        },
        "North Carolina": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "North Dakota": {
          placeholder: "AAA-XXX-XXX",
          pattern: "[A-Za-z]{3}\\d{6}",
          title: "3 Alpha + 6 Numeric",
          formatFunction: (value) =>
            value.replace(/([A-Za-z]{3})|(\\d{3})(?=\\d)/g,
              (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`)
        },
        "Ohio": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Oklahoma": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Oregon": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Pennsylvania": {
          placeholder: "XXX-XXX-XX",
          pattern: "\\d{8}",
          title: "8 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Rhode Island": {
          placeholder: "XXX-XXX-X",
          pattern: "\\d{7}",
          title: "7 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "South Carolina": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{5,11}",
          title: "5-11 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "South Dakota": {
          placeholder: "XXX-XXX-XXX-XXX",
          pattern: "\\d{12}",
          title: "12 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Tennessee": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Texas": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Utah": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Vermont": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Virginia": {
          placeholder: "A-XXX-XXX-XXX",
          pattern: "[A-Za-z]\\d{8,11}",
          title: "1 Alpha + 8-11 Numeric",
          formatFunction: (value) =>
            value.replace(/([A-Za-z])|(\\d{3})(?=\\d)/g,
              (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`)
        },
        "Washington": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "West Virginia": {
          placeholder: "XXX-XXX-X",
          pattern: "\\d{7}",
          title: "7 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "Wisconsin": {
          placeholder: "A-XXX-XXX-XXX-XXXX",
          pattern: "[A-Za-z]\\d{13}",
          title: "1 Alpha + 13 Numeric",
          formatFunction: (value) =>
            value.replace(/([A-Za-z])|(\\d{3})(?=\\d)/g,
              (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`)
        },
        "Wyoming": {
          placeholder: "XXX-XXX-XXX",
          pattern: "\\d{9}",
          title: "9 Numeric",
          formatFunction: (value) => value.replace(/(\\d{3})(?=\\d)/g, "$1-")
        },
        "UNKNOWN": {
          placeholder: "DRIVER'S LICENSE #",
          title: "Enter a valid driver's license based on the selected state"
        }
      };

      // Normalize the state input for case-insensitive matching
      const lowerState = state.toLowerCase();
      for (const [key, format] of Object.entries(stateDriverLicenseFormats)) {
        if (key.toLowerCase() === lowerState) {
          return format;
        }
      }
      return stateDriverLicenseFormats["UNKNOWN"];
    }

    /**
     * Formats a phone number as (XXX) XXX-XXXX.
     */
    function formatPhoneNumber(rawValue) {
      let digits = rawValue.replace(/\D/g, "");

      // Limit to 10 digits
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

    /**
     * Global input listener for phone fields
     */
    document.addEventListener("input", (event) => {
      if (event.target.classList.contains("phoneField")) {
        event.target.value = formatPhoneNumber(event.target.value);
      }
    });

    /**
     * Creates or updates the defendant section
     */
    function populateDefendantInformationSection() {
      const defendantSectionWrapper = document.getElementById("defendant-section");
      if (!defendantSectionWrapper) {
        console.error("Defendant section not found!");
        return;
      }
      // Clear existing content
      defendantSectionWrapper.innerHTML = "";

      /**************************************
       * 1) PERSONAL INFO + ADDITIONAL INFO
       **************************************/
      const personalInfoContainer = createContainer("Personal Info", "defendant-personal", [
        {
          label: "NAME",
          id: "defendantFirstName",
          name: "defendant[firstName]",
          placeholder: "FIRST",
          type: "text"
        },
        {
          label: "",
          id: "defendantMiddleName",
          name: "defendant[middleName]",
          placeholder: "MIDDLE",
          type: "text"
        },
        {
          label: "",
          id: "defendantLastName",
          name: "defendant[lastName]",
          placeholder: "LAST",
          type: "text"
        }
      ]);

      // A sub-card for DOB, SSN, etc.
      const additionalInfoCard = document.createElement("div");
      additionalInfoCard.className = "card";

      const additionalInfoCardContent = document.createElement("div");
      additionalInfoCardContent.className = "card-content";

      // Fields for DOB, SSN
      const additionalInfoInputs = [
        {
          label: "DOB:",
          id: "defendantDateOfBirth",
          name: "defendant[dateOfBirth]",
          placeholder: "MM/DD/YYYY",
          type: "date"
        },
        {
          label: "SSN#:",
          id: "defendantSocialSecurityNumberInput",
          name: "defendant[socialSecurityNumber]",
          placeholder: "XXX-XX-XXXX",
          type: "text",
          pattern: "\\d{3}-\\d{2}-\\d{4}",
          title: "SSN format: XXX-XX-XXXX"
        }
      ];
      additionalInfoInputs.forEach((inputConfig) => {
        const inputGroup = createInputGroup(inputConfig.label, inputConfig);
        additionalInfoCardContent.appendChild(inputGroup);
      });

      // State-based Driver's License
      const stateInputGroup = createInputGroup("", {
        id: "defendantStateDropdown",
        name: "defendant[state]",
        placeholder: "Select State",
        type: "datalist",
        options: [
          "Alabama (AL)", "Alaska (AK)", "Arizona (AZ)", "Arkansas (AR)", "California (CA)", "Colorado (CO)",
          "Connecticut (CT)", "Delaware (DE)", "Florida (FL)", "Georgia (GA)", "Hawaii (HI)", "Idaho (ID)",
          "Illinois (IL)", "Indiana (IN)", "Iowa (IA)", "Kansas (KS)", "Kentucky (KY)", "Louisiana (LA)",
          "Maine (ME)", "Maryland (MD)", "Massachusetts (MA)", "Michigan (MI)", "Minnesota (MN)", "Mississippi (MS)",
          "Missouri (MO)", "Montana (MT)", "Nebraska (NE)", "Nevada (NV)", "New Hampshire (NH)", "New Jersey (NJ)",
          "New Mexico (NM)", "New York (NY)", "North Carolina (NC)", "North Dakota (ND)", "Ohio (OH)", "Oklahoma (OK)",
          "Oregon (OR)", "Pennsylvania (PA)", "Rhode Island (RI)", "South Carolina (SC)", "South Dakota (SD)", "Tennessee (TN)",
          "Texas (TX)", "Utah (UT)", "Vermont (VT)", "Virginia (VA)", "Washington (WA)", "West Virginia (WV)",
          "Wisconsin (WI)", "Wyoming (WY)"
        ]
      });
      additionalInfoCardContent.appendChild(stateInputGroup);

      // Driver's License # input
      const driverLicenseNumberInputGroup = createInputGroup("DMV#:", {
        id: "driverLicenseNumberInputConfig",
        name: "defendant[dlNumber]",
        placeholder: "DMV#",
        type: "text",
        title: "Enter a valid driver's license based on the selected state"
      });
      additionalInfoCardContent.appendChild(driverLicenseNumberInputGroup);

      // Finalize additionalInfoCard
      additionalInfoCard.appendChild(additionalInfoCardContent);
      personalInfoContainer.appendChild(additionalInfoCard);

      // Append to the wrapper
      defendantSectionWrapper.appendChild(personalInfoContainer);

      // Attach state format logic
      const stateDropdownElement = document.getElementById("defendantStateDropdown");
      const driverLicenseNumberInput = document.getElementById("driverLicenseNumberInputConfig");
      if (stateDropdownElement && driverLicenseNumberInput) {
        stateDropdownElement.addEventListener("change", () => {
          const selectedState = stateDropdownElement.value.split(" (")[0];
          const stateFormat = getStateDriverLicenseFormat(selectedState) || {
            placeholder: "DRIVER'S LICENSE #",
            pattern: ".*"
          };
          driverLicenseNumberInput.placeholder = stateFormat.placeholder;
          driverLicenseNumberInput.setAttribute("pattern", stateFormat.pattern);
          driverLicenseNumberInput.title = stateFormat.title ||
            "Enter a valid driver's license based on the selected state";
        });

        driverLicenseNumberInput.addEventListener("input", (event) => {
          const selectedState = stateDropdownElement.value.split(" (")[0];
          const stateFormat = getStateDriverLicenseFormat(selectedState);
          if (stateFormat && stateFormat.formatFunction) {
            event.target.value = stateFormat.formatFunction(event.target.value);
          }
        });
      }

      /**************************************
       * 2) DESCRIPTION
       **************************************/
      const descriptionContainer = createContainer("Description", "defendant-description", [
        {
          label: "SEX:",
          id: "defendantSex",
          name: "defendant[sex]",
          placeholder: "SEX",
          type: "datalist",
          options: ["Male", "Female"]
        },
        {
          label: "RACE:",
          id: "defendantRace",
          name: "defendant[race]",
          placeholder: "RACE",
          type: "datalist",
          options: ["White", "Black", "Asian", "Hispanic", "Native American", "Other"]
        },
        {
          label: "HGT:",
          id: "defendantHeight",
          name: "defendant[height]",
          placeholder: "HGT",
          type: "datalist",
          options: [
            "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"",
            "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"", "6'6\"", "6'7\"", "6'8\"", "6'9\"", "6'10\"", "6'11\"", "7'0\""
          ]
        },
        {
          label: "WGT:",
          id: "defendantWeight",
          name: "defendant[weight]",
          placeholder: "WGT",
          type: "datalist",
          options: Array.from({ length: 301}, (_, i) => (i === 0 ? "" : `${i} lbs`))
        },
        {
          label: "HAIR:",
          id: "defendantHair",
          name: "defendant[hair]",
          placeholder: "HAIR",
          type: "datalist",
          options: ["Black", "Brown", "Blonde", "Red", "Gray", "Bald", "Other"]
        },
        {
          label: "EYES:",
          id: "defendantEyes",
          name: "defendant[eyes]",
          placeholder: "EYES",
          type: "datalist",
          options: ["Brown", "Blue", "Green", "Hazel", "Gray", "Other"]
        },
        {
          label: "ID Mark Description:",
          id: "defendantIdMarkDescription",
          name: "defendant[idMarkDescription]",
          placeholder: "Scars, Tattoos, etc.",
          type: "text"
        }
      ]);
      defendantSectionWrapper.appendChild(descriptionContainer);

      /********************************************
       *  CONTACT CONTAINER
       ********************************************/
      const contactInfoContainer = createContainer("Contact", "contact-info", [
        {
          label: "PHONE #:",
          id: "defendantPhoneInput",
          name: "phoneNumber[]",
          placeholder: "(XXX) XXX-XXXX",
          type: "text",
          pattern: "\\(\\d{3}\\) \\d{3}-\\d{4}",
          title: "Phone number format: (XXX) XXX-XXXX",
          className: "phoneField"
        },
        {
          label: "",
          id: "defendantDeviceTypeDefault",
          name: "deviceType[]",
          placeholder: "DEVICE TYPE",
          type: "datalist",
          options: ["Mobile", "Home", "Other"]
        },
        {
          label: "EMAIL:",
          id: "emailUser",
          name: "contact[emailUser]",
          placeholder: "USER",
          type: "text"
        }
      ]);

      // Container to hold dynamically added phone fields
      const phoneFieldsContainer = document.createElement("div");
      phoneFieldsContainer.id = "phoneFieldsContainer";

      // The "Add Phone" button
      const addPhoneButton = document.createElement("button");
      addPhoneButton.type = "button";
      addPhoneButton.textContent = "Add Phone";
      addPhoneButton.addEventListener("click", addPhoneField);

      // Append our newly created elements to the contact container
      contactInfoContainer.appendChild(phoneFieldsContainer);
      contactInfoContainer.appendChild(addPhoneButton);

      // Finally, append the entire contact container to your main wrapper
      defendantSectionWrapper.appendChild(contactInfoContainer);

      // Example of email combination logic if you need it:
      const emailUserInput = document.getElementById("emailUser");
      const emailDomainInput = document.getElementById("emailDomain");  // Possibly not in this code
      const fullEmailOutput = document.getElementById("fullEmailOutput");
      if (emailUserInput && emailDomainInput && fullEmailOutput) {
        function updateCombinedEmail() {
          const username = emailUserInput.value.trim();
          const domain = emailDomainInput.value.trim();
          fullEmailOutput.value = (username && domain) ? `${username}@${domain}` : "";
        }
        emailUserInput.addEventListener("input", updateCombinedEmail);
        emailDomainInput.addEventListener("change", updateCombinedEmail);
      }

      /**************************************
       * 4) RESIDENTIAL INFO
       **************************************/
      const residentialInfoCard = createCard("", [
        {
          label: "RESIDENCE:",
          id: "residenceType",
          name: "residential[type]",
          placeholder: "TYPE",
          type: "datalist",
          options: ["APT","HOUSE","CONDO","MOBILE HOME","TOWNHOUSE","DUPLEX","TRAILER","OTHER"]
        },
        {
          label: "RESIDENT:",
          id: "residentType",
          name: "residential[residentType]",
          placeholder: "TYPE",
          type: "datalist",
          options: ["OWN","RENT","W/PARENTS"]
        },
        {
          label: "LENGTH:",
          id: "residentialYears",
          name: "residential[years]",
          placeholder: "YEARS",
          type: "datalist",
          options: Array.from({ length: 26 }, (_, i) => (i === 25 ? "25 +" : `${i} YRS`))
        },
        {
          label: "LIVES WITH:",
          id: "defendantLivesWith",
          name: "residential[livesWith]",
          placeholder: "SELF",
          type: "datalist",
          options: [
            "Self","Roommate","Husband","Wife","Son","Daughter","Children","Girlfriend","Boyfriend",
            "Sibling","Grandparent","Grandchild","Aunt","Uncle","Cousin","Friends","Parents","Other"
          ]
        }
      ]);

      // Address card
      const addressCard = createCard("", [
        {
          label: "ADDRESS",
          id: "residentialStreet",
          name: "address[street]",
          placeholder: "STREET",
          type: "text"
        },
        {
          label: "",
          id: "apartmentNumber",
          name: "residential[apartmentNumber]",
          placeholder: "APT #",
          type: "text",
          hidden: true
        },
        {
          label: "",
          id: "residentialCity",
          name: "address[city]",
          placeholder: "CITY",
          type: "datalist",
          options: []
        },
        {
          label: "",
          id: "residentialState",
          name: "address[state]",
          placeholder: "STATE",
          type: "datalist",
          options: [
            "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID",
            "IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS",
            "MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK",
            "OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
          ]
        },
        {
          label: "",
          id: "residentialZipCode",
          name: "address[zipCode]",
          placeholder: "ZIP CODE",
          type: "text"
        }
      ]);

      // Wrap them in a container with a heading
      const residentialInfoContainer = document.createElement("div");
      residentialInfoContainer.className = "container";
      residentialInfoContainer.id = "residential-info";

      const containerTitle = document.createElement("h2");
      containerTitle.textContent = "Residential";
      residentialInfoContainer.appendChild(containerTitle);

      // Append the 2 cards
      residentialInfoContainer.appendChild(residentialInfoCard);
      residentialInfoContainer.appendChild(addressCard);

      // Finally, append to the wrapper
      defendantSectionWrapper.appendChild(residentialInfoContainer);

      // Optional Zip → City/State lookup (Google Geocoder)
      const zipInputField = document.getElementById("residentialZipCode");
      if (zipInputField) {
        zipInputField.addEventListener("blur", () => {
          const zipValue = zipInputField.value.trim();
          if (!zipValue) return;

          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ address: zipValue }, (results, status) => {
            if (status === "OK" && results && results.length > 0) {
              const place = results[0];
              let foundCity = "";
              let foundState = "";

              place.address_components.forEach(component => {
                const types = component.types;
                if (types.includes("locality")) {
                  foundCity = component.long_name;
                }
                if (types.includes("administrative_area_level_1")) {
                  foundState = component.short_name; // e.g., "CA"
                }
              });
              const cityField = document.getElementById("residentialCity");
              const stateField = document.getElementById("residentialState");
              if (cityField)  cityField.value  = foundCity;
              if (stateField) stateField.value = foundState;
            } else {
              console.warn("Geocoding for ZIP failed or no results:", status);
            }
          });
        });
      }

      /**************************************
       * VEHICLE SECTION
       **************************************/
      const vehicleInputs = [
        {
          label: "Vehicle Year",
          id: "vehicleYear",
          type: "datalist",
          placeholder: "Enter vehicle year",
          options: Array.from({ length: 15 }, (_, i) => String(2010 + i)) // 2010-2024
        },
        {
          label: "Make",
          id: "vehicleMake",
          type: "datalist",
          placeholder: "Enter vehicle make",
          options: [
            "Ford","Chevrolet","Tesla","BMW","Toyota","Honda","Nissan","Hyundai",
            "Mercedes-Benz","Audi","Volkswagen","Kia","Subaru","Mazda","Jeep",
            "Dodge","Lexus","Acura","Volvo","Porsche","Jaguar","Land Rover","Ferrari",
            "Lamborghini","Maserati","Bentley","Rolls-Royce","Aston Martin","Alfa Romeo",
            "Infiniti","Genesis","Cadillac","Buick","Chrysler","Lincoln","Fiat","Peugeot",
            "Citroën","Renault","Skoda","SEAT","Mini","Mitsubishi","Suzuki","Saab","Isuzu",
            "GMC","Ram","Bugatti","McLaren","Pagani","Koenigsegg","Rivian"
          ]
        },
        {
          label: "Model",
          id: "vehicleModel",
          type: "datalist",
          placeholder: "Enter vehicle model",
          options: []
        },
        {
          label: "Color",
          id: "vehicleColor",
          type: "datalist",
          placeholder: "Enter vehicle color",
          options: [
            "White","Black","Silver","Gray","Red","Blue","Green","Yellow","Orange",
            "Brown","Beige","Gold","Cream","Navy","Maroon","Wine","Burgundy","Magenta",
            "Pink","Turquoise","Teal","Lavender","Plum","Purple","Sand","Bronze","Copper",
            "Charcoal","Gunmetal","Lime","Mint","Pastel Blue","Pastel Green","Pastel Yellow",
            "Ivory","Pearl","Khaki","Champagne","Chocolate","Cobalt","Crimson","Midnight Blue",
            "Forest Green","Army Green","Brick Red","Desert Sand","Graphite","Titanium","Azure","Indigo"
          ]
        },
        {
          label: "Tag #",
          id: "vehicleTag",
          type: "text",
          placeholder: "License plate"
        }
      ];
      const vehicleSection = createContainer("Vehicle Information", "vehicle-section", vehicleInputs);
      defendantSectionWrapper.appendChild(vehicleSection);

      // Car data (for dynamic model population)
      const carInformation = {
        "Ford": ["Focus", "Mustang", "F-150", "Explorer", "Escape"],
        "Chevrolet": ["Malibu", "Camaro", "Silverado", "Tahoe", "Suburban"],
        "Tesla": ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck"],
        "BMW": ["3 Series", "5 Series", "7 Series", "X5", "i8"],
        "Toyota": ["Corolla", "Camry", "RAV4", "Highlander", "Tacoma"],
        "Honda": ["Civic", "Accord", "CR-V", "Pilot", "Fit"],
        "Nissan": ["Altima", "Sentra", "Rogue", "Murano", "Frontier"],
        "Hyundai": ["Elantra", "Sonata", "Tucson", "Santa Fe", "Kona"],
        "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "GLC", "GLE"],
        "Audi": ["A3", "A4", "A6", "Q5", "Q7"],
        "Volkswagen": ["Jetta", "Passat", "Tiguan", "Atlas", "Golf"],
        "Kia": ["Soul", "Sportage", "Sorento", "Telluride", "Optima"],
        "Subaru": ["Impreza", "Outback", "Forester", "Crosstrek", "Legacy"],
        "Mazda": ["Mazda3", "Mazda6", "CX-5", "CX-9", "MX-5 Miata"],
        "Jeep": ["Wrangler", "Grand Cherokee", "Cherokee", "Renegade", "Compass"],
        "Dodge": ["Charger", "Challenger", "Durango", "Ram 1500", "Journey"],
        "Lexus": ["IS", "ES", "RX", "NX", "GX"],
        "Acura": ["ILX", "TLX", "RDX", "MDX", "NSX"],
        "Volvo": ["S60", "S90", "XC60", "XC90", "V60"],
        "Porsche": ["911", "Cayenne", "Macan", "Panamera", "Taycan"],
        "Jaguar": ["XE", "XF", "XJ", "F-Pace", "I-Pace"],
        "Land Rover": ["Range Rover", "Discovery", "Defender", "Evoque", "Velar"],
        "Ferrari": ["488", "Portofino", "Roma", "F8 Tributo", "SF90 Stradale"],
        "Lamborghini": ["Huracán", "Aventador", "Urus", "Sian", "Gallardo"],
        "Maserati": ["Ghibli", "Quattroporte", "Levante", "GranTurismo", "MC20"],
        "Bentley": ["Continental GT", "Flying Spur", "Bentayga", "Mulsanne", "Azure"],
        "Rolls-Royce": ["Phantom", "Ghost", "Wraith", "Dawn", "Cullinan"],
        "Aston Martin": ["Vantage", "DB11", "DBS", "Rapide", "Valhalla"],
        "Alfa Romeo": ["Giulia", "Stelvio", "4C", "Tonale", "GTV"],
        "Infiniti": ["Q50", "Q60", "QX50", "QX60", "QX80"],
        "Genesis": ["G70", "G80", "G90", "GV70", "GV80"],
        "Cadillac": ["CT4", "CT5", "XT5", "XT6", "Escalade"],
        "Buick": ["Encore", "Enclave", "Envision", "Regal", "LaCrosse"],
        "Chrysler": ["300", "Pacifica", "Voyager", "Aspen", "Sebring"],
        "Lincoln": ["MKZ", "Nautilus", "Aviator", "Navigator", "Corsair"],
        "Fiat": ["500", "500X", "500L", "Panda", "Tipo"],
        "Peugeot": ["208", "308", "3008", "5008", "508"],
        "Citroën": ["C3", "C4", "C5 Aircross", "Berlingo", "DS3"],
        "Renault": ["Clio", "Megane", "Captur", "Kadjar", "Talisman"],
        "Skoda": ["Fabia", "Octavia", "Superb", "Kodiaq", "Karoq"],
        "SEAT": ["Ibiza", "Leon", "Ateca", "Arona", "Tarraco"],
        "Mini": ["Cooper", "Countryman", "Clubman", "Paceman", "Convertible"],
        "Mitsubishi": ["Lancer", "Outlander", "Eclipse Cross", "Pajero", "Mirage"],
        "Suzuki": ["Swift", "Vitara", "Baleno", "Jimny", "S-Cross"],
        "Saab": ["9-3", "9-5", "900", "9000", "9-4X"],
        "Isuzu": ["D-Max", "MU-X", "Trooper", "Rodeo", "Axiom"],
        "GMC": ["Sierra", "Yukon", "Acadia", "Canyon", "Terrain"],
        "Ram": ["1500", "2500", "3500", "ProMaster", "ProMaster City"],
        "Bugatti": ["Veyron", "Chiron", "Divo", "Centodieci", "Bolide"],
        "McLaren": ["570S", "720S", "GT", "Senna", "Artura"],
        "Pagani": ["Zonda", "Huayra", "Imola", "Utopia", "C10"],
        "Koenigsegg": ["Agera", "Regera", "Jesko", "Gemera", "CCX"],
        "Rivian": ["R1T", "R1S"]
      };

      // Listen for changes in "vehicleMake"
      const vehicleMakeInputElement = document.getElementById("vehicleMake");
      if (vehicleMakeInputElement) {
        vehicleMakeInputElement.addEventListener("input", () => {
          const makeValue = vehicleMakeInputElement.value.trim();
          const modelDatalist = document.getElementById("vehicleModel-options");
          if (!modelDatalist) return;

          modelDatalist.innerHTML = "";
          if (carInformation[makeValue]) {
            carInformation[makeValue].forEach(model => {
              const optionElement = document.createElement("option");
              optionElement.value = model;
              modelDatalist.appendChild(optionElement);
            });
          }
        });
      }

      /**************************************
       *  EMPLOYMENT INFO
       **************************************/
      const employmentInfoContainer = createContainer("Employment Info", "employment-info", [
        {
          label: "Employer:",
          id: "currentEmployer",
          name: "employment[currentEmployer]",
          placeholder: "Company Name",
          type: "text"
        },
        {
          label: "City:",
          id: "employerCity",
          name: "employment[employerCity]",
          placeholder: "City",
          type: "text"
        },
        {
          label: "State:",
          id: "employerState",
          name: "employment[employerState]",
          placeholder: "State",
          type: "datalist",
          options: [
            "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
            "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
            "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
            "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
            "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
          ]
        },
        {
          label: "Phone #:",
          id: "employerPhone",
          name: "employment[employerPhone]",
          placeholder: "(XXX) XXX-XXXX",
          type: "text"
        }
      ]);
      defendantSectionWrapper.appendChild(employmentInfoContainer);

      /**************************************
       *  PREVIOUS EMPLOYMENT INFO
       **************************************/
      const previousEmploymentContainer = createContainer("Previous Employment", "previous-employment", [
        {
          label: "Employer:",
          id: "previousEmployer",
          name: "employment[prevEmployer]",
          placeholder: "Previous Company",
          type: "text"
        },
        {
          label: "City:",
          id: "previousEmployerCityName",
          name: "employment[prevEmployerCity]",
          placeholder: "City",
          type: "text"
        },
        {
          label: "State:",
          id: "previousEmployerStateName",
          name: "employment[prevEmployerState]",
          placeholder: "State",
          type: "datalist",
          options: [
            "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
            "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
            "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
            "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
            "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
          ]
        },
        {
          label: "End Date:",
          id: "previousEmployerEndDate",
          name: "employment[prevEmployerEndDate]",
          placeholder: "MM/DD/YYYY",
          type: "date"
        }
      ]);
      defendantSectionWrapper.appendChild(previousEmploymentContainer);

      /**************************************
       *  PRIOR ARREST
       **************************************/
      const priorArrestContainer = createContainer("Prior Arrest", "prior-arrest", [
        {
          label: "Was there a previous arrest?",
          id: "previousArrestYesOrNo",
          name: "arrest[yesNo]",
          placeholder: "Yes or No",
          type: "datalist",
          options: ["Yes","No"]
        },
        {
          label: "County:",
          id: "previousArrestCounty",
          name: "arrest[county]",
          placeholder: "County",
          type: "text"
        },
        {
          label: "Month of Arrest:",
          id: "arrestMonth",
          name: "arrest[month]",
          placeholder: "Select Month",
          type: "datalist",
          options: [
            "January","February","March","April","May","June",
            "July","August","September","October","November","December"
          ]
        },
        {
          label: "Year of Arrest:",
          id: "arrestYear",
          name: "arrest[year]",
          placeholder: "YYYY",
          type: "text"
        },
        {
          label: "Bonding Company:",
          id: "bondingCompany",
          name: "arrest[bondingCompany]",
          placeholder: "Name of Company",
          type: "text"
        },
        {
          label: "Co-Defendant(s):",
          id: "coDefendantList",
          name: "arrest[coDefendants]",
          placeholder: "List co-defendants if any",
          type: "text"
        },
        {
          label: "Co-Defendant's Bonding Company:",
          id: "coDefendantBondingCompany",
          name: "arrest[coDefendantBondingCompany]",
          placeholder: "Bonding Co. for Co-Defendant",
          type: "text"
        },
        {
          label: "On Probation?",
          id: "probationYesOrNo",
          name: "arrest[probationYesNo]",
          placeholder: "Yes or No",
          type: "datalist",
          options: ["Yes", "No"]
        },
        {
          label: "Probation County:",
          id: "probationCounty",
          name: "arrest[probationCounty]",
          placeholder: "County",
          type: "text"
        },
        {
          label: "Probation Officer Name:",
          id: "probationOfficerName",
          name: "arrest[probationOfficerName]",
          placeholder: "Probation/Parole Officer",
          type: "text"
        }
      ]);
      defendantSectionWrapper.appendChild(priorArrestContainer);

      /**************************************
       * DEFENDANT SPOUSE SECTION
       **************************************/
      const spouseContainer = createContainer("Defendant Spouse", "defendant-spouse", [
        {
          label: "First Name:",
          id: "spouseFirstName",
          name: "spouse[firstName]",
          placeholder: "FIRST",
          type: "text"
        },
        {
          label: "Middle Name:",
          id: "spouseMiddleName",
          name: "spouse[middleName]",
          placeholder: "MIDDLE",
          type: "text"
        },
        {
          label: "Last Name:",
          id: "spouseLastName",
          name: "spouse[lastName]",
          placeholder: "LAST",
          type: "text"
        },
        {
          label: "Address:",
          id: "spouseStreet",
          name: "spouse[street]",
          placeholder: "STREET",
          type: "text"
        },
        {
          label: "",
          id: "spouseCity",
          name: "spouse[city]",
          placeholder: "CITY",
          type: "text"
        },
        {
          label: "",
          id: "spouseState",
          name: "spouse[state]",
          placeholder: "STATE",
          type: "datalist",
          options: [
            "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID",
            "IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS",
            "MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK",
            "OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV",
            "WI","WY"
          ]
        },
        {
          label: "",
          id: "spouseZip",
          name: "spouse[zip]",
          placeholder: "ZIP CODE",
          type: "text"
        },
        {
          label: "Phone #:",
          id: "spousePhone",
          name: "spouse[phone]",
          placeholder: "(XXX) XXX-XXXX",
          type: "text"
        },
        {
          label: "Email:",
          id: "spouseEmail",
          name: "spouse[email]",
          placeholder: "username@example.com",
          type: "text"
        },
        {
          label: "SSN#:",
          id: "spouseSocialSecurityNumber",
          name: "spouse[ssn]",
          placeholder: "XXX-XX-XXXX",
          type: "text"
        },
        {
          label: "DL#:",
          id: "spouseDriverLicenseNumber",
          name: "spouse[dlNumber]",
          placeholder: "DRIVER'S LICENSE #",
          type: "text"
        },
        {
          label: "Vehicle Year:",
          id: "spouseVehicleYear",
          name: "spouse[vehicleYear]",
          placeholder: "2010 ... 2025",
          type: "datalist",
          options: Array.from({ length: 16 }, (_, i) => String(2010 + i))
        },
        {
          label: "Vehicle Make:",
          id: "spouseVehicleMake",
          name: "spouse[vehicleMake]",
          placeholder: "Make",
          type: "text"
        },
        {
          label: "Vehicle Model:",
          id: "spouseVehicleModel",
          name: "spouse[vehicleModel]",
          placeholder: "Model",
          type: "text"
        }
      ]);
      defendantSectionWrapper.appendChild(spouseContainer);

      /**************************************
       * FATHER CONTAINER
       **************************************/
      const fatherContainer = createContainer("Father", "father-container", [
        {
          label: "First Name:",
          id: "fatherFirstName",
          name: "Father[firstName]",
          placeholder: "FIRST",
          type: "text"
        },
        {
          label: "Middle Name:",
          id: "fatherMiddleName",
          name: "Father[middleName]",
          placeholder: "MIDDLE",
          type: "text"
        },
        {
          label: "Last Name:",
          id: "fatherLastName",
          name: "Father[lastName]",
          placeholder: "LAST",
          type: "text"
        },
        {
          label: "City:",
          id: "fatherCity",
          name: "Father[city]",
          placeholder: "CITY",
          type: "text"
        },
        {
          label: "State:",
          id: "fatherState",
          name: "Father[state]",
          placeholder: "STATE",
          type: "datalist",
          options: [
            "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID",
            "IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS",
            "MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK",
            "OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV",
            "WI","WY"
          ]
        },
        {
          label: "Phone #:",
          id: "fatherPhone",
          name: "Father[phone]",
          placeholder: "(XXX) XXX-XXXX",
          type: "text"
        }
      ]);
      defendantSectionWrapper.appendChild(fatherContainer);

      /**************************************
       * MOTHER CONTAINER
       **************************************/
      const motherContainer = createContainer("mother", "mother-container", [
        {
          label: "First Name:",
          id: "motherFirstName",
          name: "mother[firstName]",
          placeholder: "FIRST",
          type: "text"
        },
        {
          label: "Middle Name:",
          id: "motherMiddleName",
          name: "mother[middleName]",
          placeholder: "MIDDLE",
          type: "text"
        },
        {
          label: "Last Name:",
          id: "motherLastName",
          name: "mother[lastName]",
          placeholder: "LAST",
          type: "text"
        },
        {
          label: "City:",
          id: "motherCity",
          name: "mother[city]",
          placeholder: "CITY",
          type: "text"
        },
        {
          label: "State:",
          id: "motherState",
          name: "mother[state]",
          placeholder: "STATE",
          type: "datalist",
          options: [
            "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID",
            "IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS",
            "MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK",
            "OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV",
            "WI","WY"
          ]
        },
        {
          label: "Phone #:",
          id: "motherPhone",
          name: "mother[phone]",
          placeholder: "(XXX) XXX-XXXX",
          type: "text"
        }
      ]);
      defendantSectionWrapper.appendChild(motherContainer);

      /**************************************
       * REFERENCES CONTAINER (3 references)
       **************************************/
      const referencesContainer = document.createElement("div");
      referencesContainer.className = "container";
      referencesContainer.id = "references-container";

      const referencesTitle = document.createElement("h2");
      referencesTitle.textContent = "References";
      referencesContainer.appendChild(referencesTitle);

      for (let i = 1; i <= 3; i++) {
        const referenceCard = createCard(`Reference #${i}`, [
          {
            label: "First Name:",
            id: `reference${i}FirstName`,
            name: `references[${i}][firstName]`,
            placeholder: "FIRST",
            type: "text"
          },
          {
            label: "Last Name:",
            id: `reference${i}LastName`,
            name: `references[${i}][lastName]`,
            placeholder: "LAST",
            type: "text"
          },
          {
            label: "City:",
            id: `reference${i}City`,
            name: `references[${i}][city]`,
            placeholder: "CITY",
            type: "text"
          },
          {
            label: "State:",
            id: `reference${i}State`,
            name: `references[${i}][state]`,
            placeholder: "STATE",
            type: "datalist",
            options: [
              "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID",
              "IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS",
              "MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK",
              "OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV",
              "WI","WY"
            ]
          },
          {
            label: "Relation to Defendant:",
            id: `reference${i}Relation`,
            name: `references[${i}][relation]`,
            placeholder: "Friend, Sibling, etc.",
            type: "text"
          },
          {
            label: "Phone #:",
            id: `reference${i}Phone`,
            name: `references[${i}][phone]`,
            placeholder: "(XXX) XXX-XXXX",
            type: "text"
          }
        ]);
        referencesContainer.appendChild(referenceCard);
      }
      defendantSectionWrapper.appendChild(referencesContainer);

      /**************************************
       * ATTORNEY CONTAINER
       **************************************/
      const attorneyContainer = createContainer("Attorney", "attorney-container", [
        {
          label: "First Name:",
          id: "attorneyFirstName",
          name: "attorney[firstName]",
          placeholder: "FIRST",
          type: "text"
        },
        {
          label: "Last Name:",
          id: "attorneyLastName",
          name: "attorney[lastName]",
          placeholder: "LAST",
          type: "text"
        },
        {
          label: "Phone #:",
          id: "attorneyPhone",
          name: "attorney[phone]",
          placeholder: "(XXX) XXX-XXXX",
          type: "text"
        },
        {
          label: "Device Type:",
          id: "attorneyDeviceType",
          name: "attorney[deviceType]",
          placeholder: "Mobile, Home, Other",
          type: "datalist",
          options: ["Mobile","Home","Office","Other"]
        }
      ]);
      defendantSectionWrapper.appendChild(attorneyContainer);

      /**************************************
       * BOND INFO CONTAINER
       **************************************/
      const bondInfoContainer = createContainer("Bond Info", "bond-info", [
        {
          label: "County:",
          id: "bondCounty",
          name: "bond[county]",
          placeholder: "County",
          type: "text"
        },
        {
          label: "Jail:",
          id: "bondJail",
          name: "bond[jail]",
          placeholder: "Jail Name",
          type: "text"
        },
        {
          label: "Agency:",
          id: "bondAgency",
          name: "bond[agency]",
          placeholder: "Arresting Agency",
          type: "text"
        },
        {
          label: "Court:",
          id: "bondCourt",
          name: "bond[court]",
          placeholder: "Court Name",
          type: "text"
        },
        {
          label: "TIME/CRT DATE:",
          id: "bondTimeOrCourtDate",
          name: "bond[timeOrCourtDate]",
          placeholder: "MM/DD/YYYY or HH:MM",
          type: "text"
        },
        {
          label: "Charges:",
          id: "bondCharges",
          name: "bond[charges]",
          placeholder: "Charges (e.g. 'Theft, Assault')",
          type: "text"
        },
        {
          label: "Bond Amount:",
          id: "bondAmount",
          name: "bond[bondAmount]",
          placeholder: "$",
          type: "text"
        },
        {
          label: "WARRANT #:",
          id: "bondWarrantNumber",
          name: "bond[warrantNumber]",
          placeholder: "000000",
          type: "text"
        },
        {
          label: "CASE #:",
          id: "bondCaseNumber",
          name: "bond[caseNumber]",
          placeholder: "Case #",
          type: "text"
        },
        {
          label: "HOLDS:",
          id: "bondHolds",
          name: "bond[holds]",
          placeholder: "List holds if any",
          type: "text"
        }
      ]);
      defendantSectionWrapper.appendChild(bondInfoContainer);
    }

    // Call the function to populate the defendant section
    populateDefendantInformationSection();

    // Height Formatting Logic
    const defendantHeightInput = document.getElementById("defendantHeight");
    if (defendantHeightInput) {
      defendantHeightInput.addEventListener("input", () => {
        let numericString = defendantHeightInput.value.replace(/[^0-9]/g, "");
        if (numericString === "") {
          defendantHeightInput.value = "";
          return;
        }
        let feet = parseInt(numericString.substring(0, 1), 10) || 0;
        let inches = parseInt(numericString.substring(1), 10) || 0;
        if (inches > 11) {
          inches = inches % 10;
        }
        if (numericString.length === 1) {
          defendantHeightInput.value = feet;
        } else {
          defendantHeightInput.value = `${feet}'${inches}"`;
        }
      });
    }

    // Control APT field behavior
    const residenceTypeInput = document.getElementById("residenceType");
    const residentTypeInput = document.getElementById("residentType");
    const apartmentNumberField = document.getElementById("apartmentNumber");
    if (apartmentNumberField) {
      apartmentNumberField.style.display = "none";
    }

    if (residenceTypeInput && residentTypeInput && apartmentNumberField) {
      residenceTypeInput.addEventListener("input", () => {
        if (residenceTypeInput.value === "APT") {
          // auto-select "RENT"
          residentTypeInput.value = "RENT";
          apartmentNumberField.style.display = "inline-block";
        } else {
          apartmentNumberField.style.display = "none";
        }
      });
    }

    // Currency formatting for Bond Amount
    document.addEventListener('DOMContentLoaded', () => {
      const bondAmountField = document.getElementById('bondAmount');
      if (!bondAmountField) return;

      bondAmountField.addEventListener('input', () => {
        let value = bondAmountField.value.replace(/[^0-9.]/g, '');
        let parts = value.split('.');
        if (parts.length > 2) {
          value = parts[0] + '.' + parts.slice(1).join('');
        }
        bondAmountField.value = value;
      });

      bondAmountField.addEventListener('blur', () => {
        let value = bondAmountField.value.replace(/[^0-9.]/g, '');
        let numericValue = parseFloat(value);
        if (!isNaN(numericValue)) {
          bondAmountField.value = numericValue.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
          });
        } else {
          bondAmountField.value = '';
        }
      });
    });

    /**
     * Adds an additional phone field row
     */
    function addPhoneField() {
      const phoneFieldsContainer = document.getElementById("phoneFieldsContainer");
      if (!phoneFieldsContainer) {
        console.error("No phoneFieldsContainer found in DOM!");
        return;
      }
      const nextIndex = phoneFieldsContainer.children.length + 1;

      // Create a new card for the phone input + device type
      const phoneInputConfig = {
        label: `PHONE #${nextIndex}:`,
        id: `phoneNumber${nextIndex}`,
        name: "phoneNumber[]",
        placeholder: "(XXX) XXX-XXXX",
        type: "text",
        className: "phoneField"
      };
      const deviceTypeConfig = {
        label: "Device Type:",
        id: `deviceType${nextIndex}`,
        name: "deviceType[]",
        type: "datalist",
        placeholder: "Device Type",
        options: ["Mobile", "Home", "Other"]
      };
      const newPhoneCard = createCard("", [phoneInputConfig, deviceTypeConfig]);
      newPhoneCard.style.margin = "10px 0";

      // Remove button
      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.textContent = "Remove Phone";
      removeButton.className = "remove-phone-button";
      removeButton.addEventListener("click", () => {
        phoneFieldsContainer.removeChild(newPhoneCard);
        updateRemoveButtonsVisibility();
      });
      newPhoneCard.appendChild(removeButton);

      phoneFieldsContainer.appendChild(newPhoneCard);
      updateRemoveButtonsVisibility();
    }

    /**
     * Hides "Remove Phone" buttons if there's only one phone field, etc.
     */
    function updateRemoveButtonsVisibility() {
      const phoneFieldsContainer = document.getElementById("phoneFieldsContainer");
      if (!phoneFieldsContainer) return;
      const removeButtons = phoneFieldsContainer.querySelectorAll(".remove-phone-button");
      if (removeButtons.length === 1) {
        removeButtons[0].style.display = "none";
      } else {
        removeButtons.forEach(button => {
          button.style.display = "inline-block";
        });
      }
    }

    // Simple page navigation among sections (optional)
    document.querySelectorAll(".section-buttons button").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          document.querySelectorAll(".container-wrapper").forEach(sec => sec.classList.remove("active"));
          targetSection.classList.add("active");
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          console.error(`Section with ID "${targetId}" not found.`);
        }
      });
    });


    /**
     * Google Places API Integration
     * This callback will be called once the 'places' script has loaded.
     */
    window.initializePlacesAutocomplete = function() {
      console.log("Places script loaded. Setting up autocomplete.");
      initializeAutocomplete();
    };

    /**
     * Sets up Google Places Autocomplete for the "street" input
     */
    function initializeAutocomplete() {
      const streetInput = document.getElementById("residentialStreet");
      if (!streetInput) {
        console.warn("No #residentialStreet input found for autocomplete");
        return;
      }
      const autocomplete = new google.maps.places.Autocomplete(streetInput, {
        types: ["address"]
        // componentRestrictions: { country: "us" }
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place || !place.address_components) {
          console.warn("No address components found for that place");
          return;
        }
        let foundStreetNumber = "";
        let foundRoute = "";
        let foundCity = "";
        let foundState = "";
        let foundZip = "";

        place.address_components.forEach(component => {
          const types = component.types;
          if (types.includes("street_number")) {
            foundStreetNumber = component.long_name;
          }
          if (types.includes("route")) {
            foundRoute = component.long_name;
          }
          if (types.includes("locality")) {
            foundCity = component.long_name;
          }
          if (types.includes("administrative_area_level_1")) {
            foundState = component.short_name;
          }
          if (types.includes("postal_code")) {
            foundZip = component.long_name;
          }
        });

        if (foundStreetNumber && foundRoute) {
          streetInput.value = `${foundStreetNumber} ${foundRoute}`;
        }
        const cityField = document.getElementById("residentialCity");
        if (cityField) cityField.value = foundCity;
        const stateField = document.getElementById("residentialState");
        if (stateField) stateField.value = foundState;
        const zipField = document.getElementById("residentialZipCode");
        if (zipField) zipField.value = foundZip;
      });
    }

    // Dynamically load Google Maps Places script with callback
    const placesApiKey = "AIzaSyBmX2NTZzTOF_bf32YcmIsNa4d1obR0DPo";
    const scriptPlaces = document.createElement("script");
    scriptPlaces.src = `https://maps.googleapis.com/maps/api/js?key=${placesApiKey}&libraries=places&callback=initializePlacesAutocomplete`;
    scriptPlaces.async = true;
    scriptPlaces.defer = true;
    document.head.appendChild(scriptPlaces);

  }); // End of DOMContentLoaded
</script>
</body>
</html>
