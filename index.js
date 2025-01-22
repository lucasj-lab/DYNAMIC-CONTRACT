document.addEventListener("DOMContentLoaded", () => {

    
    function formatSSN(input) {
        let value = input.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length > 3) {
            value = `${value.slice(0, 3)}-${value.slice(3)}`;
        }
        if (value.length > 6) {
            value = `${value.slice(0, 6)}-${value.slice(6, 9)}`;
        }
        input.value = value;
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

        const label = document.createElement("label");
        label.setAttribute("for", inputConfig.id);
        label.textContent = labelText;

        let input;
        if (inputConfig.type === "datalist") {
            input = document.createElement("input");
            input.type = "text";
            input.id = inputConfig.id;
            input.name = inputConfig.name;
            input.placeholder = inputConfig.placeholder || "";

            const datalist = document.createElement("datalist");
            datalist.id = `${inputConfig.id}-options`;
            input.setAttribute("list", datalist.id);

            inputConfig.options.forEach(option => {
                const optionElem = document.createElement("option");
                optionElem.value = option;
                datalist.appendChild(optionElem);
            });

            inputGroup.appendChild(datalist);
        } else {
            input = document.createElement("input");
            input.type = inputConfig.type || "text";
            input.id = inputConfig.id;
            input.name = inputConfig.name;
            input.placeholder = inputConfig.placeholder || "";
        }

        inputGroup.appendChild(label);
        inputGroup.appendChild(input);

        return inputGroup;

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

    

    const dlInputConfig = {
        stateDropdownId: "state-dropdown",
    };
    const stateLicenseFormats = {
        Alabama: /(^\d{1,8}$)/,
        Alaska: /(^\d{1,7}$)/,
        Arizona: /(^[A-Z]\d{8}$|^\d{9}$)/,
        Arkansas: /(^\d{4,9}$)/,
        California: /(^[A-Z]\d{7}$)/,
        Colorado: /(^\d{9}$|^[A-Z]\d{3,6}$|^[A-Z]{2}\d{2,5}$)/,
        Connecticut: /(^\d{9}$)/,
        Delaware: /(^\d{1,7}$)/,
        "District of Columbia": /(^\d{7}$|^\d{9}$)/,
        Florida: /(^[A-Z]\d{12}$)/,
        Georgia: /(^\d{7,9}$)/,
        Hawaii: /(^[A-Z]\d{8}$|^\d{9}$)/,
        Idaho: /(^[A-Z]{2}\d{6}[A-Z]$|^\d{9}$)/,
        Illinois: /(^[A-Z]\d{11,12}$)/,
        Indiana: /(^[A-Z]\d{9}$|^\d{9,10}$)/,
        Iowa: /(^\d{9}$|^\d{3}[A-Z]{2}\d{4}$)/,
        Kansas: /(^[A-Z]\d[A-Z]\d[A-Z]$|^[A-Z]\d{8}$|^\d{9}$)/,
        Kentucky: /(^[A-Z]\d{8}$|^[A-Z]\d{9}$|^\d{9}$)/,
        Louisiana: /(^\d{1,9}$)/,
        Maine: /(^\d{7}$|^\d{7}[A-Z]$|^\d{8}$)/,
        Maryland: /(^[A-Z]\d{12}$)/,
        Massachusetts: /(^[A-Z]\d{8}$|^\d{9}$)/,
        Michigan: /(^[A-Z]\d{10}$|^[A-Z]\d{12}$)/,
        Minnesota: /(^[A-Z]\d{12}$)/,
        Mississippi: /(^\d{9}$)/,
        Missouri: /(^\d{3}[A-Z]\d{6}$|^[A-Z]\d{5,9}$|^[A-Z]\d{6}R$|^\d{8}[A-Z]{2}$|^\d{9}[A-Z]$|^\d{9}$)/,
        Montana: /(^[A-Z]\d{8}$|^\d{9}$|^\d{13,14}$)/,
        Nebraska: /(^[A-Z]\d{6,8}$)/,
        Nevada: /(^\d{9,10}$|^\d{12}$|^X\d{8}$)/,
        "New Hampshire": /(^\d{2}[A-Z]{3}\d{5}$)/,
        "New Jersey": /(^[A-Z]\d{14}$)/,
        "New Mexico": /(^\d{8,9}$)/,
        "New York": /(^[A-Z]\d{7}$|^[A-Z]\d{18}$|^\d{8,9}$|^\d{16}$|^[A-Z]{8}$)/,
        "North Carolina": /(^\d{1,12}$)/,
        "North Dakota": /(^[A-Z]{3}\d{6}$|^\d{9}$)/,
        Ohio: /(^[A-Z]\d{4,8}$|^[A-Z]{2}\d{3,7}$|^\d{8}$)/,
        Oklahoma: /(^[A-Z]\d{9}$|^\d{9}$)/,
        Oregon: /(^\d{1,9}$)/,
        Pennsylvania: /(^\d{8}$)/,
        "Rhode Island": /(^\d{7}$|^[A-Z]\d{6}$)/,
        "South Carolina": /(^\d{5,11}$)/,
        "South Dakota": /(^\d{6,10}$|^\d{12}$)/,
        Tennessee: /(^\d{7,9}$)/,
        Texas: /(^\d{7,8}$)/,
        Utah: /(^\d{4,10}$)/,
        Vermont: /(^\d{8}$|^\d{7}A$)/,
        Virginia: /(^[A-Z]\d{8,11}$|^\d{9}$)/,
        Washington: /(^[A-Z]{1,7}[A-Z\d]{5}$)/i,
        "West Virginia": /(^\d{7}$|^[A-Z]{1,2}\d{5,6}$)/,
        Wisconsin: /(^[A-Z]\d{13}$)/,
        Wyoming: /(^\d{9,10}$)/
    };

    
  // Create the state dropdown
const states = Object.keys(stateLicenseFormats);
const stateDatalist = document.createElement("datalist");
stateDatalist.id = dlInputConfig.stateDropdownId;

states.forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    stateDatalist.appendChild(option);
});


function updateCombinedEmail() {
  const username = document.getElementById("emailUser").value.trim();
  const domain = document.getElementById("emailDomain").value;
  const combinedEmail = username + "@" + domain;

  const combinedOutput = document.getElementById("fullEmailOutput");
  if (combinedOutput) {
    combinedOutput.value = combinedEmail;
  }
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
            { label: "FIRST:", id: "firstName", name: "defendant[firstName]", placeholder:"FIRST", type: "text" },
            { label: "MIDDLE:", id: "middleName", name: "defendant[middleName]", placeholder:"MIDDLE", type: "text" },
            { label: "LAST:", id: "lastName", name: "defendant[lastName]", placeholder:"LAST", type: "text" },
            
        ]);
        

// Add a new card for additional details
const additionalInfoCard = document.createElement("div");
additionalInfoCard.className = "card"; // Use the same styling class for a consistent appearance

const additionalInfoCardContent = document.createElement("div");
additionalInfoCardContent.className = "card-content";

// Add input fields for Date of Birth, Social Security Number, and Driver's License
const additionalInfoInputs = [
    { label: "DATE OF BIRTH:", id: "dob", name: "defendant[dob]", placeholder: "MM/DD/YYYY", type: "date" },
    { label: "SOCIAL SECURITY #:", id: "ssnInput", name: "defendant[ssn]", placeholder: "XXX-XX-XXXX", type: "text",  pattern: "\d{3}-\d{2}-\d{4}", title: "SSN format: XXX-XX-XXXX"},
    { 
        label: "STATE:", 
        id: "state-dropdown", // Matches dlInputConfig.stateDropdownId
        name: "defendant[state]", 
        placeholder: "Select State", 
        type: "datalist", 
        options: Object.keys(stateLicenseFormats) // Generate state options dynamically
    },
    { 
        label: "DRIVER'S LICENSE #:", 
        id: "dlInputConfig", // Clear, descriptive ID for the driver's license input
        name: "defendant[dlNumber]", 
        placeholder: "DRIVER'S LICENSE #", 
        type: "text", 
        pattern: ".*", 
        stateDropdownId: "state-dropdown", // Matches dlInputConfig.stateDropdownId
        title: "Enter a valid driver's license based on the selected state"
    }
];
additionalInfoInputs.forEach(inputConfig => {
    const inputGroup = document.createElement("div");
    inputGroup.className = "input-group";

    const label = document.createElement("label");
    label.setAttribute("for", inputConfig.id); // Use correct `id` for label
    label.textContent = inputConfig.label;

    const input = document.createElement("input");
    input.type = inputConfig.type || "text";
    input.id = inputConfig.id; // Assign correct `id` to input
    input.name = inputConfig.name;
    input.placeholder = inputConfig.placeholder;

    if (inputConfig.type === "datalist") {
        const datalist = document.createElement("datalist");
        datalist.id = inputConfig.id;

        inputConfig.options.forEach(option => {
            const optionElem = document.createElement("option");
            optionElem.value = option;
            datalist.appendChild(optionElem);
        });

        input.setAttribute("list", datalist.id);
        inputGroup.appendChild(datalist);
    }

    inputGroup.appendChild(label);
    inputGroup.appendChild(input);
    additionalInfoCardContent.appendChild(inputGroup);
});

additionalInfoCard.appendChild(additionalInfoCardContent);
personalInfoContainer.appendChild(additionalInfoCard);

defendantWrapper.appendChild(personalInfoContainer);
        defendantWrapper.appendChild(personalInfoContainer);

        // Add Demographics
        const demographicsContainer = createContainer("Demographics", "defendant-demographics", [
            { label: "SEX:", id: "sex", name: "defendant[sex]", placeholder:"SEX", type: "datalist", options: ["Male", "Female"] },
            { label:  "RACE:", id: "race", name: "defendant[race]", placeholder:"RACE", type: "datalist", options: ["White", "Black", "Asian", "Hispanic", "Native American", "Other"] },
            { label: "HGT:", id: "height", name: "defendant[height]", placeholder: "HGT", type:  "datalist", options: [
                "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"",
                "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"", "6'6\"", "6'7\"", "6'8\"", "6'9\"", "6'10\"", "6'11\"", "7'0\""
            ] },
            { label: "WGT:", id: "weight", name: "defendant[weight]", placeholder: "WGT", type: "datalist", options: [
              "125 lbs", "126 lbs", "127 lbs", "128 lbs", "129 lbs", "130 lbs", "131 lbs", "132 lbs", "133 lbs", "134 lbs", "135 lbs", "136 lbs", "137 lbs", "138 lbs", "139 lbs", "140 lbs",
"141 lbs", "142 lbs", "143 lbs", "144 lbs", "145 lbs", "146 lbs", "147 lbs", "148 lbs", "149 lbs", "150 lbs", "151 lbs", "152 lbs", "153 lbs", "154 lbs", "155 lbs", "156 lbs", 
"157 lbs", "158 lbs", "159 lbs", "160 lbs", "161 lbs", "162 lbs", "163 lbs", "164 lbs", "165 lbs", "166 lbs", "167 lbs", "168 lbs", "169 lbs", "170 lbs", "171 lbs", "172 lbs", 
"173 lbs", "174 lbs", "175 lbs", "176 lbs", "177 lbs", "178 lbs", "179 lbs", "180 lbs", "181 lbs", "182 lbs", "183 lbs", "184 lbs", "185 lbs", "186 lbs", "187 lbs", "188 lbs", 
"189 lbs", "190 lbs", "191 lbs", "192 lbs", "193 lbs", "194 lbs", "195 lbs", "196 lbs", "197 lbs", "198 lbs", "199 lbs", "200 lbs", "201 lbs", "202 lbs", "203 lbs", "204 lbs", 
"205 lbs", "206 lbs", "207 lbs", "208 lbs", "209 lbs", "210 lbs", "211 lbs", "212 lbs", "213 lbs", "214 lbs", "215 lbs", "216 lbs", "217 lbs", "218 lbs", "219 lbs", "220 lbs", 
"221 lbs", "222 lbs", "223 lbs", "224 lbs", "225 lbs", "226 lbs", "227 lbs", "228 lbs", "229 lbs", "230 lbs", "231 lbs", "232 lbs", "233 lbs", "234 lbs", "235 lbs", "236 lbs", 
"237 lbs", "238 lbs", "239 lbs", "240 lbs", "241 lbs", "242 lbs", "243 lbs", "244 lbs", "245 lbs", "246 lbs", "247 lbs", "248 lbs", "249 lbs", "250 lbs", "251 lbs", "252 lbs", 
"253 lbs", "254 lbs", "255 lbs", "256 lbs", "257 lbs", "258 lbs", "259 lbs", "260 lbs", "261 lbs", "262 lbs", "263 lbs", "264 lbs", "265 lbs", "266 lbs", "267 lbs", "268 lbs", 
"269 lbs", "270 lbs", "271 lbs", "272 lbs", "273 lbs", "274 lbs", "275 lbs", "276 lbs", "277 lbs", "278 lbs", "279 lbs", "280 lbs", "281 lbs", "282 lbs", "283 lbs", "284 lbs", 
"285 lbs", "286 lbs", "287 lbs", "288 lbs", "289 lbs", "290 lbs", "291 lbs", "292 lbs", "293 lbs", "294 lbs", "295 lbs", "296 lbs", "297 lbs", "298 lbs", "299 lbs", "300 lbs", 
"301 lbs", "302 lbs", "303 lbs", "304 lbs", "305 lbs", "306 lbs", "307 lbs", "308 lbs", "309 lbs", "310 lbs", "311 lbs", "312 lbs", "313 lbs", "314 lbs", "315 lbs", "316 lbs", 
"317 lbs", "318 lbs", "319 lbs", "320 lbs", "321 lbs", "322 lbs", "323 lbs", "324 lbs", "325 lbs", "326 lbs", "327 lbs", "328 lbs", "329 lbs", "330 lbs", "331 lbs", "332 lbs", 
"333 lbs", "334 lbs", "335 lbs", "336 lbs", "337 lbs", "338 lbs", "339 lbs", "340 lbs", "341 lbs", "342 lbs", "343 lbs", "344 lbs", "345 lbs", "346 lbs", "347 lbs", "348 lbs", 
"349 lbs", "350 lbs", "351 lbs", "352 lbs", "353 lbs", "354 lbs", "355 lbs", "356 lbs", "357 lbs", "358 lbs", "359 lbs", "360 lbs", "361 lbs", "362 lbs", "363 lbs", "364 lbs", 
"365 lbs", "366 lbs", "367 lbs", "368 lbs", "369 lbs", "370 lbs", "371 lbs", "372 lbs", "373 lbs", "374 lbs", "375 lbs", "376 lbs", "377 lbs", "378 lbs", "379 lbs", "380 lbs", 
"381 lbs", "382 lbs", "383 lbs", "384 lbs", "385 lbs", "386 lbs", "387 lbs", "388 lbs", "389 lbs", "390 lbs", "391 lbs", "392 lbs", "393 lbs", "394 lbs", "395 lbs", "396 lbs", 
"397 lbs", "398 lbs", "399 lbs", "400 lbs", "401 lbs", "402 lbs", "403 lbs", "404 lbs", "405 lbs", "406 lbs", "407 lbs", "408 lbs", "409 lbs", "410 lbs", "411 lbs", "412 lbs", 
"413 lbs", "414 lbs", "415 lbs", "416 lbs", "417 lbs", "418 lbs", "419 lbs", "420 lbs", "421 lbs", "422 lbs", "423 lbs", "424 lbs", "425 lbs", "426 lbs", "427 lbs", "428 lbs", 
"429 lbs", "430 lbs", "431 lbs", "432 lbs", "433 lbs", "434 lbs", "435 lbs", "436 lbs", "437 lbs", "438 lbs", "439 lbs", "440 lbs", "441 lbs", "442 lbs", "443 lbs", "444 lbs", 
"445 lbs", "446 lbs", "447 lbs", "448 lbs", "449 lbs", "450 lbs", "451 lbs", "452 lbs", "453 lbs", "454 lbs", "455 lbs", "456 lbs", "457 lbs", "458 lbs", "459 lbs", "460 lbs", 
"461 lbs", "462 lbs", "463 lbs", "464 lbs", "465 lbs", "466 lbs", "467 lbs", "468 lbs", "469 lbs", "470 lbs", "471 lbs", "472 lbs", "473 lbs", "474 lbs", "475 lbs", "476 lbs", 
"477 lbs", "478 lbs", "479 lbs", "480 lbs", "481 lbs", "482 lbs", "483 lbs", "484 lbs", "485 lbs", "486 lbs", "487 lbs", "488 lbs", "489 lbs", "490 lbs", "491 lbs", "492 lbs", 
"493 lbs", "494 lbs", "495 lbs", "496 lbs", "497 lbs", "498 lbs", "499 lbs", "500 lbs"

            ] },
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
        title: "Phone number format: (XXX) XXX-XXXX"
    },
    { label: "DEVICE TYPE:", id: "deviceTypeDefault", name: "contact[deviceType]", placeholder: "DEVICE TYPE", type: "datalist", options: ["Mobile", "Home", "Other"] },
   {
    label: "EMAIL USERNAME:",
    id: "emailUser",
    name: "contact[emailUser]",
    placeholder: "Enter Username",
    type: "text",
    oninput: "updateCombinedEmail()",
  },
  {
    label: "EMAIL DOMAIN:",
    id: "emailDomain",
    name: "contact[emailDomain]",
    type: "datalist",
    options: ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com"],
    onchange: "updateCombinedEmail()",
  },
  {
    label: "COMBINED EMAIL:",
    id: "fullEmailOutput",
    name: "contact[fullEmail]",
    placeholder: "Full Email",
    type: "text",
    readonly: true,
  },
]);

// Append the container to the Defendant Wrapper
defendantWrapper.appendChild(contactInfoContainer);

    
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

