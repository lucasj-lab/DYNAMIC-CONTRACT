<?php session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $_SESSION['sex'] = htmlspecialchars($_POST["sex"]);
    $_SESSION['race'] = htmlspecialchars($_POST["race"]);
    $_SESSION['todayDate'] = htmlspecialchars($_POST["todayDate"]);
    $_SESSION['height'] = htmlspecialchars($_POST["height"], ENT_QUOTES);
    $_SESSION['weight'] = htmlspecialchars($_POST["weight"]);
    $_SESSION['bondAmount'] = htmlspecialchars($_POST["bondAmount"]);
    $_SESSION['county'] = htmlspecialchars($_POST["county"]);
    $_SESSION['courtLocation'] = htmlspecialchars($_POST["courtLocation"]);
    $_SESSION['hair'] = htmlspecialchars($_POST["hair"]);
    $_SESSION['eyes'] = htmlspecialchars($_POST["eyes"]);
    $_SESSION['warrantNumber'] = htmlspecialchars($_POST["warrantNumber"]);
    $_SESSION['caseNumber'] = htmlspecialchars($_POST["caseNumber"]);
    $_SESSION['defFirstName'] = htmlspecialchars($_POST["defFirstName"]);
    $_SESSION['defMiddleName'] = htmlspecialchars($_POST["defMiddleName"]);
    $_SESSION['lastName'] = htmlspecialchars($_POST["lastName"]);
    $_SESSION['dob'] = htmlspecialchars($_POST["date-of-birth"]);
    $_SESSION['courtDateInput'] = htmlspecialchars($_POST["courtDateInput"]);
    $_SESSION['idMarks'] = isset($_POST["idMarks"]) ? htmlspecialchars($_POST["idMarks"]) : "None";
    $_SESSION['holds'] = isset($_POST["holds"]) ? htmlspecialchars($_POST["holds"]) : "";
    $_SESSION['alias'] = isset($_POST["alias"]) ? htmlspecialchars($_POST["alias"]) : "";
    $_SESSION['charges'] = isset($_POST["charges"]) ? htmlspecialchars($_POST["charges"]) : "";
    $_SESSION['dmv'] = isset($_POST["dmv"]) ? htmlspecialchars($_POST["dmv"]) : "";
    $_SESSION['ssnInput'] = isset($_POST["ssnInput"]) ? htmlspecialchars($_POST["ssnInput"]) : "";
} ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Bail Bond Form</title>
</head>

<body>
    <header>
        <button type="button" onclick="window.location.href='preview.php'">Go to Preview</button>
    </header>

        <form action="preview.php" method="post">

                <h2>Bail Bond Form</h2>

            <div class="page-wrapper">


                <!-- Row 1:  Today's Date, Sex, Race, Court Date -->

                <div class="container">
                    <div class="card">
                        <div class="card-content" id="row1">

                            <label for="todayDate">Today's Date:</label>
                            <input type="text" id="todayDate" name="todayDate"
                                value="<?php echo $_SESSION['todayDate'] ?? ''; ?>" readonly>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-content" id="row1">

                            <label for="dateInput">Court Date:</label>
                            <input type="date" id="dateInput" name="courtDate"
                                value="<?php echo $_SESSION['courtDate'] ?? ''; ?>" required>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-content" id="row1">
                            <label for="sex">SEX:</label>
                            <input list="sex-options" id="sex" name="sex" value="<?php echo $_SESSION['sex'] ?? ''; ?>"
                                required>
                            <datalist id="sex-options">
                                <option value="Male">
                                <option value="Female">
                            </datalist>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-content" id="row1">
                            <label for="race">RACE:</label>
                            <input list="race-options" id="race" name="race"
                                value="<?php echo $_SESSION['race'] ?? ''; ?>" required>
                            <datalist id="race-options">
                                <option value="White">
                                <option value="Black">
                                <option value="Asian">
                                <option value="Hispanic">
                                <option value="Native American">
                                <option value="Other">
                            </datalist>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-content" id="row1">
                            <button type="button" class="confirm-btn" onclick="lockRow('row1')">Confirm Row</button>
                            <button type="button" class="edit-btn" onclick="unlockRow('row1')">Edit</button>
                            <button type="submit">Preview</button>
                        </div>
                    </div>
                </div>








                <!-- Row 2: HGT, WGT, BOND AMOUNT, COUNTY -->

                <div class="container">
                    <div class="card">
                        <div class="card-content" id="row2">


                            <label for="height">HEIGHT:</label>
                            <input list="height-options" id="height" name="height"
                                value="<?php echo $_SESSION['height'] ?? ''; ?>" required>
                            <datalist id="height-options">
                                <?php
                                for ($feet = 5; $feet <= 7; $feet++) {
                                    for ($inches = 0; $inches <= 11; $inches++) {
                                        echo '<option value="' . $feet . "'" . $inches . '"></option>'; // No extra escaping needed
                                    }
                                }
                                ?>
                            </datalist>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-content" id="row2">

                            <label for="weight">WEIGHT:</label>
                            <input list="weight-options" id="weight" name="weight"
                                value="<?php echo $_SESSION['weight'] ?? ''; ?>" required>
                            <datalist id="weight-options">
                                <?php
                                for ($weight = 100; $weight <= 500; $weight += 5) {
                                    echo "<option value=\"$weight lbs\"></option>";
                                }
                                ?>
                            </datalist>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-content" id="row2">

                            <label for="bondAmount">BOND AMOUNT:</label>
                            <input list="bond-amount-options" id="bondAmount" name="bondAmount"
                                value="<?php echo $_SESSION['bondAmount'] ?? ''; ?>" required>
                            <datalist id="bond-amount-options">
                                <?php
                                for ($amount = 500; $amount <= 50000; $amount += 50) {
                                    echo "<option value=\"\$$amount\"></option>";
                                }
                                ?>
                            </datalist>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-content" id="row2">

                            <label for="county">COUNTY:</label>
                            <input list="county-options" id="county" name="county"
                                value="<?php echo $_SESSION['county'] ?? ''; ?>" required
                                oninput="updateCourtAndJail()">
                            <datalist id="county-options">
                                <option value="Barrow">
                                <option value="Bartow">
                                <option value="Carroll">
                                <option value="Cherokee">
                                <option value="Clarke">
                                <option value="Cobb">
                                <option value="Floyd">
                                <option value="Gordon">
                                <option value="Gwinnett">
                                <option value="Haralson">
                                <option value="Paulding">
                                <option value="Polk">
                                <option value="Pickens">
                            </datalist>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-content" id="row2">

                            <button type="button" class="confirm-btn" onclick="lockRow('row2')">Confirm Row</button>
                            <button type="button" class="edit-btn" onclick="unlockRow('row2')">Edit</button>
                            <button type="submit">Preview</button>
                        </div>
                    </div>
                </div>






                <!-- Row 3: Hair, Eyes, Warrant/case, Courtlocation-->



                <div class="container">
                    <div class="card">
                        <div class="card-content" id="row3">

                            <!-- Hair Color -->
                            <label for="hair">HAIR:</label>
                            <input list="hair-options" id="hair" name="hair"
                                value="<?php echo $_SESSION['hair'] ?? ''; ?>" required>
                            <datalist id="hair-options">
                                <option value="Black">
                                <option value="Brown">
                                <option value="Blonde">
                                <option value="Red">
                                <option value="Gray">
                                <option value="Bald">
                                <option value="Other">
                            </datalist>
                        </div>
                    </div>



                    <div class="card">
                        <div class="card-content" id="row3">

                            <!-- Eye Color -->
                            <label for="eyes">EYES:</label>
                            <input list="eyes-options" id="eyes" name="eyes"
                                value="<?php echo $_SESSION['eyes'] ?? ''; ?>" required>
                            <datalist id="eyes-options">
                                <option value="Brown">
                                <option value="Blue">
                                <option value="Green">
                                <option value="Hazel">
                                <option value="Gray">
                                <option value="Other">
                            </datalist>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-content" id="row3">
                            <!-- Warrant # -->
                            <label for="warrantNumber">WARRANT #:</label>
                            <input type="text" id="warrantNumber" name="warrantNumber"
                                value="<?php echo $_SESSION['warrantNumber'] ?? ''; ?>">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-content" id="row3">
                            <!-- Case # -->
                            <label for="caseNumber">CASE #:</label>
                            <input type="text" id="caseNumber" name="caseNumber"
                                value="<?php echo $_SESSION['caseNumber'] ?? ''; ?>">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-content" id="row3">
                            <!-- Court -->
                            <label for="courtLocation">COURT:</label>
                            <input list="court-options" id="courtLocation" name="courtLocation"
                                value="<?php echo $_SESSION['courtLocation'] ?? ''; ?>" required>
                            <datalist id="court-options">
                                <!-- Courts will be dynamically populated by JavaScript -->
                            </datalist>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-content">
                            <button type="button" class="confirm-btn" onclick="lockRow('row3')">Confirm Row</button>
                            <button type="button" class="edit-btn" onclick="unlockRow('row3')">Edit</button>
                            <button type="submit">Preview</button>
                        </div>
                    </div>
                    </div>


                    <!-- Row 4: ID MARK, HOLDS, ALIAS -->



                        <div class="container">
                        <div class="card">
                            <div class="card-content" id="row4">
                                <label for="idMarks">ID MARKS:</label>
                                <input type="text" id="idMarks" name="idMarks" placeholder="Select Type" readonly
                                    onclick="openIdMarksPopup()">
                                <div id="idMarksPopup" class="popup">
                                    <label for="idMarkType">Type:</label>
                                    <input list="idMarks-options" id="idMarkType">
                                    <datalist id="idMarks-options">
                                        <option value="Tattoo">
                                        <option value="Scar">
                                        <option value="Piercing">
                                        <option value="Birthmark">
                                        <option value="Burn Mark">
                                        <option value="Other">
                                    </datalist>

                                    <label for="idMarkLocation">Select Location(s):</label>
                                    <select id="idMarkLocation" multiple>
                                        <option value="Head">Head</option>
                                        <option value="Face">Face</option>
                                        <option value="Neck">Neck</option>
                                        <option value="Left Arm">Left Arm</option>
                                        <option value="Right Arm">Right Arm</option>
                                        <option value="Left Leg">Left Leg</option>
                                        <option value="Right Leg">Right Leg</option>
                                        <option value="Chest">Chest</option>
                                        <option value="Back">Back</option>
                                        <option value="Abdomen">Abdomen</option>
                                        <option value="Hand">Hand</option>
                                        <option value="Foot">Foot</option>
                                    </select>

                                    <div id="selectedLocations"></div> <!-- Tags Display Here -->

                                    <label for="idMarkQuantity">Quantity:</label>
                                    <input type="number" id="idMarkQuantity" min="1" value="1">

                                    <button type="button" onclick="addIdMark()">Add Mark</button>
                                    <button type="button" onclick="closeIdMarksPopup()">Close</button>
                                </div>
                            </div>
                        </div>

                        <input type="hidden" name="idMarksData" id="idMarksData">

            

                        <input type="hidden" name="idMarksData" id="idMarksData">

                        <div class="card">
                            <div class="card-content" id="row4">
                                <label for="holds">HOLDS:</label>
                                <input list="holds-options" id="holds" name="holds"
                                    value="<?php echo $_SESSION['holds'] ?? 'None'; ?>" required
                                    oninput="updateMultiSelect('holds' 'holds-options')">
                                <datalist id="holds-options">
                                    <option value="None">
                                    <option value="Federal Hold">
                                    <option value="State Hold">
                                    <option value="County Hold">
                                    <option value="Parole Hold">
                                    <option value="Probation Hold">
                                    <option value="ICE Hold">
                                </datalist>



                            </div>
                        </div>

                        <div class="card">
                            <div class="card-content" id="row4">
                                <label for="alias">ALIAS:</label>
                                <input list="alias-options" id="alias" name="alias"
                                    value="<?php echo $_SESSION['alias'] ?? 'None'; ?>" required
                                    oninput="updateMultiSelect('alias' 'alias-options')">
                                <datalist id="alias-options">
                                    <option value="None">
                                    <option value="Known Alias">
                                    <option value="Street Name">
                                    <option value="Nickname">
                                    <option value="False Identity">
                                </datalist>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-content" id="row4">
                                <button type="button" class="confirm-btn" onclick="lockRow('row4')">Confirm Row</button>
                                <button type="button" class="edit-btn" onclick="unlockRow('row4')">Edit</button>
                                <button type="submit">Preview</button>
                            </div>
                        </div>
                        </div>



                        <!-- Row 5: DMV & CHARGES -->
                            <div class="container">
                            <div class="card">
                                <div class="card-content" id="row5">
                                    <p>
                                        <label for="dmv">DMV #:</label>
                                        <input type="text" id="dmv" name="dmv" placeholder="123-456-789"
                                            value="<?php echo $_SESSION['dmv'] ?? ''; ?>">
                                    </p>
                                </div>
                            </div>



                            <div class="card">
                                <div class="card-content" id="row5">
                                    <label for="charges">CHARGES:</label>
                                    <input list="charges" id="charges" name="charges"
                                        placeholder="Select or Enter Charges" readonly onclick="openChargesPopup()">
                                    <div id="chargesPopup" class="popup">
                                        <label for="chargeType">Charge:</label>
                                        <input list="charges-options" id="chargeType">
                                        <datalist id="charges-options">
                                            <!-- Traffic & Driving Violations -->
                                            <option value="Aggressive Driving">
                                            <option value="Failure to Appear">
                                            <option value="Driving Under Influence (DUI)">
                                            <option value="Failure to Maintain Lane">
                                            <option value="Reckless Driving">
                                            <option value="Hit & Run">
                                            <option value="Fleeing or Attempting to Elude Police">
                                            <option value="Driving Without a License">
                                            <option value="Driving With a Suspended License">
                                            <option value="Improper Passing">
                                            <option value="Failure to Stop at Stop Sign">
                                            <option value="Running a Red Light">
                                            <option value="Speeding">
                                            <option value="Racing on Highway">
                                            <option value="Failure to Yield">
                                            <option value="Improper Lane Change">
                                            <option value="Driving in Emergency Lane/Gore">
                                            <option value="Failure to Signal">
                                            <option value="Defective Equipment">
                                            <option value="Window Tint Violation">
                                            <option value="Failure to Maintain Insurance">
                                            <option value="Failure to Register Vehicle">
                                            <option value="Expired Registration">

                                                <!-- Drug & Controlled Substances -->
                                            <option value="Possession of Firearm with Controlled Substance">
                                            <option value="Possession of Marijuana (<1oz)">
                                            <option value="Possession of Marijuana (>1oz) (Felony)">
                                            <option value="Possession of Schedule I or II Controlled Substance">
                                            <option value="Possession of Schedule III, IV, or V Controlled Substance">
                                            <option value="Possession of Drug Paraphernalia">
                                            <option value="Sale/Distribution of Controlled Substance">
                                            <option value="Trafficking in Controlled Substances">
                                            <option value="Possession of Methamphetamine">
                                            <option value="Possession of Cocaine">
                                            <option value="Possession of Heroin">
                                            <option value="Possession of Fentanyl">
                                            <option value="Possession of THC Oil">
                                            <option value="Distribution of Marijuana">
                                            <option value="Drug Smuggling">

                                                <!-- Theft, Fraud & Financial Crimes -->
                                            <option value="Theft by Taking">
                                            <option value="Theft by Deception">
                                            <option value="Shoplifting">
                                            <option value="Forgery">
                                            <option value="Identity Fraud">
                                            <option value="Credit Card Fraud">
                                            <option value="Insurance Fraud">
                                            <option value="Embezzlement">
                                            <option value="Counterfeiting">
                                            <option value="Burglary (1st Degree)">
                                            <option value="Burglary (2nd Degree)">
                                            <option value="Armed Robbery">
                                            <option value="Robbery by Intimidation">

                                                <!-- Assault & Violent Crimes -->
                                            <option value="Simple Assault">
                                            <option value="Aggravated Assault">
                                            <option value="Battery">
                                            <option value="Aggravated Battery">
                                            <option value="Domestic Violence">
                                            <option value="Child Abuse">
                                            <option value="Elder Abuse">
                                            <option value="Homicide">
                                            <option value="Manslaughter (Voluntary)">
                                            <option value="Manslaughter (Involuntary)">
                                            <option value="Kidnapping">
                                            <option value="False Imprisonment">
                                            <option value="Criminal Threats">

                                                <!-- Sexual Offenses -->
                                            <option value="Sexual Battery">
                                            <option value="Rape">
                                            <option value="Statutory Rape">
                                            <option value="Child Molestation">
                                            <option value="Aggravated Child Molestation">
                                            <option value="Indecent Exposure">
                                            <option value="Solicitation of a Minor">
                                            <option value="Possession of Child Pornography">
                                            <option value="Distribution of Obscene Material">

                                                <!-- Weapons Charges -->
                                            <option value="Unlawful Possession of Firearm">
                                            <option value="Carrying a Concealed Weapon Without Permit">
                                            <option value="Possession of Firearm by Convicted Felon">
                                            <option value="Possession of Stolen Firearm">
                                            <option value="Discharging a Firearm in Public">
                                            <option value="Unlawful Sale of Firearm">
                                            <option value="Possession of Firearm in Commission of Crime">
                                            <option value="Carrying a Weapon in School Zone">

                                                <!-- Other Felonies & Misdemeanors -->
                                            <option value="Parole Violation">
                                            <option value="Probation Violation">
                                            <option value="Obstruction of Justice">
                                            <option value="Tampering with Evidence">
                                            <option value="Resisting Arrest">
                                            <option value="Hindering 911 Call">
                                            <option value="Harboring a Fugitive">
                                            <option value="Perjury">
                                            <option value="Failure to Register as Sex Offender">
                                            <option value="Criminal Trespassing">
                                            <option value="Stalking">
                                            <option value="Violation of Protection Order">
                                            <option value="Animal Cruelty">
                                        </datalist>

                                        <label for="chargeSeverity">Severity:</label>
                                        <select id="chargeSeverity">
                                            <option value="Misdemeanor">Misdemeanor</option>
                                            <option value="Felony">Felony</option>
                                        </select>

                                        <button type="button" onclick="addCharge()">Add Charge</button>
                                        <button type="button" onclick="closeChargesPopup()">Close</button>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-content" id="row5">
                                    <button type="button" class="confirm-btn" onclick="lockRow('row5')">Confirm
                                        Row</button>
                                    <button type="button" class="edit-btn" onclick="unlockRow('row5')">Edit</button>
                                    <button type="submit">Preview</button>
                                </div>
                            </div>
                            </div>

                            <!-- Row 6: DOB / CHARGES -->
                            <div class="container">
                            <div class="card">
                                <div class="card-content" id="row6">
                                    <label for="date-of-birth">DOB:</label>
                                    <input type="date" id="date-of-birth" name="dob"
                                        value="<?php echo $_SESSION['dob'] ?? ''; ?>" required>
                                </div>
                            </div>

                      
                            <div class="card">
                                <div class="card-content" id="row6">
                                    <label for="age-display">AGE:</label>
                                    <input type="text" id="age-display" name="age-display"
                                        value="<?php echo $_SESSION['age'] ?? ''; ?>" readonly>
                                </div>
                            </div>

                
                            <div class="card">
                                <div class="card-content" id="row6">
                                    <button type="button" class="confirm-btn" onclick="lockRow('row6')">Confirm
                                        Row</button>
                                    <button type="button" class="edit-btn" onclick="unlockRow('row6')">Edit</button>
                                    <button type="submit">Preview</button>
                                </div>
                            </div>
</div>


                            <!-- Row 7: SSN / CHARGES -->
                            <div class="container">
                            <div class="card">
                                <div class="card-content" id="row7">
                                    <p>
                                        <label for="ssnInput">SSN:</label>
                                        <input type="text" id="ssnInput" name="ssnInput" placeholder="123-45-6789"
                                            value="<?php echo $_SESSION['ssnInput'] ?? ''; ?>">
                                    </p>
                                </div>
                            </div>


                            <div class="card">
                                <div class="card-content" id="row7">
                                    <button type="button" class="confirm-btn" onclick="lockRow('row7')">Confirm Row
                                        </butto>
                                        <button type="button" class="edit-btn" onclick="unlockRow('row7')">Edit</button>
                                        <button type="submit">Preview</button>
                                </div>
                            </div>


                            <div class="card">
                                <div class="card-content" id="row8">
                                    <h2>Name</h2>
                                    <p>
                                        <label for="defFirstName">FIRST:</label>
                                        <input type="text" id="defFirstName" name="defFirstName"
                                            value="<?php echo $_SESSION['defFirstName'] ?? ''; ?>" required>
                                    </p>
                                    <p>
                                        <label for="defMiddleName">MIDDLE:</label>
                                        <input type="text" id="defMiddleName" name="defMiddleName"
                                            value="<?php echo $_SESSION['defMiddleName'] ?? ''; ?>">
                                    </p>
                                    <p>
                                        <label for="lastName">LAST:</label>
                                        <input type="text" id="lastName" name="lastName"
                                            value="<?php echo $_SESSION['lastName'] ?? ''; ?>" required>
                                    </p>
                                </div>
                            </div>


                            <div class="card">
                                <div class="card-content">
                                    <button type="button" class="confirm-btn" onclick="lockRow('row8')">Confirm
                                        Row</button>
                                    <button type="button" class="edit-btn" onclick="unlockRow('row8')">Edit</button>
                                    <button type="submit">Preview</button>
                                </div>
                            </div>
                            </div>
                            <script defer src="script.js"></script>          
        </form>
       
    


    <script>

document.addEventListener("DOMContentLoaded", () => {
        const dmvInput = document.getElementById("dmv");
        let allowBackspace = false;

        dmvInput.addEventListener("input", (event) => {
            let value = dmvInput.value.replace(/-/g, ''); // Remove existing dashes
            let formattedValue = '';

            if (allowBackspace) {
                allowBackspace = false;
                return; // Skip formatting if user pressed backspace
            }

            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 3 === 0 && i < 12) {
                    formattedValue += '-'; // Add dash after every 3rd character
                }
                formattedValue += value[i];
            }

            dmvInput.value = formattedValue;
        });

        dmvInput.addEventListener("keydown", (event) => {
            if (event.key === "Backspace") {
                allowBackspace = true; // Allow backspace to remove dashes
            }
        });
    });

document.addEventListener("DOMContentLoaded", () => {
        const dobInput = document.getElementById("date-of-birth");
        const ageDisplay = document.getElementById("age-display");

        function calculateAge() {
            let dobValue = dobInput.value;

            if (dobValue) {
                let birthDate = new Date(dobValue);
                let today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                let monthDiff = today.getMonth() - birthDate.getMonth();

                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                    age--; // Adjust age if birthday hasn't occurred yet this year
                }

                ageDisplay.value = age;
            } else {
                ageDisplay.value = ""; // Clear age field if no DOB is selected
            }
        }

        // Update age on DOB input change
        dobInput.addEventListener("input", calculateAge);

        // Run on page load if DOB exists
        if (dobInput.value) {
            calculateAge();
        }
    });

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
        document.querySelectorAll(".card, .container").forEach(row => {
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

function updateMultiSelect(inputId, datalistId) {
    let inputElement = document.getElementById(inputId);
    let currentValue = inputElement.value;

    if (currentValue === "None") {
        inputElement.value = ""; // Clear if "None" is selected
    }

    let existingValues = inputElement.value.split(', ');
    let datalistOptions = [...document.getElementById(datalistId).options].map(option => option.value);

    if (datalistOptions.includes(currentValue) && !existingValues.includes(currentValue)) {
        existingValues.push(currentValue);
        inputElement.value = existingValues.join(', ');
    }
}

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
        ssnInput.addEventListener('input', function () {
            this.value = formatSsn(this.value);
        });


        let idMarksArray = [];

        function openIdMarksPopup() {
            document.getElementById("idMarksPopup").style.display = "block";
        }

        function closeIdMarksPopup() {
            document.getElementById("idMarksPopup").style.display = "none";
        }

        function addIdMark() {
            let type = document.getElementById("idMarkType").value;
            let location = document.getElementById("idMarkLocation").value;
            let quantity = document.getElementById("idMarkQuantity").value;

            if (type === "" || location === "") {
                alert("Please select a type and specify a location.");
                return;
            }

            let idMarkEntry = `${quantity}x ${type} on ${location}`;
            idMarksArray.push(idMarkEntry);

            document.getElementById("idMarks").value = idMarksArray.join(", ");
            document.getElementById("idMarksData").value = idMarksArray.join("|"); // Hidden input for backend processing
            closeIdMarksPopup();
        }

        let chargesArray = [];

        function openChargesPopup() {
            document.getElementById("chargesPopup").style.display = "block";
        }

        function closeChargesPopup() {
            document.getElementById("chargesPopup").style.display = "none";
        }

        function addCharge() {
            let type = document.getElementById("chargeType").value;
            let severity = document.getElementById("chargeSeverity").value;

            if (type === "") {
                alert("Please select or enter a charge.");
                return;
            }

            let chargeEntry = `${type} (${severity})`;
            chargesArray.push(chargeEntry);

            document.getElementById("charges").value = chargesArray.join(", ");
            document.getElementById("chargesData").value = chargesArray.join("|"); // Hidden input for backend processing
            closeChargesPopup();
        }


        document.addEventListener("DOMContentLoaded", function () {
            let today = new Date();
            let month = (today.getMonth() + 1).toString().padStart(2, '0'); // Get month (January is 0)
            let day = today.getDate().toString().padStart(2, '0'); // Get day and pad with zero if needed
            let year = today.getFullYear();

            let formattedDate = `${month}/${day}/${year}`; // Format: MM/DD/YYYY
            document.getElementById("todayDate").value = formattedDate;
        });


        document.querySelector("form").addEventListener("submit", function (event) {
            let courtDateInput = document.getElementById("dateInput");
            let selectedDate = new Date(courtDateInput.value);

            if (!isNaN(selectedDate)) {
                let formattedCourtDate = `${(selectedDate.getMonth() + 1)
                    .toString()
                    .padStart(2, '0')}/${selectedDate
                        .getDate()
                        .toString()
                        .padStart(2, '0')}/${selectedDate.getFullYear()}`;

                courtDateInput.value = formattedCourtDate; // Modify before submission
            }
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
        });
 
    </script>
</body>

</html>