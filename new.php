<?php ?> 
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Defendant Form</title>
</head>
<body>
    <!-- A placeholder element where the defendant section will go. -->
    <div id="defendant-section"></div>

    <script>
    document.addEventListener("DOMContentLoaded", () => {
        // ---------------------------------------------
        //  1) DEFINE ANY ARRAYS USED FOR DATALISTS
        // ---------------------------------------------
        const YES_NO_OPTIONS = ["Yes", "No"];
        const MONTH_OPTIONS = [
            "January","February","March","April","May","June",
            "July","August","September","October","November","December"
        ];
        const YEAR_OPTIONS = Array.from({ length: 51 }, (_, i) => String(1970 + i)); // 1970-2020
        const STATE_OPTIONS = [
            "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID",
            "IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS",
            "MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK",
            "OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
        ];

        // ---------------------------------------------
        //  2) HELPER FUNCTIONS
        // ---------------------------------------------

        /**
         * Dynamically return a driver’s license format for each state.
         */
        function getStateDriverLicenseFormat(state) {
            if (!state) {
                state = "Georgia"; // Default state
            }

            const stateDriverLicenseFormats = {
                "Alabama": { placeholder: "XXX-XXX-XX", pattern: "\\d{1,8}", title: "1-8 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
                "Alaska": { placeholder: "XXX-XXX-X", pattern: "\\d{1,7}", title: "1-7 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
                "Arizona": { placeholder: "A-XXX-XXX-XX", pattern: "[A-Za-z]\\d{8}", title: "1 Alpha + 8 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? alpha + "-" : num + "-") },
                "Arkansas": { placeholder: "XXX-XXX-XX", pattern: "\\d{1,8}", title: "1-8 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
                "California": { placeholder: "A-XXX-XXX-XX", pattern: "[A-Za-z]\\d{8}", title: "1 Alpha + 8 Numeric", formatFunction: (value) => value.replace(/([A-Za-z])|(\d{3})(?=\d)/g, (match, alpha, num) => alpha ? alpha + "-" : num + "-") },
                "Colorado": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
                "Connecticut": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
                // -- SNIP: Other states omitted for brevity, but keep all of yours here --
                "Georgia": { placeholder: "XXX-XXX-XXX", pattern: "\\d{9}", title: "9 Numeric", formatFunction: (value) => value.replace(/(\d{3})(?=\d)/g, "$1-") },
                // ...
                "UNKNOWN": { placeholder: "DRIVER'S LICENSE #", title: "Enter a valid driver's license based on the selected state" }
            };

            // Normalize state input for case-insensitive matching
            state = state.toLowerCase();

            for (const [key, formatObj] of Object.entries(stateDriverLicenseFormats)) {
                if (key.toLowerCase() === state) {
                    return formatObj;
                }
            }
            return stateDriverLicenseFormats["UNKNOWN"];
        }

        /**
         * SSN formatting: XXX-XX-XXXX
         */
        function formatSSN(input) {
            const ssnInput = document.getElementById("ssnInput");
            if (!ssnInput) return;

            ssnInput.addEventListener("input", () => {
                let value = ssnInput.value.replace(/\D/g, "");
                if (value.length > 9) {
                    value = value.slice(0, 9);
                }
                if (value.length <= 3) {
                    ssnInput.value = value;
                } else if (value.length <= 5) {
                    ssnInput.value = value.slice(0, 3) + "-" + value.slice(3);
                } else {
                    ssnInput.value = value.slice(0, 3) + "-" + value.slice(3, 5) + "-" + value.slice(5);
                }
            });
        }

        /**
         * Phone formatting: (XXX) XXX-XXXX
         */
        function formatPhoneNumber(input) {
            let value = input.value.replace(/\D/g, "");
            if (value.length > 3) {
                value = "(" + value.slice(0, 3) + ") " + value.slice(3);
            }
            if (value.length > 6) {
                value = value.slice(0, 9) + "-" + value.slice(9, 13);
            }
            input.value = value;
        }

        /**
         * Create an <input> group (label + input/datalist).
         */
        function createInputGroup(labelText, inputConfig) {
            const inputGroup = document.createElement("div");
            inputGroup.className = "input-group";

            const label = document.createElement("label");
            label.setAttribute("for", inputConfig.id);
            label.textContent = labelText;
            inputGroup.appendChild(label);

            let input;
            if (inputConfig.type === "datalist") {
                // Create a text <input> plus a <datalist>
                input = document.createElement("input");
                input.type = "text";
                input.id = inputConfig.id;
                input.name = inputConfig.name;
                input.placeholder = inputConfig.placeholder || "";

                const datalist = document.createElement("datalist");
                datalist.id = inputConfig.id + "-options";
                input.setAttribute("list", datalist.id);

                (inputConfig.options || []).forEach(optionValue => {
                    const optionElem = document.createElement("option");
                    optionElem.value = optionValue;
                    datalist.appendChild(optionElem);
                });

                inputGroup.appendChild(input);
                inputGroup.appendChild(datalist);
            } else {
                // Normal <input>
                input = document.createElement("input");
                input.type = inputConfig.type || "text";
                input.id = inputConfig.id;
                input.name = inputConfig.name;
                input.placeholder = inputConfig.placeholder || "";
                if (inputConfig.readonly) {
                    input.readOnly = true;
                }
                inputGroup.appendChild(input);
            }

            if (inputConfig.hidden) {
                input.style.display = "none";
            }

            return inputGroup;
        }

        /**
         * Create a card (title + sets of inputs).
         */
        function createCard(title, inputs) {
            const card = document.createElement("div");
            card.className = "card";

            const cardTitle = document.createElement("h2");
            cardTitle.textContent = title;
            card.appendChild(cardTitle);

            const cardContent = document.createElement("div");
            cardContent.className = "card-content";

            inputs.forEach(cfg => {
                const inputGroup = createInputGroup(cfg.label, cfg);
                cardContent.appendChild(inputGroup);
            });

            card.appendChild(cardContent);
            return card;
        }

        /**
         * Create a container (title + one "card" holding multiple inputs).
         */
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

            inputs.forEach(cfg => {
                const inputGroup = createInputGroup(cfg.label, cfg);
                cardContent.appendChild(inputGroup);
            });

            card.appendChild(cardContent);
            container.appendChild(card);
            return container;
        }

        /**
         * Build out the "Defendant" section (personal info, contact info, etc.).
         */
        function populateDefendantSection() {
            const defendantWrapper = document.getElementById("defendant-section");
            if (!defendantWrapper) {
                console.error("Defendant section not found!");
                return;
            }
            defendantWrapper.innerHTML = "";

            // 1) PERSONAL INFO
            const personalInfoContainer = createContainer("Personal Info", "defendant-personal", [
                { label: "NAME",      id: "firstName",  name: "defendant[firstName]",  placeholder: "FIRST",  type: "text" },
                { label: "",          id: "middleName", name: "defendant[middleName]", placeholder: "MIDDLE", type: "text" },
                { label: "",          id: "lastName",   name: "defendant[lastName]",   placeholder: "LAST",   type: "text" },
            ]);

            // Additional info: DOB, SSN, State, DL
            const additionalInfoCard = document.createElement("div");
            additionalInfoCard.className = "card";

            const additionalInfoCardContent = document.createElement("div");
            additionalInfoCardContent.className = "card-content";

            const additionalInfoInputs = [
                { label: "DOB:",   id: "dob",      name: "defendant[dob]", placeholder: "MM/DD/YYYY", type: "date" },
                { label: "SSN#:",  id: "ssnInput", name: "defendant[ssn]", placeholder: "XXX-XX-XXXX", type: "text",
                  pattern: "\\d{3}-\\d{2}-\\d{4}", title: "SSN format: XXX-XX-XXXX"
                }
            ];
            additionalInfoInputs.forEach(cfg => {
                const ig = createInputGroup(cfg.label, cfg);
                additionalInfoCardContent.appendChild(ig);
            });

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
                ]
            });
            additionalInfoCardContent.appendChild(stateInputGroup);

            const dlInputGroup = createInputGroup("DMV#:", {
                id: "dlInputConfig",
                name: "defendant[dlNumber]",
                placeholder: "DMV#",
                type: "text",
                title: "Enter a valid driver's license based on the selected state",
            });
            additionalInfoCardContent.appendChild(dlInputGroup);

            additionalInfoCard.appendChild(additionalInfoCardContent);
            personalInfoContainer.appendChild(additionalInfoCard);
            defendantWrapper.appendChild(personalInfoContainer);

            // Attach state-DL logic
            const stateDropdown = document.getElementById("state-dropdown");
            const dlInput = document.getElementById("dlInputConfig");
            if (stateDropdown && dlInput) {
                stateDropdown.addEventListener("change", () => {
                    const selectedState = stateDropdown.value.split(" (")[0]; // e.g. "Georgia"
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

            // 2) DEMOGRAPHICS
            const descriptionContainer = createContainer("Defendant Description", "defendant-description", [
                { label: "SEX:",  id: "sex",    name: "defendant[sex]",   placeholder: "SEX", type: "datalist", options: ["Male", "Female"] },
                { label: "RACE:", id: "race",   name: "defendant[race]",  placeholder: "RACE",type: "datalist", options: ["White","Black","Asian","Hispanic","Native American","Other"] },
                {
                    label: "HGT:",
                    id: "height",
                    name: "defendant[height]",
                    placeholder: "HGT",
                    type: "datalist",
                    options: [
                        "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", 
                        "5'10\"", "5'11\"", "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"", "6'6\"", "6'7\"", 
                        "6'8\"", "6'9\"", "6'10\"", "6'11\"", "7'0\""
                    ]
                },
                {
                    label: "WGT:",
                    id: "weight",
                    name: "defendant[weight]",
                    placeholder: "WGT",
                    type: "datalist",
                    options: Array.from({ length: 301 }, (_, i) => (i === 0 ? "" : i + " lbs"))
                },
                {
                    label: "HAIR:",
                    id: "hair",
                    name: "defendant[hair]",
                    placeholder: "HAIR",
                    type: "datalist",
                    options: ["Black", "Brown", "Blonde", "Red", "Gray", "Bald", "Other"]
                },
                {
                    label: "EYES:",
                    id: "eyes",
                    name: "defendant[eyes]",
                    placeholder: "EYES",
                    type: "datalist",
                    options: ["Brown", "Blue", "Green", "Hazel", "Gray", "Other"]
                }
            ]);
            defendantWrapper.appendChild(descriptionContainer);

            // 3) CONTACT INFO
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
                    options: ["Mobile","Home","Other"]
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
                    options: ["GMAIL.COM","YAHOO.COM","OUTLOOK.COM","HOTMAIL.COM","ICLOUD.COM"]
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

            // Combine email user + domain
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

            // 4) RESIDENTIAL INFO
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
                    options: Array.from({ length: 26 }, (_, i) => i === 25 ? "25 +" : i + " YRS")
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
                    options: STATE_OPTIONS
                },
                {
                    label: "",
                    id: "zipCode",
                    name: "address[zipCode]",
                    placeholder: "ZIP CODE",
                    type: "text"
                }
            ]);

            // Combine them in a container
            const residentialInfoContainer = document.createElement("div");
            residentialInfoContainer.className = "container";
            residentialInfoContainer.id = "residential-info";

            const containerTitle = document.createElement("h2");
            containerTitle.textContent = "Residential";
            residentialInfoContainer.appendChild(containerTitle);

            residentialInfoContainer.appendChild(residentialInfoCard);
            residentialInfoContainer.appendChild(addressCard);
            defendantWrapper.appendChild(residentialInfoContainer);

            // Optional Zip → City/State
            const zipInput = document.getElementById("zipCode");
            if (zipInput) {
                zipInput.addEventListener("blur", () => {
                    const zip = zipInput.value.trim();
                    if (!zip) return;
                    const geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ address: zip }, (results, status) => {
                        if (status === "OK" && results && results.length) {
                            let cityVal = "";
                            let stateVal = "";
                            results[0].address_components.forEach(component => {
                                if (component.types.includes("locality")) {
                                    cityVal = component.long_name;
                                }
                                if (component.types.includes("administrative_area_level_1")) {
                                    stateVal = component.short_name; // e.g. "CA"
                                }
                            });
                            const cityField = document.getElementById("city");
                            const stateField = document.getElementById("state");
                            if (cityField)  cityField.value  = cityVal;
                            if (stateField) stateField.value = stateVal;
                        } else {
                            console.warn("Geocoding for ZIP failed:", status);
                        }
                    });
                });
            }

            // 4b) VEHICLE
            const vehicleInputs = [
                {
                    label: "Vehicle Year",
                    id: "vehicle-year",
                    type: "datalist",
                    placeholder: "Enter vehicle year",
                    options: Array.from({ length: 15 }, (_, i) => String(2010 + i))
                },
                {
                    label: "Make",
                    id: "vehicle-make",
                    type: "datalist",
                    placeholder: "Enter vehicle make",
                    options: [
                        "Ford", "Chevrolet", "Tesla", "BMW","Toyota","Honda","Nissan","Hyundai","Mercedes-Benz","Audi",
                        "Volkswagen","Kia","Subaru","Mazda","Jeep","Dodge","Lexus","Acura","Volvo","Porsche","Jaguar",
                        "Land Rover","Ferrari","Lamborghini","Maserati","Bentley","Rolls-Royce","Aston Martin","Alfa Romeo",
                        "Infiniti","Genesis","Cadillac","Buick","Chrysler","Lincoln","Fiat","Peugeot","Citroën","Renault",
                        "Skoda","SEAT","Mini","Mitsubishi","Suzuki","Saab","Isuzu","GMC","Ram","Bugatti","McLaren",
                        "Pagani","Koenigsegg","Rivian"
                    ]
                },
                {
                    label: "Model",
                    id: "vehicle-model",
                    type: "datalist",
                    placeholder: "Enter vehicle model",
                    options: []
                },
                {
                    label: "Color",
                    id: "vehicle-color",
                    type: "datalist",
                    placeholder: "Enter vehicle color",
                    options: [
                        "White","Black","Silver","Gray","Red","Blue","Green","Yellow","Orange","Brown","Beige","Gold",
                        "Cream","Navy","Maroon","Wine","Burgundy","Magenta","Pink","Turquoise","Teal","Lavender","Plum",
                        "Purple","Sand","Bronze","Copper","Charcoal","Gunmetal","Lime","Mint","Pastel Blue","Pastel Green",
                        "Pastel Yellow","Ivory","Pearl","Khaki","Champagne","Chocolate","Cobalt","Crimson","Midnight Blue",
                        "Forest Green","Army Green","Brick Red","Desert Sand","Graphite","Titanium","Azure","Indigo"
                    ]
                },
                {
                    label: "Tag #",
                    id: "vehicle-tag",
                    type: "text",
                    placeholder: "License plate"
                }
            ];
            const vehicleInfo = createContainer("Vehicle Information", "vehicle-section", vehicleInputs);
            defendantWrapper.appendChild(vehicleInfo);

            // Car data for dynamic "vehicle-model" population
            const carData = {
                "Ford": ["Focus","Mustang","F-150","Explorer","Escape"],
                "Chevrolet": ["Malibu","Camaro","Silverado","Tahoe","Suburban"],
                "Tesla": ["Model S","Model 3","Model X","Model Y","Cybertruck"],
                // ... etc. for each make ...
            };

            // Populate model datalist after user chooses "Make"
            const vehicleMakeInput = document.getElementById("vehicle-make");
            if (vehicleMakeInput) {
                vehicleMakeInput.addEventListener("input", () => {
                    const make = vehicleMakeInput.value.trim();
                    const modelDatalist = document.getElementById("vehicle-model-options");
                    if (!modelDatalist) return;
                    modelDatalist.innerHTML = "";
                    if (carData[make]) {
                        carData[make].forEach(modelName => {
                            const opt = document.createElement("option");
                            opt.value = modelName;
                            modelDatalist.appendChild(opt);
                        });
                    }
                });
            }
        }

        /**
         * Setup Google Places autocomplete for the #street input.
         */
        function initAutocomplete() {
            const streetInput = document.getElementById("street");
            if (!streetInput) {
                console.warn("No #street input found for autocomplete");
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

                // Combine street number + route
                if (foundStreetNumber && foundRoute) {
                    streetInput.value = foundStreetNumber + " " + foundRoute;
                }

                const cityField = document.getElementById("city");
                if (cityField) cityField.value = foundCity;
                const stateField = document.getElementById("state");
                if (stateField) stateField.value = foundState;
                const zipField = document.getElementById("zipCode");
                if (zipField) zipField.value = foundZip;
            });
        }

        // ---------------------------------------------
        //  3) MAIN EXECUTION WITHIN DOMContentLoaded
        // ---------------------------------------------

        // Create the Google Maps script for Places, setting a global callback
        const placesApiKey = "AIzaSyBmX2NTZzTOF_bf32YcmIsNa4d1obR0DPo";
        window.initPlacesAutocomplete = function() {
            console.log("Places script loaded. Now we can set up autocomplete.");
            initAutocomplete();
        };
        const scriptPlaces = document.createElement("script");
        scriptPlaces.src = `https://maps.googleapis.com/maps/api/js?key=${placesApiKey}&libraries=places&callback=initPlacesAutocomplete`;
        scriptPlaces.async = true;
        scriptPlaces.defer = true;
        document.head.appendChild(scriptPlaces);

        // Grab #defendant-section and build out the form
        const defendantWrapper = document.getElementById("defendant-section");
        if (!defendantWrapper) {
            console.error("No #defendant-section found in the DOM!");
            return;
        }

        // Populate the entire defendant section
        populateDefendantSection();

        // 1) EMPLOYMENT INFO
        const employmentContainer = document.createElement("div");
        employmentContainer.className = "container";
        employmentContainer.id = "employment-info";

        const employmentTitle = document.createElement("h2");
        employmentTitle.textContent = "Employment Info";
        employmentContainer.appendChild(employmentTitle);

        const currentEmployerCard = createCard("Current Employer", [
            { label: "Employer:",  id: "currentEmployer",     name: "employment[currentEmployer]",     placeholder: "Company Name",   type: "text" },
            { label: "City:",      id: "currentEmployerCity", name: "employment[currentEmployerCity]", placeholder: "City",           type: "text" },
            { label: "State:",     id: "currentEmployerState",name: "employment[currentEmployerState]",type: "datalist",placeholder:"State", options: STATE_OPTIONS },
            { label: "Phone #:",   id: "currentEmployerPhone",name: "employment[currentEmployerPhone]",placeholder:"(XXX) XXX-XXXX",  type: "text" }
        ]);
        employmentContainer.appendChild(currentEmployerCard);

        const previousEmployerCard = createCard("Previous Employer", [
            { label: "Employer:",  id: "previousEmployer",     name: "employment[previousEmployer]",     placeholder: "Previous Company", type: "text" },
            { label: "City:",      id: "previousEmployerCity", name: "employment[previousEmployerCity]", placeholder: "City",             type: "text" },
            { label: "State:",     id: "previousEmployerState",name: "employment[previousEmployerState]",type:"datalist",placeholder:"State", options: STATE_OPTIONS },
            { label: "End Date:",  id: "endDate",              name: "employment[endDate]",              placeholder: "MM/DD/YYYY",       type: "date" }
        ]);
        employmentContainer.appendChild(previousEmployerCard);

        defendantWrapper.appendChild(employmentContainer);

        // 2) PREVIOUS ARREST
        const arrestContainer = createContainer("Previous Arrest", "previous-arrest", [
            { label: "Previous Arrest?", id: "previousArrestYesNo", name: "arrest[yesNo]", type: "datalist", placeholder: "Yes or No", options: YES_NO_OPTIONS },
            { label: "County:",          id: "previousArrestCounty", name: "arrest[county]",  type: "text", placeholder: "County" },
            { label: "Month of Arrest:", id: "arrestMonth",          name: "arrest[month]",   type: "datalist", placeholder: "Select Month", options: MONTH_OPTIONS },
            { label: "Year of Arrest:",  id: "arrestYear",           name: "arrest[year]",    type: "datalist", placeholder: "Select Year",  options: YEAR_OPTIONS },
            { label: "Bonding Company:", id: "bondingCompanyUsed",   name: "arrest[bondingCompany]", type: "text", placeholder: "Name of Company" },
            { label: "How?",             id: "arrestHow",            name: "arrest[how]",    type: "text", placeholder: "Details" },
            { label: "On Probation?",    id: "probationYesNo",       name: "arrest[probation]", type: "datalist", placeholder: "Yes or No", options: YES_NO_OPTIONS },
            { label: "Officer Name:",    id: "probationOfficer",     name: "arrest[probationOfficer]", type: "text", placeholder: "Probation/Parole Officer" },
            { label: "Officer County:",  id: "probationCounty",      name: "arrest[probationCounty]",  type: "text", placeholder: "County" }
        ]);
        defendantWrapper.appendChild(arrestContainer);

        // 3) SPOUSE
        const spouseContainer = createContainer("Defendant Spouse", "defendant-spouse", [
            { label: "First Name:", id: "spouseFirst", name: "spouse[first]", placeholder: "First Name", type: "text" },
            { label: "Last Name:",  id: "spouseLast",  name: "spouse[last]",  placeholder: "Last Name",  type: "text" },
            { label: "Phone #:",    id: "spousePhone", name: "spouse[phone]", placeholder: "(XXX) XXX-XXXX", type: "text" },
            { label: "Email:",      id: "spouseEmail", name: "spouse[email]", placeholder: "username@example.com", type: "text" }
        ]);
        defendantWrapper.appendChild(spouseContainer);

        // 4) MOTHER
        const motherContainer = createContainer("Defendant's Mother", "mother-info", [
            { label: "First Name:", id: "motherFirst", name: "mother[first]", placeholder: "First Name", type: "text" },
            { label: "Last Name:",  id: "motherLast",  name: "mother[last]",  placeholder: "Last Name",  type: "text" },
            { label: "City:",       id: "motherCity",  name: "mother[city]",  placeholder: "City",       type: "text" },
            { label: "State:",      id: "motherState", name: "mother[state]", type: "datalist", placeholder: "State", options: STATE_OPTIONS },
            { label: "Phone #:",    id: "motherPhone", name: "mother[phone]", placeholder: "(XXX) XXX-XXXX", type: "text" }
        ]);
        defendantWrapper.appendChild(motherContainer);

        // 5) FATHER
        const fatherContainer = createContainer("Defendant's Father", "father-info", [
            { label: "First Name:", id: "fatherFirst", name: "father[first]", placeholder: "First Name", type: "text" },
            { label: "Last Name:",  id: "fatherLast",  name: "father[last]",  placeholder: "Last Name",  type: "text" },
            { label: "City:",       id: "fatherCity",  name: "father[city]",  placeholder: "City",       type: "text" },
            { label: "State:",      id: "fatherState", name: "father[state]", type: "datalist", placeholder: "State", options: STATE_OPTIONS },
            { label: "Phone #:",    id: "fatherPhone", name: "father[phone]", placeholder: "(XXX) XXX-XXXX", type: "text" }
        ]);
        defendantWrapper.appendChild(fatherContainer);

        // 6) REFERENCES
        const referencesContainer = document.createElement("div");
        referencesContainer.className = "container";
        referencesContainer.id = "reference-info";

        const referencesTitle = document.createElement("h2");
        referencesTitle.textContent = "References";
        referencesContainer.appendChild(referencesTitle);

        const refCount = 2;
        for (let i = 1; i <= refCount; i++) {
            const refCard = createCard(`Reference #${i}`, [
                { label: "First Name:", id: `reference${i}First`, name: `reference[${i}][first]`, placeholder: "First Name", type: "text" },
                { label: "Last Name:",  id: `reference${i}Last`,  name: `reference[${i}][last]`,  placeholder: "Last Name",  type: "text" },
                { label: "City:",       id: `reference${i}City`,  name: `reference[${i}][city]`,  placeholder: "City",       type: "text" },
                { label: "State:",      id: `reference${i}State`, name: `reference[${i}][state]`, placeholder: "State",      type: "datalist", options: STATE_OPTIONS },
                { label: "Phone #:",    id: `reference${i}Phone`, name: `reference[${i}][phone]`, placeholder: "(XXX) XXX-XXXX", type: "text" }
            ]);
            referencesContainer.appendChild(refCard);
        }
        defendantWrapper.appendChild(referencesContainer);

        // 7) ATTORNEY
        const attorneyContainer = createContainer("Defendant's Attorney", "attorney-info", [
            { label: "First Name:", id: "attorneyFirst", name: "attorney[first]", placeholder: "First Name", type: "text" },
            { label: "Last Name:",  id: "attorneyLast",  name: "attorney[last]",  placeholder: "Last Name",  type: "text" },
            { label: "Phone #:",    id: "attorneyPhone", name: "attorney[phone]", placeholder: "(XXX) XXX-XXXX", type: "text" }
        ]);
        defendantWrapper.appendChild(attorneyContainer);

        // CALL SSN & Phone Format on relevant fields
        const ssnElement = document.getElementById("ssnInput");
        if (ssnElement) {
            // When user types in SSN
            ssnElement.addEventListener("input", function (e) {
                formatSSN(e.target);
            });
        }

        const phoneElement = document.getElementById("phoneInput");
        if (phoneElement) {
            // When user types in phone
            phoneElement.addEventListener("input", function (e) {
                formatPhoneNumber(e.target);
            });
        }

        // Height formatting
        const heightInput = document.getElementById("height");
        if (heightInput) {
            heightInput.addEventListener("input", () => {
                let numericString = heightInput.value.replace(/[^0-9]/g, "");
                if (!numericString) {
                    heightInput.value = "";
                    return;
                }
                let feet = parseInt(numericString.substring(0, 1), 10) || 0;
                let inches = parseInt(numericString.substring(1), 10) || 0;
                if (inches > 11) {
                    inches = inches % 10; 
                }
                if (numericString.length === 1) {
                    heightInput.value = feet;
                } else {
                    heightInput.value = `${feet}'${inches}"`;
                }
            });
        }

        // Weight formatting
        const weightInput = document.getElementById("weight");
        if (weightInput) {
            weightInput.addEventListener("blur", () => {
                const value = weightInput.value.replace(/[^0-9]/g, "");
                if (value) {
                    weightInput.value = parseInt(value, 10) + " lbs";
                } else {
                    weightInput.value = "";
                }
            });
        }

        // Show/hide APT field if user chooses "APT"
        const residenceTypeInput = document.getElementById("residenceType");
        const residentTypeInput = document.getElementById("residentType");
        const aptField = document.getElementById("apt");
        if (aptField) {
            aptField.style.display = "none";
        }
        if (residenceTypeInput && residentTypeInput && aptField) {
            residenceTypeInput.addEventListener("input", () => {
                if (residenceTypeInput.value === "APT") {
                    residentTypeInput.value = "Rent";
                    aptField.style.display = "inline-block";
                } else {
                    aptField.style.display = "none";
                }
            });
        }

        // If you have special nav buttons somewhere (e.g., .section-buttons button)
        // that jump to sections:
        const navButtons = document.querySelectorAll(".section-buttons button");
        navButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const targetId = btn.getAttribute("data-target");
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    document
                      .querySelectorAll(".container-wrapper")
                      .forEach(sec => sec.classList.remove("active"));
                    targetSection.classList.add("active");
                    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                    console.error(`Section with ID "${targetId}" not found.`);
                }
            });
        });

    }); // END of DOMContentLoaded
    </script>
</body>
</html>
