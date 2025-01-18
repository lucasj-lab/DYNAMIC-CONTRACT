
<h2>NAME</h2>
                <div class="card">
                    <div class="card-content" id="row1">



                         <p>
                            <label for="firstName">FIRST:</label>
                            <input type="text" id="firstName" name="address[defendant][name][first]" value="<?php echo $_SESSION['defendant']['name']['first'] ?? ''; ?>" required>
                        </p>
                         <p>
                            <label for="middleName">MIDDLE:</label>
                            <input type="text" id="middleName" name="address[defendant][name][middle]" value="<?php echo $_SESSION['defendant']['name']['middle'] ?? ''; ?>">
                        </p>
                         <p>
                            <label for="lastName">LAST:</label>
                            <input type="text" id="lastName" name="address[defendant][name][last]" value="<?php echo $_SESSION['defendant']['name']['last'] ?? ''; ?>" required>
                        </p>


                    </div>
                </div>
             
          
                <div class="card">
                    <div class="card-content" id="row1">
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

<div class="card-content" id="row1">
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

                            <div id="selectedLocations"> <!-- Tags Display Here -->

                            <label for="idMarkQuantity">Quantity:</label>
                            <input type="number" id="idMarkQuantity" min="1" value="1">

                            <button type="button" onclick="addIdMark()">Add Mark</button>
                            <button type="button" onclick="closeIdMarksPopup()">Close</button>
                        </div>
                    </div>
                    </div>
                    
                  
 <input type="hidden" name="idMarksData" id="idMarksData"> 
 </div>






                <div class="card">
                    <div class="card-content">
                        <button type="button" class="confirm-btn" onclick="lockRow('row1')">Confirm Name</button>
                        <button type="button" class="edit-btn" onclick="unlockRow('row1')">Edit Name</button>
                    </div>
                    </div>


                    


     <!-- ROW 1:BIOGRAPHY - NAME, DOB, AGE, DMV, SSN -->

              



                <!--  5: Defendant Bio -->
                <div id="bioContainer" class="container">
                <h2>BIO</h2>

                <div class="card">
                    <div class="card-content" id="row1">
                        <label for="date-of-birth">DOB:</label>
                        <input type="date" id="date-of-birth" name="dob" value="<?php echo $_SESSION['dob'] ?? ''; ?>"
                            required>
                    </div>
                </div>


                <div class="card">
                    <div class="card-content" id="row1">
                        <label for="age-display">AGE:</label>
                        <input type="text" id="age-display" name="age-display"
                            value="<?php echo $_SESSION['age'] ?? ''; ?>" readonly>
                    </div>
                </div>


                <div class="card">
                    <div class="card-content" id="row1">
                        <p>
                            <label for="dmv">DMV #:</label>
                            <input type="text" id="dmv" name="dmv" placeholder="123-456-789"
                                value="<?php echo $_SESSION['dmv'] ?? ''; ?>">
                        </p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-content" id="row1">
                        <p>
                            <label for="ssnInput">SSN:</label>
                            <input type="text" id="ssnInput" name="ssnInput" placeholder="123-45-6789"
                                value="<?php echo $_SESSION['ssnInput'] ?? ''; ?>">
                        </p>
                    </div>
                </div>


                <div class="card">
                    <div class="card-content">
                        <button type="button" class="confirm-btn" onclick="lockRow('row1')">Confirm Row</button>
                        <button type="button" class="edit-btn" onclick="unlockRow('row1')">Edit</button>
                  
                    </div>
                </div>
            

</div>
    




            <!-- Row 2:DEMOGRAPHICS - SEX, RACE, HGT, WGT, HAIR, EYES, ID MARKS: -->

<div id="demographics" class="container">

                <h2>DEMOGRAPHICS</h2>

                <div class="card">
                    <div class="card-content" id="row2">
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
                    <div class="card-content" id="row2">
                        <label for="race">RACE:</label>
                        <input list="race-options" id="race" name="race" value="<?php echo $_SESSION['race'] ?? ''; ?>"
                            required>
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

                        <!-- Hair Color -->
                        <label for="hair">HAIR:</label>
                        <input list="hair-options" id="hair" name="hair" value="<?php echo $_SESSION['hair'] ?? ''; ?>"
                            required>
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
                    <div class="card-content" id="row2">

                        <!-- Eye Color -->
                        <label for="eyes">EYES:</label>
                        <input list="eyes-options" id="eyes" name="eyes" value="<?php echo $_SESSION['eyes'] ?? ''; ?>"
                            required>
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
                    <div class="card-content">

                        <button type="button" class="confirm-btn" onclick="lockRow('row2')">Confirm Row</button>
                        <button type="button" class="edit-btn" onclick="unlockRow('row2')">Edit</button>
                     
                    </div>
                </div>
</div>            
        
        



            <!-- Row 3:BOND INFO - COUNTY, BOND AMOUNT, CHARGES, WARRANT #, CASE #, COURT, HOLDS, COURT DATE -->



<div id="bondInfo" class="container">
                <h2>BOND INFO</h2>



                <div class="card">
                    <div class="card-content" id="row3">

                        <label for="county">COUNTY:</label>
                        <input list="county-options" id="county" name="county"
                            value="<?php echo $_SESSION['county'] ?? ''; ?>" required oninput="updateCourtAndJail()">
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
                    <div class="card-content" id="row3">

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
                    <div class="card-content" id="row3">
                        <label for="charges">CHARGES:</label>
                        <input list="charges" id="charges" name="charges" placeholder="Select or Enter Charges" readonly
                            onclick="openChargesPopup()">
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
                    <div class="card-content" id="row3">
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
                    <div class="card-content" id="row3">

                        <label for="dateInput">COURT DATE:</label>
                        <input type="date" id="dateInput" name="courtDate"
                            value="<?php echo $_SESSION['courtDate'] ?? ''; ?>" required>
                    </div>
                </div>



                <div class="card">
                    <div class="card-content">
                        <button type="button" class="confirm-btn" onclick="lockRow('row3')">Confirm Row</button>
                        <button type="button" class="edit-btn" onclick="unlockRow('row3')">Edit</button>
                    
                    </div>
                </div>
</div>







<!-- Row 4:ADDRESS & RESIDENCE INFO---STREET, APT#, STATE, CITY, ZIP, RESIDENCE/RESIDENT TYPE, DURATION, COHABITATION  -->
<div id="addressResidenceContainer" class="container">


<h2>ADDRESS</h2>



<div class="card">
                    <div class="card-content" id="row4">
                        <p>
                            <label for="def_street">STREET:</label>
                            <input type="text" id="def_street" name="address[defendant][street]" required>
                        </p>
                    </div>
</div>

<div class="card" id="defAptCard" style="display: none;">
                    <div class="card-content" id="row4">
                        <p id="defApt" style="display: none;">
                            <label for="def_apt_input">APT:</label>
                            <input type="text" id="def_apt_input" name="address[defendant][apt]">
                        </p>
                    </div>
</div>

<div class="card">
                    <div class="card-content" id="row4">



                    <p>
                            <label for="city">CITY:</label>
                            <input list="cityList" id="city" name="address[defendant][city]" required>
                            <datalist id="cityList">
                                <!-- Cities will be populated dynamically based on state selection -->
                            </datalist>
                        </p>
                        </div>
</div>
                        
<div class="card">
                        <div class="card-content" id="row4">
                        <p>
                            <label for="state">STATE:</label>
                            <input list="stateList" id="state" name="address[defendant][state]"
                                onchange="updateCities()" required>
                            <datalist id="stateList">
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </datalist>
                        </p>

                      
                    </div>
</div>

<div class="card">
                    <div class="card-content" id="row4">
                        <p>
                            <label for="def_zip">ZIP:</label>
                            <input type="text" id="def_zip" name="address[defendant][zipCode]" required>
                        </p>
                    </div>
</div>
</div> 






                <!-- Row 8 : DEFENDANT RESIDENCE  -->

<div class="container">
                <h2>RESIDENCE</h2>
                <div class="card">
                    <div class="card-content" id="row4">
                        <p>
                            <label for="residenceType">RESIDENCE TYPE:</label>
                            <input list="residenceTypeList" id="residenceType" name="address[defendant] [residenceType]"
                                required>
                            <datalist id="residenceTypeList">
                                <option value="Apartment">
                                <option value="House">



                                <option value="Condo">
                                <option value="Mobile Home">
                                <option value="Townhouse">
                                <option value="Duplex">
                                <option value="Trailer">
                                <option value="Other">
                            </datalist>
                        </p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-content" id="row4">
                        <p><input list="residentTypeList" id="residentType" name="residentType" required>
                            <datalist id="residentTypeList">
                                <option value="">--Select--</option>
                                <option value="own">Owner (Own) </option>
                                <option value="rent">Renter (Lease) </option>
                            </datalist>
                        </p>

                    </div>
                </div>

                <div class="card">
                    <div class="card-content" id="row4">
                        <p>
                            <label for="yearsAtAddress">HOW LONG HAS DEFENDANT LIVED AT LISTED ADDRESS?</label><br>
                            <label for="yearsAtAddress">YEARS</label>
                            <input list="yearsList" id="yearsAtAddress" name="yearsAtAddress" required>
                            <datalist id="yearsList">
                                <?php for ($i = 0; $i <= 25; $i++): ?>
                                    <option value="<?= $i ?>">
                                    <?php endfor; ?>
                                <option value="25+">
                            </datalist>

                        </p>

                        <p> <label for="monthsAtAddress">MONTHS</label>
                            <input list="monthsList" id="monthsAtAddress" name="monthsAtAddress" required>
                            <datalist id="monthsList">
                                <?php for ($i = 0; $i <= 11; $i++): ?>
                                    <option value="<?= $i ?>">
                                    <?php endfor; ?>
                            </datalist>
                        </p>

                    </div>
                </div>


                <div class="card">
                    <div class="card-content" id="row4">
                        <p><label for="defendantLivesWith">LIVES WITH?</label>
                            <input list="defendantLivesWithList" id="defendantLivesWith" name="defendantLivesWith"
                                required>
                            <datalist id="defendantLivesWithList">
                                <option value="Self">
                                <option value="Roommate">
                                <option value="Husband">
                                <option value="Wife">
                                <option value="Son">
                                <option value="Daughter">
                                <option value="Children">
                                <option value="Girlfriend">
                                <option value="Boyfriend">
                                <option value="Sibling">
                                <option value="Grandparent">
                                <option value="Grandchild">
                                <option value="Aunt">
                                <option value="Uncle">
                                <option value="Cousin">
                                <option value="Grandmother">
                                <option value="Grandfather">
                                <option value="Friends">
                                <option value="Parents">
                                <option value="Other">
                            </datalist>
                        </p>
                    </div>


                </div>
                <div class="card">
                    <div class="card-content">
                        <button type="button" class="confirm-btn" onclick="lockRow('row4')">Confirm Row</button>
                        <button type="button" class="edit-btn" onclick="unlockRow('row4')">Edit</button>
                   
                    </div>
                </div>




 
                function createDefendantSection(defendantId) {
    const defendantDiv = document.createElement("div");
    defendantDiv.classList.add("defendant-container");
    defendantDiv.id = `defendant-${defendantId}`;

    const header = document.createElement("h2");
    header.textContent = `Defendant ${defendantId}`;
    defendantDiv.appendChild(header);

    // Add Defendant Details
    defendantDiv.appendChild(createEntry("Defendant Details", `defendant[${defendantId}]`));

    // Add Mother, Father, and References
    const familyEntries = ["Mother", "Father", "Reference 1", "Reference 2", "Reference 3"];
    familyEntries.forEach((role) => {
        defendantDiv.appendChild(createEntry(`Defendant’s ${role}`, `defendant[${defendantId}][${role.toLowerCase().replace(' ', '_')}]`, true));
    });

    return defendantDiv;
}


    // Create Co-Signer Section
    function createCosignerSection(cosignerId) {
        const cosignerDiv = document.createElement("div");
        cosignerDiv.classList.add("cosigner-container");
        cosignerDiv.id = `cosigner-${cosignerId}`;

        const header = document.createElement("h2");
        header.textContent = `Co-Signer ${cosignerId}`;
        cosignerDiv.appendChild(header);

        // Add Co-Signer Details
        cosignerDiv.appendChild(createEntry("Co-Signer Details", `cosigner[${cosignerId}]`));

        return cosignerDiv;
    }

    // Add Buttons Logic
    const phoneContainer = document.getElementById("phoneContainer");
    document.getElementById("addDefendant").addEventListener("click", () => {
        const newDefendant = createDefendantSection(defendantCount);
        phoneContainer.appendChild(newDefendant);
        defendantCount++;
    });

    document.getElementById("addDefendantSpouse").addEventListener("click", () => {
        if (!defSpouseAdded) {
            const defendantDiv = document.querySelector(`#defendant-${defendantCount - 1}`);
            defendantDiv.appendChild(createEntry("Defendant’s Spouse", `defendant[${defendantCount - 1}]`));
            defSpouseAdded = true;
        } else {
            alert("Defendant’s Spouse already added.");
        }
    });

    document.getElementById("addCosigner").addEventListener("click", () => {
        const newCosigner = createCosignerSection(cosignerCount);
        phoneContainer.appendChild(newCosigner);
        cosignerCount++;
    });

    document.getElementById("addCosignerSpouse").addEventListener("click", () => {
        const cosignerDiv = document.querySelector(`#cosigner-${cosignerCount - 1}`);
        if (!cosSpouseAdded) {
            cosignerDiv.appendChild(createEntry("Co-Signer's Spouse", `cosigner[${cosignerCount - 1}]`));
            cosSpouseAdded = true;
        } else {
            alert("Co-Signer's Spouse already added.");
        }
    });



    const confirmedEntries = new Set();
    let defendantCount = 1;
    let cosignerCount = 1;
    let defSpouseAdded = false;
    let cosSpouseAdded = false;
    let entryToRemove = null;

    // Format phone numbers
    function formatPhoneNumber(value) {
        let digits = value.replace(/\D/g, "").slice(0, 10);
        if (digits.length <= 3) return digits;
        if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }

    // Handle phone number input
    function handlePhoneInput(event) {
        event.target.value = formatPhoneNumber(event.target.value);
    }

    // Confirm Entry
    function confirmEntry(event) {
        event.preventDefault();
        const button = event.target;
        const entryGroup = button.closest(".card");

        if (!entryGroup) return;

        const firstNameInput = entryGroup.querySelector("input[name='firstName']");
        const lastNameInput = entryGroup.querySelector("input[name='lastName']");
        const phoneInput = entryGroup.querySelector("input[name='phone']");

        const fullName = `${firstNameInput.value.trim()} ${lastNameInput.value.trim()}`;
        const formattedNumber = phoneInput.value;

        if (confirmedEntries.has(fullName) || confirmedEntries.has(formattedNumber)) {
            alert("This name or phone number has already been confirmed.");
        } else if (formattedNumber.length === 14 && firstNameInput.value.trim() && lastNameInput.value.trim()) {
            confirmedEntries.add(fullName);
            confirmedEntries.add(formattedNumber);

            firstNameInput.disabled = true;
            lastNameInput.disabled = true;
            phoneInput.disabled = true;
            button.disabled = true;
            entryGroup.querySelector(".edit-btn").disabled = false;

            alert("Entry confirmed successfully!");
        } else {
            alert("Please enter a valid name and 10-digit US phone number.");
        }
    }

    // Edit Entry
    function editEntry(event) {
        event.preventDefault();
        const button = event.target;
        const entryGroup = button.closest(".card-content");

        if (!entryGroup) return;

        const firstNameInput = entryGroup.querySelector("input[name='firstName']");
        const lastNameInput = entryGroup.querySelector("input[name='lastName']");
        const phoneInput = entryGroup.querySelector("input[name='phone']");
        const confirmButton = entryGroup.querySelector(".confirm-btn");

        const fullName = `${firstNameInput.value.trim()} ${lastNameInput.value.trim()}`;
        const formattedNumber = phoneInput.value;

        confirmedEntries.delete(fullName);
        confirmedEntries.delete(formattedNumber);

        firstNameInput.disabled = false;
        lastNameInput.disabled = false;
        phoneInput.disabled = false;
        confirmButton.disabled = false;
        button.disabled = true;
    }

    // Create Entry
    function createEntry(label, includeExtraFields = false) {
        const containerDiv = document.createElement("div");
        containerDiv.classList.add("container");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        const cardContentDiv = document.createElement("div");
        cardContentDiv.classList.add("card-content");

        const title = document.createElement("h3");
        title.textContent = label;
        cardContentDiv.appendChild(title);

        const firstNameInput = document.createElement("input");
        firstNameInput.type = "text";
        firstNameInput.name = "firstName";
        firstNameInput.placeholder = "First Name";

        const lastNameInput = document.createElement("input");
        lastNameInput.type = "text";
        lastNameInput.name = "lastName";
        lastNameInput.placeholder = "Last Name";

        cardContentDiv.appendChild(firstNameInput);
        cardContentDiv.appendChild(lastNameInput);

        if (includeExtraFields) {
            const cityInput = document.createElement("input");
            cityInput.type = "text";
            cityInput.name = "city";
            cityInput.placeholder = "City";

            const stateInput = document.createElement("input");
            stateInput.type = "text";
            stateInput.name = "state";
            stateInput.placeholder = "State";

            const relationInput = document.createElement("input");
            relationInput.type = "text";
            relationInput.name = "relation";
            relationInput.placeholder = "Relation";

            cardContentDiv.appendChild(cityInput);
            cardContentDiv.appendChild(stateInput);
            cardContentDiv.appendChild(relationInput);
        }

        const phoneInput = document.createElement("input");
        phoneInput.type = "text";
        phoneInput.name = "phone";
        phoneInput.placeholder = "(123) 456-7890";
        phoneInput.addEventListener("input", handlePhoneInput);

        cardContentDiv.appendChild(phoneInput);

        const confirmButton = document.createElement("button");
        confirmButton.textContent = "Confirm";
        confirmButton.classList.add("confirm-btn");
        confirmButton.addEventListener("click", confirmEntry);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-btn");
        editButton.disabled = true;
        editButton.addEventListener("click", editEntry);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.addEventListener("click", () => {
            entryToRemove = containerDiv;
            document.getElementById("overlay").style.display = "flex";
        });

        cardContentDiv.appendChild(confirmButton);
        cardContentDiv.appendChild(editButton);
        cardContentDiv.appendChild(removeButton);

        cardDiv.appendChild(cardContentDiv);
        containerDiv.appendChild(cardDiv);

        return containerDiv;
    }

    // Overlay Controls
    document.getElementById("confirmRemove").addEventListener("click", () => {
        if (entryToRemove) entryToRemove.remove();
        document.getElementById("overlay").style.display = "none";
    });

    document.getElementById("cancelRemove").addEventListener("click", () => {
        entryToRemove = null;
        document.getElementById("overlay").style.display = "none";
    });

    // Add Buttons Logic
    const container = document.getElementById("phoneContainer");
    container.appendChild(createEntry("Defendant"));
            container.appendChild(createEntry("Defendant’s Mother", true));
            container.appendChild(createEntry("Defendant’s Father", true));

            for (let i = 1; i <= 3; i++) {
                container.appendChild(createEntry(`Reference ${i}`, true));
            }

            container.appendChild(createEntry("Co-Signer 1", true));
            container.appendChild(createEntry("Co-Signer 1 - Reference 1", true));
            container.appendChild(createEntry("Co-Signer 1 - Reference 2", true));

    document.getElementById("addDefendant").addEventListener("click", () => {
        defendantCount++;
        container.appendChild(createEntry(`Defendant ${defendantCount}`, true));
    });

    document.getElementById("addDefendantSpouse").addEventListener("click", () => {
        if (!defSpouseAdded) {
            container.appendChild(createEntry("Defendant’s Spouse", true));
            defSpouseAdded = true;
        } else {
            alert("Defendant’s Spouse already added.");
        }
    });

    document.getElementById("addCosigner").addEventListener("click", () => {
        cosignerCount++;
        container.appendChild(createEntry(`Co-Signer ${cosignerCount}`, true));
        container.appendChild(createEntry(`Co-Signer ${cosignerCount} - Reference 1`, true));
        container.appendChild(createEntry(`Co-Signer ${cosignerCount} - Reference 2`, true));
    });

    document.getElementById("addCosignerSpouse").addEventListener("click", () => {
        if (!cosSpouseAdded) {
            container.appendChild(createEntry("Co-Signer’s Spouse", true));
            cosSpouseAdded = true;
        } else {
            alert("Co-Signer’s Spouse already added.");
        }
    });

document.addEventListener("DOMContentLoaded", () => {
    // Configuration for each section
    const sectionConfigs = {  
        
        name: [
        { label: "FIRST:", type: "text", name: "address[defendant][name][first]", required: true },
        { label: "MIDDLE:", type: "text", name: "address[defendant][name][middle]" },
        { label: "LAST:", type: "text", name: "address[defendant][name][last]", required: true },
        { label: "ALIAS:", type: "text", name: "alias", placeholder: "Known Alias", required: true },
    ],
    bio: [
        { label: "DOB:", type: "date", name: "dob", required: true },
        { label: "AGE:", type: "text", name: "age-display", readonly: true },
        { label: "DMV #:", type: "text", name: "dmv", placeholder: "123-456-789" },
        { label: "SSN:", type: "text", name: "ssnInput", placeholder: "123-45-6789" },
    ],
    demographics: [
        { label: "SEX:", type: "text", name: "sex", placeholder: "Enter Sex", required: true },
        { label: "RACE:", type: "text", name: "race", placeholder: "Enter Race", required: true },
        { label: "HEIGHT:", type: "text", name: "height", placeholder: "Enter Height", required: true },
        { label: "WEIGHT:", type: "text", name: "weight", placeholder: "Enter Weight", required: true },
        { label: "HAIR:", type: "text", name: "hair", placeholder: "Enter Hair Color", required: true },
        { label: "EYES:", type: "text", name: "eyes", placeholder: "Enter Eye Color", required: true },
    ],
    bondInfo: [
        { label: "COUNTY:", type: "text", name: "county", placeholder: "Enter County", required: true },
        { label: "BOND AMOUNT:", type: "text", name: "bondAmount", placeholder: "Enter Bond Amount", required: true },
        { label: "CHARGES:", type: "text", name: "charges", placeholder: "Enter Charges", required: true },
        { label: "WARRANT #:", type: "text", name: "warrantNumber" },
        { label: "CASE #:", type: "text", name: "caseNumber" },
    ],
    addressResidence: [
        { label: "STREET:", type: "text", name: "address[defendant][street]", required: true },
        { label: "APT:", type: "text", name: "address[defendant][apt]" },
        { label: "CITY:", type: "text", name: "address[defendant][city]", required: true },
        { label: "STATE:", type: "text", name: "address[defendant][state]", required: true },
        { label: "ZIP:", type: "text", name: "address[defendant][zipCode]", required: true },
    ],
};

let defendantCount = 1;

// Create fields dynamically for a specific section
function createFieldCard(label, type, name, placeholder = "", required = false, readonly = false) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const cardContentDiv = document.createElement("div");
    cardContentDiv.classList.add("card-content");

    const fieldLabel = document.createElement("label");
    fieldLabel.textContent = label;

    const inputField = document.createElement("input");
    inputField.type = type;
    inputField.name = name;
    if (placeholder) inputField.placeholder = placeholder;
    if (required) inputField.required = true;
    if (readonly) inputField.readOnly = true;

    cardContentDiv.appendChild(fieldLabel);
    cardContentDiv.appendChild(inputField);
    cardDiv.appendChild(cardContentDiv);

    return cardDiv;
}

// Create an entire Defendant entry with all sections
function createDefendantEntry(defendantId) {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    containerDiv.id = `defendant-${defendantId}`;

    const header = document.createElement("h3");
    header.textContent = `Defendant ${defendantId}`;
    containerDiv.appendChild(header);

    Object.keys(sectionConfigs).forEach((section) => {
        const sectionContainer = document.createElement("div");
        sectionContainer.classList.add("section");
        sectionContainer.id = `${section}-defendant-${defendantId}`;

        const sectionHeader = document.createElement("h4");
        sectionHeader.textContent = section.toUpperCase();
        sectionContainer.appendChild(sectionHeader);

        sectionConfigs[section].forEach((field) => {
            const card = createFieldCard(
                field.label,
                field.type,
                `${field.name}-${defendantId}`,
                field.placeholder,
                field.required,
                field.readonly
            );
            sectionContainer.appendChild(card);
        });

        containerDiv.appendChild(sectionContainer);
    });

    // Add Confirm and Edit buttons
    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("card");
    const cardContentDiv = document.createElement("div");
    cardContentDiv.classList.add("card-content");

    const confirmButton = document.createElement("button");
    confirmButton.type = "button";
    confirmButton.textContent = "Confirm";
    confirmButton.classList.add("confirm-btn");
    confirmButton.addEventListener("click", () => {
        alert(`Defendant ${defendantId} confirmed.`);
    });

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.disabled = true;

    cardContentDiv.appendChild(confirmButton);
    cardContentDiv.appendChild(editButton);
    actionsDiv.appendChild(cardContentDiv);
    containerDiv.appendChild(actionsDiv);

    return containerDiv;
}

// Add Buttons Logic
const phoneContainer = document.getElementById("phoneContainer");

// Add new Defendant Entry dynamically
document.getElementById("addDefendant").addEventListener("click", () => {
    defendantCount++;
    const newDefendant = createDefendantEntry(defendantCount);
    phoneContainer.appendChild(newDefendant);
});


    // Initialize with the first Defendant
    phoneContainer.appendChild(createDefendantSection(defendantCount));
});

