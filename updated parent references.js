/********************************************************************
 * Use the same helper functions you already have:
 *    createInputGroup(labelText, inputConfig)
 *    createCard(title, inputs)
 *    createContainer(title, containerId, inputs)
 *
 * Then define the new function(s) to create and append your new sections.
 ********************************************************************/

/**
 * Call this function after populateDefendantSection() to add
 * Employment Info, Previous Arrest, Spouse, Mother, Father,
 * References, and Attorney containers.
 */
function populateAdditionalSections() {
    // 1) EMPLOYMENT INFO
    const employmentContainer = document.createElement("div");
    employmentContainer.className = "container";
    employmentContainer.id = "employment-info";

    // Container title
    const employmentTitle = document.createElement("h2");
    employmentTitle.textContent = "Employment Info";
    employmentContainer.appendChild(employmentTitle);

    // ---- a) Current Employment Card
    const currentEmploymentCard = createCard("Current Employer", [
        {
            label: "Employer:",
            id: "currentEmployer",
            name: "employment[currentEmployer]",
            placeholder: "Company Name",
            type: "text"
        },
        {
            label: "City:",
            id: "currentEmployerCity",
            name: "employment[currentEmployerCity]",
            placeholder: "City",
            type: "text"
        },
        {
            label: "State:",
            id: "currentEmployerState",
            name: "employment[currentEmployerState]",
            placeholder: "State",
            type: "text"
        },
        {
            label: "Phone #:",
            id: "currentEmployerPhone",
            name: "employment[currentEmployerPhone]",
            placeholder: "(XXX) XXX-XXXX",
            type: "text"
        }
    ]);
    employmentContainer.appendChild(currentEmploymentCard);

    // ---- b) Previous Employment Card
    const previousEmploymentCard = createCard("Previous Employer", [
        {
            label: "Employer:",
            id: "previousEmployer",
            name: "employment[previousEmployer]",
            placeholder: "Previous Company",
            type: "text"
        },
        {
            label: "City:",
            id: "previousEmployerCity",
            name: "employment[previousEmployerCity]",
            placeholder: "City",
            type: "text"
        },
        {
            label: "State:",
            id: "previousEmployerState",
            name: "employment[previousEmployerState]",
            placeholder: "State",
            type: "text"
        },
        {
            label: "End Date:",
            id: "endDate",
            name: "employment[endDate]",
            placeholder: "MM/DD/YYYY",
            type: "date"
        }
    ]);
    employmentContainer.appendChild(previousEmploymentCard);

    // Append the entire Employment Info container
    const additionalSectionsWrapper = document.getElementById("additional-sections-wrapper");
    additionalSectionsWrapper.appendChild(employmentContainer);

    // 2) PREVIOUS ARREST
    const arrestContainer = document.createElement("div");
    arrestContainer.className = "container";
    arrestContainer.id = "previous-arrest";

    const arrestTitle = document.createElement("h2");
    arrestTitle.textContent = "Previous Arrest";
    arrestContainer.appendChild(arrestTitle);

    // We’ll do a single card with all the fields mentioned
    const previousArrestCard = createCard("", [
        {
            label: "Have Previous Arrest?",
            id: "previousArrestYesNo",
            name: "arrest[yesNo]",
            type: "datalist",
            placeholder: "Select Yes or No",
            options: ["Yes", "No"]
        },
        {
            label: "County:",
            id: "previousArrestCountyInput",
            name: "arrest[county]",
            placeholder: "County of Arrest",
            type: "text"
        },
        {
            label: "Month of Arrest:",
            id: "arrestMonth",
            name: "arrest[month]",
            type: "datalist",
            placeholder: "Select Month",
            options: [
                "January","February","March","April","May","June",
                "July","August","September","October","November","December"
            ]
        },
        {
            label: "Year of Arrest:",
            id: "arrestYear",
            name: "arrest[year]",
            type: "datalist",
            placeholder: "Select Year",
            options: ["2030","2029","2028","2027","2026","2025","2024","2023","2022","2021","2020",
                      "2019","2018","2017","2016","2015","2014","2013","2012","2011","2010",
                      "2009","2008","2007","2006","2005","2004","2003","2002","2001","2000",
                      "1999","1998","1997","1996","1995","1994","1993","1992","1991","1990"]
        },
        {
            label: "Bonding Company:",
            id: "bondingCompanyUsed",
            name: "arrest[bondingCompany]",
            placeholder: "Enter Name",
            type: "text"
        },
        {
            label: "How?",
            id: "arrestHow",
            name: "arrest[how]",
            placeholder: "Details",
            type: "text"
        },
        {
            label: "On Probation?",
            id: "probationYesNo",
            name: "arrest[probation]",
            type: "datalist",
            placeholder: "Select Yes or No",
            options: ["Yes", "No"]
        },
        {
            label: "Probation/Parole Officer Name:",
            id: "probationOfficer",
            name: "arrest[probationOfficer]",
            placeholder: "Officer Name",
            type: "text"
        },
        {
            label: "Probation County:",
            id: "probationCounty",
            name: "arrest[probationCounty]",
            placeholder: "County",
            type: "text"
        }
    ]);
    arrestContainer.appendChild(previousArrestCard);
    additionalSectionsWrapper.appendChild(arrestContainer);

    // 3) DEFENDANT SPOUSE
    const spouseContainer = createContainer("Defendant Spouse", "defendant-spouse", [
        {
            label: "First Name:",
            id: "spouseFirst",
            name: "spouse[first]",
            placeholder: "First Name",
            type: "text"
        },
        {
            label: "Last Name:",
            id: "spouseLast",
            name: "spouse[last]",
            placeholder: "Last Name",
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
            placeholder: "Email",
            type: "text"
        }
    ]);
    additionalSectionsWrapper.appendChild(spouseContainer);

    // 4) DEFENDANT’S MOTHER
    const motherContainer = createContainer("Defendant's Mother", "mother-info", [
        {
            label: "First Name:",
            id: "motherFirst",
            name: "mother[first]",
            placeholder: "First Name",
            type: "text"
        },
        {
            label: "Last Name:",
            id: "motherLast",
            name: "mother[last]",
            placeholder: "Last Name",
            type: "text"
        },
        {
            label: "City:",
            id: "motherCity",
            name: "mother[city]",
            placeholder: "City",
            type: "text"
        },
        {
            label: "State:",
            id: "motherState",
            name: "mother[state]",
            placeholder: "State",
            type: "text"
        },
        {
            label: "Phone #:",
            id: "motherPhone",
            name: "mother[phone]",
            placeholder: "(XXX) XXX-XXXX",
            type: "text"
        }
    ]);
    additionalSectionsWrapper.appendChild(motherContainer);

    // 5) DEFENDANT’S FATHER
    const fatherContainer = createContainer("Defendant's Father", "father-info", [
        {
            label: "First Name:",
            id: "fatherFirst",
            name: "father[first]",
            placeholder: "First Name",
            type: "text"
        },
        {
            label: "Last Name:",
            id: "fatherLast",
            name: "father[last]",
            placeholder: "Last Name",
            type: "text"
        },
        {
            label: "City:",
            id: "fatherCity",
            name: "father[city]",
            placeholder: "City",
            type: "text"
        },
        {
            label: "State:",
            id: "fatherState",
            name: "father[state]",
            placeholder: "State",
            type: "text"
        },
        {
            label: "Phone #:",
            id: "fatherPhone",
            name: "father[phone]",
            placeholder: "(XXX) XXX-XXXX",
            type: "text"
        }
    ]);
    additionalSectionsWrapper.appendChild(fatherContainer);

    // 6) REFERENCES
    const referenceContainer = document.createElement("div");
    referenceContainer.className = "container";
    referenceContainer.id = "reference-info";

    const referenceTitle = document.createElement("h2");
    referenceTitle.textContent = "References";
    referenceContainer.appendChild(referenceTitle);

    // Example: 2 references. You can replicate or do “Add more” logic
    const referenceOneCard = createCard("Reference #1", [
        {
            label: "First Name:",
            id: "reference1First",
            name: "reference[1][first]",
            placeholder: "First Name",
            type: "text"
        },
        {
            label: "Last Name:",
            id: "reference1Last",
            name: "reference[1][last]",
            placeholder: "Last Name",
            type: "text"
        },
        {
            label: "City:",
            id: "reference1City",
            name: "reference[1][city]",
            placeholder: "City",
            type: "text"
        },
        {
            label: "State:",
            id: "reference1State",
            name: "reference[1][state]",
            placeholder: "State",
            type: "text"
        },
        {
            label: "Phone #:",
            id: "reference1Phone",
            name: "reference[1][phone]",
            placeholder: "(XXX) XXX-XXXX",
            type: "text"
        }
    ]);
    referenceContainer.appendChild(referenceOneCard);

    // You can create more reference cards similarly
    const referenceTwoCard = createCard("Reference #2", [
        {
            label: "First Name:",
            id: "reference2First",
            name: "reference[2][first]",
            placeholder: "First Name",
            type: "text"
        },
        {
            label: "Last Name:",
            id: "reference2Last",
            name: "reference[2][last]",
            placeholder: "Last Name",
            type: "text"
        },
        {
            label: "City:",
            id: "reference2City",
            name: "reference[2][city]",
            placeholder: "City",
            type: "text"
        },
        {
            label: "State:",
            id: "reference2State",
            name: "reference[2][state]",
            placeholder: "State",
            type: "text"
        },
        {
            label: "Phone #:",
            id: "reference2Phone",
            name: "reference[2][phone]",
            placeholder: "(XXX) XXX-XXXX",
            type: "text"
        }
    ]);
    referenceContainer.appendChild(referenceTwoCard);

    additionalSectionsWrapper.appendChild(referenceContainer);

    // 7) DEFENDANT’S ATTORNEY
    const attorneyContainer = document.createElement("div");
    attorneyContainer.className = "container";
    attorneyContainer.id = "attorney-info";

    const attorneyTitle = document.createElement("h2");
    attorneyTitle.textContent = "Defendant's Attorney";
    attorneyContainer.appendChild(attorneyTitle);

    const attorneyCard = createCard("", [
        {
            label: "First Name:",
            id: "attorneyFirst",
            name: "attorney[first]",
            placeholder: "First Name",
            type: "text"
        },
        {
            label: "Last Name:",
            id: "attorneyLast",
            name: "attorney[last]",
            placeholder: "Last Name",
            type: "text"
        },
        {
            label: "Phone #:",
            id: "attorneyPhone",
            name: "attorney[phone]",
            placeholder: "(XXX) XXX-XXXX",
            type: "text"
        }
    ]);
    attorneyContainer.appendChild(attorneyCard);

    additionalSectionsWrapper.appendChild(attorneyContainer);
}
