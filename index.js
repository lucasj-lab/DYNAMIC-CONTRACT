document.addEventListener("DOMContentLoaded", () => {
 

  
  /**
   * 1) Dynamically load the Google Maps JS with your two different keys.
   *    Typically you'd only use one key, but you asked to include both.
   */
  const placesApiKey = "AIzaSyBmX2NTZzTOF_bf32YcmIsNa4d1obR0DPo";


  // This callback will be called once the 'places' script has loaded.
  window.initPlacesAutocomplete = function() {
    console.log("Places script loaded. Now we can set up autocomplete.");
    initAutocomplete();
  };

  // Create the <script> for the Places API + callback
  const scriptPlaces = document.createElement("script");
  scriptPlaces.src = `https://maps.googleapis.com/maps/api/js?key=${placesApiKey}&libraries=places&callback=initPlacesAutocomplete`;
  scriptPlaces.async = true;
  scriptPlaces.defer = true;
  document.head.appendChild(scriptPlaces);



    function getStateDriverLicenseFormat(state) {
      if (!state) {
        state = "Georgia"; // Default state
      }
        const stateDriverLicenseFormats = {
            "Alabama": { placeholder: "XXX-XXX-XX", pattern: "\\d{1,8}", title: "1-8 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Alaska": { placeholder: "XXX-XXX-X", pattern: "\\d{1,7}", title: "1-7 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Arizona": { placeholder: "A-XXX-XXX-XX", pattern: "[A-Za-z]\\d{8}", title: "1 Alpha + 8 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Arkansas": { placeholder: "XXX-XXX-XX", pattern: "\\d{1,8}", title: "1-8 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "California": { placeholder: "A-XXX-XXX-XX", pattern: "[A-Za-z]\\d{8}", title: "1 Alpha + 8 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Colorado": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Connecticut": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Delaware": { placeholder: "XXX-XXX-X", pattern: "\\d{1,7}", title: "1-7 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "District of Columbia": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Florida": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Georgia": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Hawaii": { placeholder: "A-XXX-XXX-XX", pattern: "[A-Za-z]\\d{8}", title: "1 Alpha + 8 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Idaho": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Illinois": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Indiana": { placeholder: "A-XXX-XXX-XXX", pattern: "[A-Za-z]\\d{9}", title: "1 Alpha + 9 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Iowa": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Kansas": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Kentucky": { placeholder: "A-XXX-XXX-XXX", pattern: "[A-Za-z]\\d{9}", title: "1 Alpha + 9 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Louisiana": { placeholder: "XXX-XXX-XX", pattern: "\\d{1,8}", title: "1-8 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Maine": { placeholder: "XXX-XXX-X", pattern: "\\d{7}", title: "7 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Maryland": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Massachusetts": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Michigan": { placeholder: "A-XXX-XXX-XXX-X", pattern: "[A-Za-z]\\d{10}", title: "1 Alpha + 10 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Minnesota": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Mississippi": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Missouri": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Montana": { placeholder: "A-XXX-XXX-XX", pattern: "[A-Za-z]\\d{8}", title: "1 Alpha + 8 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Nebraska": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Nevada": { placeholder: "X-XXX-XXX-XX", pattern: "[A-Za-z]\\d{8}", title: "X + 8 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "New Hampshire": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "New Jersey": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "New Mexico": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "New York": { placeholder: "A-XXX-XXX-X", pattern: "[A-Za-z]\\d{7}", title: "1 Alpha + 7 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "North Carolina": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "North Dakota": { placeholder: "AAA-XXX-XXX", pattern: "[A-Za-z]{3}\\d{6}", title: "3 Alpha + 6 Numeric", formatFunction: (value) => value.replace(/([A-Za-z]{3})|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Ohio": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Oklahoma": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Oregon": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Pennsylvania": { placeholder: "XXX-XXX-XX", pattern: "\\d{8}", title: "8 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Rhode Island": { placeholder: "XXX-XXX-X", pattern: "\\d{7}", title: "7 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "South Carolina": { placeholder: "XXX-XXX-XXX", pattern: "\\d{5,11}", title: "5-11 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "South Dakota": { placeholder: "XXX-XXX-XXX-XXX", pattern: "\\d{12}", title: "12 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Tennessee": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Texas": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Utah": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Vermont": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Virginia": { placeholder: "A-XXX-XXX-XXX", pattern: "[A-Za-z]\\d{8,11}", title: "1 Alpha + 8-11 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Washington": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "West Virginia": { placeholder: "XXX-XXX-X", pattern: "\\d{7}", title: "7 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "Wisconsin": { placeholder: "A-XXX-XXX-XXX-XXXX", pattern: "[A-Za-z]\\d{13}", title: "1 Alpha + 13 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? `${alpha}-` : `${num}-`) },
            "Wyoming": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
            "UNKNOWN": { placeholder: "DRIVER'S LICENSE #", title: "Enter a valid driver's license based on the selected state" }
        };
    
        // Normalize the state input for case-insensitive matching
        state = state.toLowerCase();
    
        for (const [key, format] of Object.entries(stateDriverLicenseFormats)) {
            if (key.toLowerCase() === state) {
                return format;
            }
        }
    
        return stateDriverLicenseFormats["UNKNOWN"];
    }
    

    
    
    function formatSSN(input) {
        const ssnInput = document.getElementById("ssnInput");

        if (ssnInput) {
            ssnInput.addEventListener("input", () => {
                let value = ssnInput.value.replace(/\D/g, ""); // Remove non-digits
                if (value.length > 9) value = value.slice(0, 9); // Limit to 9 digits
    
                // Format as XXX-XX-XXXX
                if (value.length <= 3) {
                    ssnInput.value = value;
                } else if (value.length <= 5) {
                    ssnInput.value = `${value.slice(0, 3)}-${value.slice(3)}`;
                } else {
                    ssnInput.value = `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5)}`;
                }
            });
        }
    }
    
    function formatPhoneNumber(input) {
        let value = input.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length > 3) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        }
        if (value.length > 6) {
            value = `${value.slice(0, 9)}-${value.slice(9, 13)}`;
        }
        input.value = value;
    }
  // Function to create a styled input group with placeholders
function createInputGroup(labelText, inputConfig) {
  const inputGroup = document.createElement("div");
  inputGroup.className = "input-group";

  // Create and append label
  const label = document.createElement("label");
  label.setAttribute("for", inputConfig.id);
  label.textContent = labelText;
  inputGroup.appendChild(label);

  let input;

  if (inputConfig.type === "datalist") {
      // Create a text input that uses a <datalist>
      input = document.createElement("input");
      input.type = "text";
      input.id = inputConfig.id;
      input.name = inputConfig.name;
      input.placeholder = inputConfig.placeholder || "";

      // Create the datalist element
      const datalist = document.createElement("datalist");
      datalist.id = `${inputConfig.id}-options`;
      // Link the <input> to its <datalist> by "list" attribute
      input.setAttribute("list", datalist.id);

      // Populate <option> elements
      (inputConfig.options || []).forEach(option => {
          const optionElem = document.createElement("option");
          optionElem.value = option;
          datalist.appendChild(optionElem);
      });

      // Append both input and datalist to the group
      inputGroup.appendChild(input);
      inputGroup.appendChild(datalist);

  } else {
      // Normal <input> (text, date, etc.)
      input = document.createElement("input");
      input.type = inputConfig.type || "text";
      input.id = inputConfig.id;
      input.name = inputConfig.name;
      input.placeholder = inputConfig.placeholder || "";

      // Append the input
      inputGroup.appendChild(input);
  }

  // If 'hidden: true' is specified, hide the input initially
  if (inputConfig.hidden) {
      input.style.display = "none";
  }

  return inputGroup;
}

// Helper function to create a card with a title and inputs
function createCard(title, inputs) {
  const card = document.createElement("div");
  card.className = "card";

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = title;
  card.appendChild(cardTitle);

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  inputs.forEach(inputConfig => {
      const inputGroup = createInputGroup(inputConfig.label, inputConfig);
      cardContent.appendChild(inputGroup);
  });

  card.appendChild(cardContent);

  return card;
}

function createContainer(title, containerId, inputs) {
  const container = document.createElement("div");
  container.className = "container";
  container.id = containerId;

  const containerTitle = document.createElement("h2");
  containerTitle.textContent = title;
  container.appendChild(containerTitle);

  const card = document.createElement("div");
  card.className = "card";

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  inputs.forEach(inputConfig => {
      const inputGroup = createInputGroup(inputConfig.label, inputConfig);
      cardContent.appendChild(inputGroup);
  });

  card.appendChild(cardContent);
  container.appendChild(card);

  return container;
}
function populateDefendantSection() {
  const defendantWrapper = document.getElementById("defendant-section");
  if (!defendantWrapper) {
    console.error("Defendant section not found!");
    return;
  }
  defendantWrapper.innerHTML = ""; // Clear existing content

  /**************************************
   * 1) PERSONAL INFO + ADDITIONAL INFO
   **************************************/
  const personalInfoContainer = createContainer("Personal Info", "defendant-personal", [
    { label: "NAME", id: "firstName", name: "defendant[firstName]", placeholder: "FIRST", type: "text" },
    { label: "",      id: "middleName", name: "defendant[middleName]", placeholder: "MIDDLE", type: "text" },
    { label: "",      id: "lastName",   name: "defendant[lastName]",   placeholder: "LAST",   type: "text" },
  ]);

  // A sub-card for DOB, SSN, etc.
  const additionalInfoCard = document.createElement("div");
  additionalInfoCard.className = "card";

  const additionalInfoCardContent = document.createElement("div");
  additionalInfoCardContent.className = "card-content";

  // Fields for DOB, SSN
  const additionalInfoInputs = [
    { label: "DOB:",   id: "dob",      name: "defendant[dob]", placeholder: "MM/DD/YYYY", type: "date" },
    { label: "SSN#:",  id: "ssnInput", name: "defendant[ssn]", placeholder: "XXX-XX-XXXX",
      type: "text", pattern: "\\d{3}-\\d{2}-\\d{4}", title: "SSN format: XXX-XX-XXXX" },
  ];
  additionalInfoInputs.forEach((inputConfig) => {
    const inputGroup = createInputGroup(inputConfig.label, inputConfig);
    additionalInfoCardContent.appendChild(inputGroup);
  });

  // State-based Driver's License
  const stateInputGroup = createInputGroup("", {
    id: "state-dropdown",
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
    ],
  });
  additionalInfoCardContent.appendChild(stateInputGroup);

  // Driver's License # input
  const dlInputGroup = createInputGroup("DMV#:", {
    id: "dlInputConfig",
    name: "defendant[dlNumber]",
    placeholder: "DMV#",
    type: "text",
    title: "Enter a valid driver's license based on the selected state",
  });
  additionalInfoCardContent.appendChild(dlInputGroup);

  // Finalize additionalInfoCard
  additionalInfoCard.appendChild(additionalInfoCardContent);
  personalInfoContainer.appendChild(additionalInfoCard);

  // Append to the wrapper
  defendantWrapper.appendChild(personalInfoContainer);

  // Attach state format logic
  const stateDropdown = document.getElementById("state-dropdown");
  const dlInput = document.getElementById("dlInputConfig");
  if (stateDropdown && dlInput) {
    stateDropdown.addEventListener("change", () => {
      const selectedState = stateDropdown.value.split(" (")[0];
      const stateFormat = getStateDriverLicenseFormat(selectedState) ||
        { placeholder: "DRIVER'S LICENSE #", pattern: ".*" };

      dlInput.placeholder = stateFormat.placeholder;
      dlInput.setAttribute("pattern", stateFormat.pattern);
      dlInput.title = stateFormat.title || "Enter a valid driver's license based on the selected state";
    });

    dlInput.addEventListener("input", (e) => {
      const selectedState = stateDropdown.value.split(" (")[0];
      const stateFormat = getStateDriverLicenseFormat(selectedState);
      if (stateFormat && stateFormat.formatFunction) {
        e.target.value = stateFormat.formatFunction(e.target.value);
      }
    });
  }

  /**************************************
   * 2) DEMOGRAPHICS
   **************************************/
  const demographicsContainer = createContainer("Demographics", "defendant-demographics", [
    { label: "SEX:",  id: "sex",   name: "defendant[sex]",  placeholder: "SEX",  type: "datalist", options: ["Male", "Female"] },
    { label: "RACE:", id: "race",  name: "defendant[race]", placeholder: "RACE", type: "datalist", options: ["White", "Black", "Asian", "Hispanic", "Native American", "Other"] },
    { label: "HGT:",  id: "height",name: "defendant[height]",placeholder: "HGT", type: "datalist",
      options: [
        "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"",
        "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"", "6'6\"", "6'7\"", "6'8\"", "6'9\"", "6'10\"", "6'11\"", "7'0\""
      ]
    },
    { label: "WGT:",  id: "weight", name: "defendant[weight]", placeholder: "WGT", type: "datalist",
      options: Array.from({ length: 301}, (_, i) => (i === 0 ? "" : `${i} lbs`)) // 1-600 lbs, or adapt
    },
    { label: "HAIR:", id: "hair",   name: "defendant[hair]", placeholder: "HAIR", type: "datalist",
      options: ["Black", "Brown", "Blonde", "Red", "Gray", "Bald", "Other"]
    },
    { label: "EYES:", id: "eyes",   name: "defendant[eyes]", placeholder: "EYES", type: "datalist",
      options: ["Brown", "Blue", "Green", "Hazel", "Gray", "Other"]
    }
  ]);
  defendantWrapper.appendChild(demographicsContainer);

  /**************************************
   * 3) CONTACT INFO
   **************************************/
  const contactInfoContainer = createContainer("Contact Info", "contact-info", [
    {
      label: "PHONE #:",
      id: "phoneInput",
      name: "defendant[phone]",
      placeholder: "(XXX) XXX-XXXX",
      type: "text",
      pattern: "\\(\\d{3}\\) \\d{3}-\\d{4}",
      title: "Phone number format: (XXX) XXX-XXXX"
    },
    {
      label: "",
      id: "deviceTypeDefault",
      name: "contact[deviceType]",
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
    },
    {
      label: "@",
      id: "emailDomain",
      name: "contact[emailDomain]",
      type: "datalist",
      placeholder: "EMAIL",
      options: ["GMAIL.COM", "YAHOO.COM", "OUTLOOK.COM", "HOTMAIL.COM", "ICLOUD.COM"]
    },
    {
      label: "",
      id: "fullEmailOutput",
      name: "contact[fullEmail]",
      placeholder: "EMAIL ADDRESS",
      readonly: true
    }
  ]);
  defendantWrapper.appendChild(contactInfoContainer);

  // Email combination logic
  const emailUserInput = document.getElementById("emailUser");
  const emailDomainInput = document.getElementById("emailDomain");
  const fullEmailOutput = document.getElementById("fullEmailOutput");
  if (emailUserInput && emailDomainInput && fullEmailOutput) {
    function updateCombinedEmail() {
      const username = emailUserInput.value.trim();
      const domain   = emailDomainInput.value.trim();
      fullEmailOutput.value = (username && domain) ? `${username}@${domain}` : "";
    }
    emailUserInput.addEventListener("input", updateCombinedEmail);
    emailDomainInput.addEventListener("change", updateCombinedEmail);
  }

  /**************************************
   * 4) RESIDENTIAL Info (2 cards: residentialInfoCard + addressCard)
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
      id: "years",
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
      id: "street",
      name: "address[street]",
      placeholder: "STREET",
      type: "text"
    },
    {
      label: "",
      id: "apt",
      name: "residential[apt]",
      placeholder: "APT #",
      type: "text",
      hidden: true
    },
    {
      label: "",
      id: "city",
      name: "address[city]",
      placeholder: "CITY",
      type: "datalist",
      options: []
    },
    {
      label: "",
      id: "state",
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
      id: "zipCode",
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
  defendantWrapper.appendChild(residentialInfoContainer);

  // Optional Zip → City/State lookup (Google Geocoder)
  const zipInput = document.getElementById("zipCode");
  if (zipInput) {
    zipInput.addEventListener("blur", () => {
      const zip = zipInput.value.trim();
      if (!zip) return;

      // If you have the google.maps.Geocoder loaded:
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: zip }, (results, status) => {
        if (status === "OK" && results && results.length > 0) {
          const place = results[0];
          let cityVal = "";
          let stateVal = "";
          place.address_components.forEach(component => {
            const types = component.types;
            if (types.includes("locality")) {
              cityVal = component.long_name;
            }
            if (types.includes("administrative_area_level_1")) {
              stateVal = component.short_name; // e.g., "CA"
            }
          });
          const cityField  = document.getElementById("city");
          const stateField = document.getElementById("state");
          if (cityField)  cityField.value  = cityVal;
          if (stateField) stateField.value = stateVal;
        } else {
          console.warn("Geocoding for ZIP failed or no results:", status);
        }
      });
    });
  }
// Example usage for the vehicle section
const vehicleInputs = 
[
  {
    label: "Vehicle Year",
    id: "vehicle-year",
    type: "datalist",
    placeholder: "Enter vehicle year",
    options: Array.from({ length: new Date().getFullYear() - 2000 }, (_, i) => `${2010 + i}`)
  },  

  { label: "Make", id: "vehicle-make", type: "text", placeholder: "Enter vehicle make" },
  { label: "Model", id: "vehicle-model", type: "text", placeholder: "Enter vehicle model" },
  { label: "Color", id: "vehicle-color", type: "text", placeholder: "Enter vehicle color" },
  { label: "Tag #", id: "vehicle-tag", type: "text", placeholder: "Enter vehicle tag number" }
];




const vehicleSection = createContainer("Vehicle Information", "vehicle-section", vehicleInputs);
defendantWrapper.appendChild(vehicleSection);
}

    

    /**
     * 4) The function that sets up Google Places Autocomplete for the "street" input
     *    Called automatically by "initPlacesAutocomplete" once the script loads.
     */
    function initAutocomplete() {
      const streetInput = document.getElementById("street");
      if (!streetInput) {
        console.warn("No #street input found for autocomplete");
        return;
      }
  
      const autocomplete = new google.maps.places.Autocomplete(streetInput, {
        types: ["address"],
        // componentRestrictions: { country: "us" } // optional
      });
  
      // When user selects an address suggestion
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place || !place.address_components) {
          console.warn("No address components found for that place");
          return;
        }
  
        // You can parse them if you want to fill city/state too,
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
  
        // So the #street field might combine "streetNumber route"
        if (foundStreetNumber && foundRoute) {
          streetInput.value = `${foundStreetNumber} ${foundRoute}`;
        }
        // Or if you want to fill the #city, #state as well:
        const cityField = document.getElementById("city");
        if (cityField) cityField.value = foundCity;
        const stateField = document.getElementById("state");
        if (stateField) stateField.value = foundState;
        const zipField = document.getElementById("zipCode");
        if (zipField) zipField.value = foundZip; 
      });
    }
  
/**
 * Creates a toggle (checkbox + label) and the "Defendant Vehicle Section"
 * as a <div> with all inputs/datalists. The container starts hidden.
 * When the user checks the toggle, we remove the "hidden" class.
 */



 
            // Call the function to populate the Defendant section
            populateDefendantSection();
            const carData = {
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
              "Rivian": ["R1T", "R1S"],
            };
            

            document.getElementById("vehicle-make").addEventListener("input", function () {
              const make = this.value;
              const modelDatalist = document.getElementById("vehicle-model-datalist");
            
              // Clear existing options
              modelDatalist.innerHTML = "";
            
              // Populate datalist with models for the selected make
              if (carData[make]) {
                carData[make].forEach(model => {
                  const option = document.createElement("option");
                  option.value = model;
                  modelDatalist.appendChild(option);
                });
              }
            });
            
                          // Height Formatting Logic
        const heightInput = document.getElementById("height");
        if (heightInput) {
            heightInput.addEventListener("input", () => {
                let numericString = heightInput.value.replace(/[^0-9]/g, ""); // Strip non-digits
    
                if (numericString === "") {
                    heightInput.value = ""; // Allow clearing the field
                    return;
                }
    
                let feet = parseInt(numericString.substring(0, 1), 10) || 0; // First digit is feet
                let inches = parseInt(numericString.substring(1), 10) || 0; // Remaining digits are inches
    
                if (inches > 11) {
                    inches = inches % 10; // Prevent inches from exceeding 11
                }
    
                if (numericString.length === 1) {
                    heightInput.value = feet; // Show only feet for single-digit input
                } else {
                    heightInput.value = `${feet}'${inches}"`; // Properly format feet & inches
                }
            });
        }
    
        // Weight Formatting Logic
        const weightInput = document.getElementById("weight");
        if (weightInput) {
            weightInput.addEventListener("blur", () => {
                const value = weightInput.value.replace(/[^0-9]/g, ""); // Strip non-numeric characters
                if (value) {
                    weightInput.value = `${parseInt(value, 10)} lbs`;
                } else {
                    weightInput.value = ""; // Clear if empty
                }
            });
        }
    
          
document.getElementById('ssnInput').addEventListener('input', function(e) {
    formatSSN(e.target);
    });
    
    
    document.getElementById('phoneInput').addEventListener('input', function (e) {
        formatPhoneNumber(e.target);
        });
        

            
        
    const defendantWrapper = document.getElementById("defendant-section");
    if (defendantWrapper) {
        
 

                     // Grab references to the relevant inputs
  const residenceTypeInput = document.getElementById("residenceType");
  const residentTypeInput = document.getElementById("residentType");
  const aptField = document.getElementById("apt");
  aptField.style.display = "none";

  // Listen for changes in "residenceType"
  residenceTypeInput.addEventListener("input", () => {
    if (residenceTypeInput.value === "APT") {
      // 1) Auto-select "Renter (Lease)"
      residentTypeInput.value = "Rent";
      // 2) Show the APT # field
      aptField.style.display = "inline-block";
    } else {
      // Hide the APT # field again if not "Apartment"
      aptField.style.display = "none";
    }
  });


  // Append the Residential Info Card
                    // defendantWrapper.appendChild(addressCard); // Append the Address Card
                }
    


stateSelectInput.addEventListener("input", function () {
    const selectedState = stateSelectInput.value;
    const pattern = stateLicenseFormats[selectedState] || "^.*$"; // Default pattern
    dlInputConfig.setAttribute("pattern", pattern);
    dlInputConfig.setAttribute(
        "title",
        `License format for ${selectedState}: ${
            pattern !== ".*" ? pattern.replace(/\\d/g, "0").replace(/\\w/g, "A") : "Any"
        }`
    );
});





});
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".section-buttons button").forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                document.querySelectorAll(".container-wrapper").forEach(section => section.classList.remove("active"));
                targetSection.classList.add("active");
                targetSection.scrollIntoView({behavior: "smooth", block: "start" });
            } else {
                console.error(`Section with ID "${targetId}" not found.`);
            }
        });
    });
});

