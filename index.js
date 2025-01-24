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

        // Add Personal Info
        const personalInfoContainer = createContainer("Personal Info", "defendant-personal", [
            { label: "NAME", id: "firstName", name: "defendant[firstName]", placeholder:"FIRST", type: "text" },
            { label: "", id: "middleName", name: "defendant[middleName]", placeholder:"MIDDLE", type: "text" },
            { label: "", id: "lastName", name: "defendant[lastName]", placeholder:"LAST", type: "text" },
            
        ]);
        

// Add a new card for additional details
const additionalInfoCard = document.createElement("div");
additionalInfoCard.className = "card"; // Use the same styling class for a consistent appearance

const additionalInfoCardContent = document.createElement("div");
additionalInfoCardContent.className = "card-content";

                                    // Add input fields for Date of Birth, Social Security Number, and Driver's License
                                    const additionalInfoInputs = [
                                    { label: "DOB:", id: "dob", name: "defendant[dob]", placeholder: "MM/DD/YYYY", type: "date" },
                                    { label: "SSN#:", id: "ssnInput", name: "defendant[ssn]", placeholder: "XXX-XX-XXXX", type: "text",  pattern: "\d{3}-\d{2}-\d{4}", title: "SSN format: XXX-XX-XXXX"},
                                    ];
                                    additionalInfoInputs.forEach((inputConfig) => {
                                        const inputGroup = createInputGroup(inputConfig.label, inputConfig);
                                        additionalInfoCardContent.appendChild(inputGroup);
                                    });
                            // Dynamic State Dropdown and Driver's License Input
                            const stateInputGroup = createInputGroup("", {
                                id: "state-dropdown", // Correct ID here
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
                                    "Texas (TX)", "Utah (UT)", "Vermont (VT)", "Virginia (VA)", "Washington (WA)", "West Virginia (WV)", "Wisconsin (WI)", "Wyoming (WY)",
                                ],
                                defaulValue:"Georgia (GA)"
                            });
                            additionalInfoCardContent.appendChild(stateInputGroup);
                            
                            // Create the Driver's License Input Group
                            const dlInputGroup = createInputGroup("DMV#:", {
                                id: "dlInputConfig",
                                name: "defendant[dlNumber]",
                                placeholder: "DMV#",
                                type: "text",
                                title: "Enter a valid driver's license based on the selected state",
                            });
                            additionalInfoCardContent.appendChild(dlInputGroup);
                            
                            // Append the Card Content to the Card
                            additionalInfoCard.appendChild(additionalInfoCardContent);
                            personalInfoContainer.appendChild(additionalInfoCard);
                            
                            // Append Personal Info Container to the Wrapper
                            defendantWrapper.appendChild(personalInfoContainer);
                            
                            // Add Event Listeners for State Dropdown and Driver's License Input
                            const stateDropdown = document.getElementById("state-dropdown");
                            const dlInput = document.getElementById("dlInputConfig");
                            
                            if (stateDropdown && dlInput) {
                                stateDropdown.addEventListener("change", () => {
                                    const selectedState = stateDropdown.value.split(" (")[0]; // Extract the state name
                                    const stateFormat = getStateDriverLicenseFormat(selectedState) || { placeholder: "DRIVER'S LICENSE #", pattern: ".*" };
                            
                                    // Update the Driver's License Input based on State
                                    dlInput.placeholder = stateFormat.placeholder;
                                    dlInput.setAttribute("pattern", stateFormat.pattern);
                                    dlInput.title = stateFormat.title || "Enter a valid driver's license based on the selected state";
                                });
                            
                                dlInput.addEventListener("input", (event) => {
                                    const selectedState = stateDropdown.value.split(" (")[0];
                                    const stateFormat = getStateDriverLicenseFormat(selectedState);
                            
                                    if (stateFormat && stateFormat.formatFunction) {
                                        event.target.value = stateFormat.formatFunction(event.target.value);
                                    }
                                });
                            }

                     
                            
                       

        // Add Demographics
        const demographicsContainer = createContainer("Demographics", "defendant-demographics", [
            { label: "SEX:", id: "sex", name: "defendant[sex]", placeholder:"SEX", type: "datalist", options: ["Male", "Female"] },
            { label:  "RACE:", id: "race", name: "defendant[race]", placeholder:"RACE", type: "datalist", options: ["White", "Black", "Asian", "Hispanic", "Native American", "Other"] },
            { label: "HGT:", id: "height", name: "defendant[height]", placeholder: "HGT", type:  "datalist", options: [
                "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"",
                "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"", "6'6\"", "6'7\"", "6'8\"", "6'9\"", "6'10\"", "6'11\"", "7'0\""
            ] },
            { label: "WGT:", id: "weight", name: "defendant[weight]", placeholder: "WGT", type: "datalist", options: Array.from({ length: 601 }, (_, i) => (i === 600? "" : `${i} lbs`)) },
            { label: "HAIR:", id: "hair", name: "defendant[hair]", placeholder:"HAIR", type: "datalist", options: ["Black", "Brown", "Blonde", "Red", "Gray", "Bald", "Other"] },
            { label: "EYES:", id: "eyes", name: "defendant[eyes]", placeholder:"EYES", type: "datalist", options: ["Brown", "Blue", "Green", "Hazel", "Gray", "Other"] }
        ]);

// Append the Contact Info Container
defendantWrapper.appendChild(demographicsContainer);

const contactInfoContainer = createContainer("Contact Info", "contact-info", [
    {
        label: "PHONE #:",
        id: "phoneInput",
        name: "defendant[phone]",
        placeholder: "(XXX) XXX-XXXX",
        type: "text",
        pattern: "\\(\\d{3}\\) \\d{3}-\\d{4}",
        title: "Phone number format: (XXX) XXX-XXXX",
    },
    {
        label: "",
        id: "deviceTypeDefault",
        name: "contact[deviceType]",
        placeholder: "DEVICE TYPE",
        type: "datalist",
        options: ["Mobile", "Home", "Other"],
    },
    {
        label: "EMAIL:",
        id: "emailUser",
        name: "contact[emailUser]",
        placeholder: "USER",
        type: "text",
    },
    {
        label: "@",
        id: "emailDomain",
        name: "contact[emailDomain]",
        type: "datalist",
        placeholder: "EMAIL",
        options: ["GMAIL.COM", "YAHOO.COM", "OUTLOOK.COM", "HOTMAIL.COM", "ICLOUD.COM"],
    },
    {
        label: "",
        id: "fullEmailOutput",
        name: "contact[fullEmail]",
        placeholder: "EMAIL ADDRESS",
        readonly: true,
    },
]);

// Append the container to the Defendant Wrapper
defendantWrapper.appendChild(contactInfoContainer);

// Add Event Listeners for Email Assistance
const emailUserInput = document.getElementById("emailUser");
const emailDomainInput = document.getElementById("emailDomain");
const fullEmailOutput = document.getElementById("fullEmailOutput");

if (emailUserInput && emailDomainInput && fullEmailOutput) {
    function updateCombinedEmail() {
        const username = emailUserInput.value.trim();
        const domain = emailDomainInput.value.trim();
        fullEmailOutput.value = username && domain ? `${username}@${domain}` : "";
    }

    // Attach event listeners
    emailUserInput.addEventListener("input", updateCombinedEmail);
    emailDomainInput.addEventListener("change", updateCombinedEmail);
}


// Append the container to the Defendant Wrapper
defendantWrapper.appendChild(contactInfoContainer);


   
      // Create "Residential Info Card"
      const residentialInfoCard = createCard("", [
        {
          label: "RESIDENCE:",
          id: "residenceType",
          name: "residential[type]",
          placeholder: "TYPE",
          type: "datalist",
          options: [
            "APT", "HOUSE", "CONDO", "MOBILE HOME", "TOWNHOUSE", "DUPLEX", "TRAILER", "OTHER"
          ]
        },
        {
          label: "RESIDENT:",
          id: "residentType",
          name: "residential[residentType]",
          placeholder: "TYPE",
          type: "datalist",
          options: [
            "OWN", "RENT" , "W/PARENTS"
          ]
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
            "Self", "Roommate", "Husband", "Wife", "Son", "Daughter", "Children", "Girlfriend", "Boyfriend",
            "Sibling", "Grandparent", "Grandchild", "Aunt", "Uncle", "Cousin", "Friends", "Parents", "Other"
          ]
        }
      ]);

      
defendantWrapper.appendChild(residentialInfoCard);
       // Create "Address Card"
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
          "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID",
          "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS",
          "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK",
          "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV",
          "WI", "WY"
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

  
      const residentialInfoContainer = document.createElement("div");
      residentialInfoContainer.className = "container";
      residentialInfoContainer.id = "residential-info";
  
      const containerTitle = document.createElement("h2");
      containerTitle.textContent = "Residential";
      residentialInfoContainer.appendChild(containerTitle);
  
      // Append "addressCard" and "residentialInfoCard" to container
      residentialInfoContainer.appendChild(addressCard);
      residentialInfoContainer.appendChild(residentialInfoCard);
  
      // Append container to defendant wrapper
      defendantWrapper.appendChild(residentialInfoContainer);
  
      // Hook up a zip code => city/state lookup if you want (using Google's Geocoding):
      const zipInput = document.getElementById("zipCode");
      if (zipInput) {
        zipInput.addEventListener("blur", () => {
          const zip = zipInput.value.trim();
          if (!zip) return;
  
          // We'll use Google's Geocoder with the second key—BUT we've loaded a second script
          // You can just do new google.maps.Geocoder() if the library is loaded.
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ address: zip }, (results, status) => {
            if (status === "OK" && results && results.length > 0) {
              // Typically the first result is best
              const place = results[0];
              // Parse out city/state from the address_components if present
              let cityVal = "";
              let stateVal = "";
  
              place.address_components.forEach(component => {
                const types = component.types;
                if (types.includes("locality")) {
                  cityVal = component.long_name;
                }
                if (types.includes("administrative_area_level_1")) {
                  stateVal = component.short_name; // e.g. "CA"
                }
              });
  
              // Fill in city & state if found
              const cityField = document.getElementById("city");
              const stateField = document.getElementById("state");
              if (cityField) cityField.value = cityVal;
              if (stateField) stateField.value = stateVal;
            } else {
              console.warn("Geocoding for ZIP failed or returned no results:", status);
            }
          });
        });
      }
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
  


            // Call the function to populate the Defendant section
            populateDefendantSection();
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
                    defendantWrapper.appendChild(addressCard); // Append the Address Card
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
// Ensure proper event attachment after elements are in the DOM
stateSelectInput.addEventListener("change", function () {
    if (!states.includes(stateSelectInput.value)) {
        stateSelectInput.setCustomValidity("Please select a valid state.");
    } else {
        stateSelectInput.setCustomValidity("");
    }
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

