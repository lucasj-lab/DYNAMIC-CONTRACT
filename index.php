<?php
session_start();

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Bond Builder</title>
</head>
<body>
<?php require 'header.php'; ?>



<form id="validationForm" action="index.php" method="post">


    <div  class="container-wrapper" id="containerWrapper"></div>   

             
   
    <div  class="container-wrapper">
<div id="overlay" class="overlay">
        <div class="overlay-content">
            <p>Are you sure you want to remove this entry?</p>
            <button id="confirmRemove">Yes, Remove</button>
            <button id="cancelRemove">Cancel</button>
        </div>
</div>
 


     <!-- ROW 1:BIOGRAPHY - NAME, DOB, AGE, DMV, SSN -->
<div class="container">

            


                <input type="hidden" id="todayDate" name="todayDate" style="none"
                    value="<?php echo $_SESSION['todayDate'] ?? ''; ?>" readonly>


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


                </form>
        
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
</div>

              



                <!--  5: Defendant Bio -->
<div class="container">
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

<div class="container">

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



<div class="container">
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
<div class="container">


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
</div>
</div>

<script>


       



function openHeaderOverlay() {
            document.getElementById("headerOverlay").style.width = "30%";
        }

        function closeHeaderOverlay() {
            document.getElementById("headerOverlay").style.width = "0";
        }

        document.addEventListener("DOMContentLoaded", () => {
    function openHeaderOverlay() {
        document.getElementById("headerOverlay").style.width = "100%";
    }

    function closeHeaderOverlay() {
        document.getElementById("headerOverlay").style.width = "0";
    }

    // Close the overlay automatically when the screen is resized to desktop view
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeHeaderOverlay();
        }
    });

    // Overlay Button Event Listeners
    document.getElementById("addDefendant-overlay").addEventListener("click", () => {
        console.log("Add Defendant button in overlay clicked");
        // Add Defendant functionality here
    });

    document.getElementById("addDefendantSpouse-overlay").addEventListener("click", () => {
        console.log("Add Defendant’s Spouse button in overlay clicked");
        // Add Defendant’s Spouse functionality here
    });

    document.getElementById("addCosigner-overlay").addEventListener("click", () => {
        console.log("Add Co-Signer button in overlay clicked");
        // Add Co-Signer functionality here
    });

    document.getElementById("addCosignerSpouse-overlay").addEventListener("click", () => {
        console.log("Add Co-Signer’s Spouse button in overlay clicked");
        // Add Co-Signer’s Spouse functionality here
    });

    document.getElementById("removeDefendant-overlay").addEventListener("click", () => {
        console.log("Remove Defendant button in overlay clicked");
        // Remove Defendant functionality here
    });

    document.getElementById("removeDefendantSpouse-overlay").addEventListener("click", () => {
        console.log("Remove Defendant’s Spouse button in overlay clicked");
        // Remove Defendant’s Spouse functionality here
    });

    document.getElementById("removeCosigner-overlay").addEventListener("click", () => {
        console.log("Remove Co-Signer button in overlay clicked");
        // Remove Co-Signer functionality here
    });

    document.getElementById("removeCosignerSpouse-overlay").addEventListener("click", () => {
        console.log("Remove Co-Signer’s Spouse button in overlay clicked");
        // Remove Co-Signer’s Spouse functionality here
    });
});



        document.addEventListener("DOMContentLoaded", function () {
            const citiesByState = {
                "AL": ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa", "Hoover", "Dothan", "Auburn", "Decatur", "Madison",
                    "Florence", "Gadsden", "Vestavia Hills", "Prattville", "Phenix City", "Alabaster", "Opelika", "Enterprise", "Homewood",
                    "Northport", "Anniston", "Prichard", "Athens", "Daphne", "Pelham", "Albertville", "Bessemer", "Mountain Brook",
                    "Fairhope", "Selma", "Troy", "Center Point", "Helena", "Oxford", "Cullman", "Millbrook", "Saraland", "Hartselle",
                    "Foley", "Muscle Shoals", "Hueytown", "Talladega", "Alexander City", "Scottsboro", "Sylacauga", "Jasper", "Gardendale",
                    "Fort Payne", "Eufaula"],
                "AK": ["Anchorage", "Fairbanks", "Juneau", "Badger", "Knik-Fairview", "College", "Sitka", "Lakes", "Tanaina", "Ketchikan",
                    "Wasilla", "Kalifornsky", "Steele Creek", "Meadow Lakes", "Kodiak", "Fritz Creek", "Homer", "Kenai", "Petersburg", "Sterling",
                    "Soldotna", "Valdez", "Nome", "Kotzebue", "Unalaska", "Bethel", "Palmer", "Wrangell", "Seward", "Dillingham",
                    "Cordova", "North Pole", "Houston", "Metlakatla", "Hooper Bay", "Mountain Village", "Chevak", "Gambell", "Sand Point", "Selawik",
                    "Shishmaref", "Hoonah", "King Cove", "Togiak", "Scammon Bay", "Tanana", "Hydaburg", "Nulato", "Savoonga", "St. Mary's"],
                "AR": ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro", "Rogers", "Conway", "North Little Rock", "Bentonville", "Pine Bluff",
                    "Hot Springs", "Benton", "Sherwood", "Texarkana", "Russellville", "Jacksonville", "Paragould", "Cabot", "West Memphis", "Searcy",
                    "Van Buren", "Bryant", "El Dorado", "Maumelle", "Siloam Springs", "Forrest City", "Harrison", "Marion", "Helena-West Helena", "Camden",
                    "Mountain Home", "Magnolia", "Arkadelphia", "Malvern", "Hope", "Wynne", "Monticello", "Batesville", "Trumann", "Berryville",
                    "Stuttgart", "Heber Springs", "Greenwood", "Gentry", "Clarksville", "Pocahontas", "De Queen", "Lake City", "Nashville", "Beebe"],
                "AZ": ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Glendale", "Gilbert", "Tempe", "Peoria", "Surprise",
                    "Yuma", "Avondale", "Goodyear", "Flagstaff", "Buckeye", "Lake Havasu City", "Casa Grande", "Sierra Vista", "Maricopa", "Oro Valley",
                    "Prescott", "Bullhead City", "Prescott Valley", "Apache Junction", "Kingman", "Queen Creek", "Florence", "San Luis", "Sahuarita", "Douglas",
                    "Eloy", "Payson", "Somerton", "Cottonwood", "Show Low", "Nogales", "Fort Mohave", "Chino Valley", "Coolidge", "Sedona",
                    "New River", "Winslow", "Flowing Wells", "Tuba City", "Safford", "Globe", "Drexel Heights", "Verde Village", "Vail", "Tanque Verde"],
                "CA": ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim",
                    "Stockton", "Riverside", "Irvine", "Santa Ana", "Chula Vista", "Fremont", "San Bernardino", "Modesto", "Fontana", "Oxnard",
                    "Moreno Valley", "Huntington Beach", "Glendale", "Santa Clarita", "Garden Grove", "Santa Rosa", "Oceanside", "Rancho Cucamonga",
                    "Ontario", "Lancaster", "Elk Grove", "Corona", "Palmdale", "Salinas", "Pomona", "Torrance", "Hayward", "Escondido", "Sunnyvale",
                    "Pasadena", "Orange", "Fullerton", "Roseville", "Visalia", "Concord", "Thousand Oaks", "Simi Valley", "Santa Clara", "Victorville",
                    "Vallejo", "Berkeley"],
                "CO": ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton", "Arvada", "Westminster", "Pueblo", "Centennial",
                    "Boulder", "Greeley", "Longmont", "Loveland", "Broomfield", "Grand Junction", "Castle Rock", "Commerce City", "Parker", "Littleton",
                    "Northglenn", "Brighton", "Englewood", "Wheat Ridge", "Fountain", "Lafayette", "Windsor", "Erie", "Evans", "Louisville",
                    "Golden", "Montrose", "Durango", "Cañon City", "Greenwood Village", "Sheridan", "Aspen", "Glenwood Springs", "Steamboat Springs",
                    "Frederick", "Fort Morgan", "Woodland Park", "Edgewater", "Sterling", "Manitou Springs", "Trinidad", "Johnstown", "Firestone",
                    "Eagle", "Alamosa"],
                "CT": ["Bridgeport", "New Haven", "Stamford", "Hartford", "Waterbury", "Norwalk", "Danbury", "New Britain", "West Hartford", "Greenwich",
                    "Fairfield", "Hamden", "Bristol", "Meriden", "Manchester", "West Haven", "Milford", "Stratford", "East Hartford", "Middletown",
                    "Wallingford", "Southington", "Norwich", "Shelton", "Newington", "Torrington", "Glastonbury", "Naugatuck", "New Milford", "Windsor",
                    "Wethersfield", "North Haven", "Ansonia", "Darien", "Trumbull", "Vernon", "New Canaan", "Westport", "Simsbury", "South Windsor",
                    "Farmington", "Groton", "Cheshire", "North Branford", "Mansfield", "East Haven", "New London", "Bethel", "Orange", "Ledyard"],
                "DE": ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna", "Milford", "Seaford", "Georgetown", "Elsmere", "New Castle",
                    "Millsboro", "Laurel", "Harrington", "Camden", "Claymont", "Lewes", "Milton", "Middlesex", "Ocean View", "Bridgeville",
                    "Selbyville", "Rising Sun-Lebanon", "Townsend", "Delmar", "Woodside", "Frederica", "Frankford", "Greenwood", "Cheswold", "Dagsboro",
                    "South Bethany", "Fenwick Island", "Bethel", "Millville", "Rehoboth Beach", "Ellendale", "Dewey Beach", "Henlopen Acres", "Slaughter Beach", "Arden",
                    "Ardencroft", "Ardentown", "Houston", "Wyoming", "Blades", "Bellefonte", "Hartly", "Bethany Beach", "Leipsic", "Fenwick"],
                "FL": ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Tallahassee", "Fort Lauderdale", "Port St. Lucie", "Cape Coral",
                    "Pembroke Pines", "Hollywood", "Miramar", "Gainesville", "Coral Springs", "Miami Gardens", "Clearwater", "Palm Bay", "Pompano Beach", "West Palm Beach",
                    "Lakeland", "Davie", "Boca Raton", "Sunrise", "Deltona", "Plantation", "Fort Myers", "Largo", "Melbourne", "Deerfield Beach",
                    "Palm Coast", "Boynton Beach", "Lauderhill", "Weston", "Kissimmee", "Homestead", "Delray Beach", "Daytona Beach", "North Miami", "Tamarac",
                    "Ocala", "Wellington", "Port Orange", "Jupiter", "Doral", "Coconut Creek", "Sanford", "Margate", "Sarasota", "Pensacola"],
                "GA": ["Atlanta", "Columbus", "Augusta", "Macon", "Savannah", "Athens", "Sandy Springs", "South Fulton", "Roswell", "Johns Creek",
                    "Warner Robins", "Albany", "Alpharetta", "Marietta", "Stonecrest", "Smyrna", "Valdosta", "Brookhaven", "Dunwoody", "Peachtree Corners",
                    "Gainesville", "Newnan", "Milton", "Rome", "East Point", "Woodstock", "Douglasville", "Hinesville", "Kennesaw", "LaGrange",
                    "Statesboro", "Lawrenceville", "Dalton", "Chamblee", "Pooler", "Stockbridge", "Peachtree City", "Carrollton", "Griffin", "Canton",
                    "McDonough", "Acworth", "Union City", "Sugar Hill", "Decatur", "Evans", "Conyers", "Powder Springs", "Douglas", "Covington"],
                "HI": ["Honolulu", "East Honolulu", "Pearl City", "Hilo", "Waipahu", "Kailua", "Kaneohe", "Mililani Town", "Ewa Gentry", "Kahului",
                    "Mililani Mauka", "Kapolei", "Makakilo", "Ewa Beach", "Wahiawa", "Schofield Barracks", "Wailuku", "Lahaina", "Waimea", "Hawaiian Paradise Park",
                    "Kalaoa", "Keaau", "Napili-Honokowai", "Hickam Housing", "Waialua", "Hauula", "Kula", "Waikoloa Village", "Holualoa", "Aiea",
                    "Makawao", "Pukalani", "Pahala", "Kaunakakai", "Mountain View", "Lanai City", "Laie", "Hanapepe", "Waimea", "Anahola",
                    "Eleele", "Captain Cook", "Honokaa", "Paia", "Papaikou", "Kealakekua", "Waimanalo", "Princeville", "Koloa", "Pepeekeo"],
                "ID": ["Boise", "Meridian", "Nampa", "Idaho Falls", "Caldwell", "Pocatello", "Coeur d'Alene", "Twin Falls", "Post Falls", "Rexburg",
                    "Lewiston", "Eagle", "Moscow", "Kuna", "Ammon", "Chubbuck", "Hayden", "Mountain Home", "Blackfoot", "Garden City",
                    "Jerome", "Burley", "Middleton", "Sandpoint", "Star", "Hailey", "Emmett", "Rathdrum", "Rupert", "Weiser",
                    "Payette", "Buhl", "Preston", "Mountain Home AFB", "Gooding", "Kimberly", "Shelley", "Fruitland", "American Falls", "Bellevue",
                    "Orofino", "St. Maries", "Salmon", "Grangeville", "Malad City", "Montpelier", "Driggs", "Filer", "Sugar City", "McCall"],
                "IL": ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Springfield", "Elgin", "Peoria", "Champaign", "Waukegan",
                    "Cicero", "Bloomington", "Arlington Heights", "Evanston", "Decatur", "Schaumburg", "Bolingbrook", "Palatine", "Skokie", "Des Plaines",
                    "Orland Park", "Tinley Park", "Oak Lawn", "Berwyn", "Mount Prospect", "Normal", "Wheaton", "Hoffman Estates", "Oak Park", "Downers Grove",
                    "Glenview", "Belleville", "Elmhurst", "Plainfield", "DeKalb", "Moline", "Urbana", "Lombard", "Buffalo Grove", "Bartlett",
                    "Quincy", "Crystal Lake", "Streamwood", "Carol Stream", "Romeoville", "Rock Island", "Hanover Park", "Carpentersville", "Wheeling", "Park Ridge"],
                "IN": ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel", "Fishers", "Bloomington", "Hammond", "Gary", "Lafayette",
                    "Muncie", "Noblesville", "Terre Haute", "Greenwood", "Kokomo", "Anderson", "Elkhart", "Mishawaka", "Lawrence", "Jeffersonville",
                    "Columbus", "Westfield", "Portage", "New Albany", "Richmond", "Plainfield", "Merrillville", "Goshen", "Michigan City", "Crown Point",
                    "Granger", "Valparaiso", "East Chicago", "Hobart", "Zionsville", "Schererville", "Brownsburg", "Marion", "Franklin", "Greenfield",
                    "La Porte", "Seymour", "Clarksville", "Avon", "Munster", "Logansport", "Jasper", "Warsaw", "Bedford", "Huntington"],
                "IA": ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City", "Ankeny", "West Des Moines", "Ames", "Waterloo", "Council Bluffs",
                    "Dubuque", "Urbandale", "Marion", "Bettendorf", "Mason City", "Marshalltown", "Clinton", "Newton", "Fort Dodge", "Ottumwa",
                    "Muscatine", "Cedar Falls", "Indianola", "Altoona", "Burlington", "Johnston", "Clive", "North Liberty", "Carroll", "Spencer",
                    "Pella", "Oskaloosa", "Storm Lake", "Waukee", "Boone", "Grinnell", "Norwalk", "Denison", "Charles City", "Mount Pleasant",
                    "Fairfield", "Fort Madison", "Le Mars", "Decorah", "Estherville", "Keokuk", "Webster City", "Perry", "Waverly", "Washington"],
                "KS": ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka", "Lawrence", "Shawnee", "Lenexa", "Manhattan", "Salina",
                    "Hutchinson", "Leavenworth", "Leawood", "Dodge City", "Garden City", "Emporia", "Junction City", "Derby", "Prairie Village", "Gardner",
                    "Hays", "Pittsburg", "Newton", "Liberal", "Andover", "Great Bend", "McPherson", "El Dorado", "Ottawa", "Parsons",
                    "Arkansas City", "Merriam", "Chanute", "Winfield", "Haysville", "Fort Scott", "Atchison", "Roeland Park", "Bonner Springs", "Wellington",
                    "Independence", "Mission", "Ulysses", "Coffeyville", "Augusta", "Paola", "Lansing", "Concordia", "Abilene", "Bel Aire"],
                "KY": ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington", "Richmond", "Georgetown", "Florence", "Hopkinsville", "Nicholasville",
                    "Elizabethtown", "Henderson", "Frankfort", "Jeffersontown", "Independence", "Paducah", "Radcliff", "Ashland", "Madisonville", "Erlanger",
                    "Winchester", "Murray", "St. Matthews", "Danville", "Fort Thomas", "Shelbyville", "Shively", "Berea", "Shepherdsville", "Somerset",
                    "Newport", "Mount Washington", "Clarksville", "Glasgow", "Fort Mitchell", "Alexandria", "Lawrenceburg", "Middlesboro", "Mayfield", "Lebanon",
                    "Pikeville", "Versailles", "Bardstown", "Paris", "Russellville", "Taylor Mill", "Villa Hills", "Maysville", "Wilmore", "Corbin"],
                "LA": ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles", "Kenner", "Bossier City", "Monroe", "Alexandria", "Houma",
                    "Marrero", "Central", "Slidell", "Prairieville", "Terrytown", "Ruston", "Metairie", "Hammond", "Harvey", "Laplace",
                    "Bayou Cane", "New Iberia", "Natchitoches", "Opelousas", "Mandeville", "Crowley", "Sulphur", "Zachary", "Thibodaux", "Abbeville",
                    "Gretna", "Bogalusa", "Pineville", "Estelle", "Chalmette", "Baker", "DeRidder", "Jennings", "Youngsville", "West Monroe",
                    "Morgan City", "Eunice", "Covington", "Franklin", "Jeanerette", "Ville Platte", "Donaldsonville", "Bastrop", "Marksville", "Leesville"],
                "ME": ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn", "Biddeford", "Sanford", "Brunswick", "Scarborough", "Saco",
                    "Westbrook", "Augusta", "Windham", "Waterville", "Presque Isle", "York", "Falmouth", "Kennebunk", "Orono", "Wells",
                    "Standish", "Old Orchard Beach", "Brewer", "Topsham", "Caribou", "Bath", "Rockland", "Ellsworth", "Farmington", "Yarmouth",
                    "Cumberland", "Hampden", "Gardiner", "Freeport", "Houlton", "Gray", "Skowhegan", "Buxton", "Kittery", "Bar Harbor",
                    "Turner", "New Gloucester", "Norridgewock", "Camden", "Jay", "Boothbay Harbor", "Madison", "Lincoln", "Bridgton", "Poland"],
                "MD": ["Baltimore", "Columbia", "Germantown", "Silver Spring", "Waldorf", "Frederick", "Ellicott City", "Glen Burnie", "Gaithersburg", "Rockville",
                    "Bethesda", "Dundalk", "Bowie", "Towson", "Aspen Hill", "Severn", "Wheaton", "Bel Air South", "Odenton", "Catonsville",
                    "Hagerstown", "Essex", "Annapolis", "Clinton", "Reisterstown", "Pikesville", "Owings Mills", "Randallstown", "Woodlawn", "Crofton",
                    "Parkville", "Suitland", "Cockeysville", "Severna Park", "Edgewood", "Lake Shore", "Middle River", "Eldersburg", "Hyattsville", "Havre de Grace",
                    "Carney", "Pasadena", "Chillum", "Lutherville", "Camp Springs", "Elkridge", "Colesville", "South Laurel", "Fairland", "Montgomery Village"],
                "MA": ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell", "Brockton", "Quincy", "Lynn", "Fall River", "Newton",
                    "Lawrence", "Somerville", "Framingham", "Haverhill", "Waltham", "Malden", "Brookline", "Medford", "Taunton", "Chicopee",
                    "Weymouth", "Revere", "Peabody", "Methuen", "Barnstable", "Pittsfield", "Attleboro", "Everett", "Salem", "Westfield",
                    "Leominster", "Beverly", "Fitchburg", "Holyoke", "Marlborough", "Woburn", "Chelsea", "Braintree", "Watertown", "Randolph",
                    "Franklin", "Amherst", "Danvers", "Milton", "Dedham", "North Attleborough", "Gloucester", "Shrewsbury", "Needham", "West Springfield"],
                "MA": ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell", "Brockton", "Quincy", "Lynn", "New Bedford", "Fall River",
                    "Newton", "Lawrence", "Somerville", "Waltham", "Haverhill", "Malden", "Medford", "Taunton", "Chicopee", "Weymouth",
                    "Revere", "Peabody", "Methuen", "Barnstable", "Pittsfield", "Attleboro", "Everett", "Salem", "Westfield", "Leominster",
                    "Fitchburg", "Beverly", "Holyoke", "Marlborough", "Woburn", "Chelsea", "Braintree", "Watertown", "Franklin", "Lexington",
                    "Amherst", "Needham", "Agawam", "Randolph", "Melrose", "Danvers", "Dedham", "Belmont", "Natick", "Wellesley"],
                "MI": ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Flint", "Dearborn", "Livonia", "Westland",
                    "Troy", "Farmington Hills", "Kalamazoo", "Wyoming", "Rochester Hills", "Southfield", "Taylor", "Pontiac", "St. Clair Shores", "Dearborn Heights",
                    "Royal Oak", "Novi", "Battle Creek", "Saginaw", "Kentwood", "East Lansing", "Roseville", "Portage", "Midland", "Lincoln Park",
                    "Muskegon", "Bay City", "Jackson", "Holland", "Eastpointe", "Port Huron", "Southgate", "Burton", "Madison Heights", "Oak Park",
                    "Allen Park", "Garden City", "Wyandotte", "Mount Pleasant", "Monroe", "Birmingham", "Ferndale", "Ypsilanti", "Walker", "Adrian"],
                "MN": ["Minneapolis", "Saint Paul", "Rochester", "Duluth", "Bloomington", "Brooklyn Park", "Plymouth", "Maple Grove", "Woodbury", "St. Cloud",
                    "Eagan", "Eden Prairie", "Coon Rapids", "Burnsville", "Blaine", "Lakeville", "Minnetonka", "Apple Valley", "Edina", "St. Louis Park",
                    "Mankato", "Maplewood", "Moorhead", "Shakopee", "Richfield", "Cottage Grove", "Inver Grove Heights", "Roseville", "Andover", "Brooklyn Center",
                    "Savage", "Hastings", "Oakdale", "Fridley", "Winona", "Shoreview", "Prior Lake", "White Bear Lake", "Champlin", "Farmington",
                    "New Brighton", "Anoka", "Chaska", "Robbinsdale", "Forest Lake", "South St. Paul", "Stillwater", "Northfield", "Otsego", "Willmar"],
                "MS": ["Jackson", "Gulfport", "Southaven", "Biloxi", "Hattiesburg", "Olive Branch", "Tupelo", "Meridian", "Greenville", "Madison",
                    "Horn Lake", "Pearl", "Clinton", "Brandon", "Ridgeland", "Pascagoula", "Oxford", "Starkville", "Columbus", "Vicksburg",
                    "Gautier", "Clarksdale", "Ocean Springs", "Natchez", "Hernando", "Greenwood", "McComb", "Long Beach", "Laurel", "Brookhaven",
                    "Byram", "Bay St. Louis", "Picayune", "Petal", "Canton", "Grenada", "Indianola", "Booneville", "Richland", "Kosciusko",
                    "Corinth", "Amory", "Philadelphia", "Yazoo City", "Batesville", "West Point", "Cleveland", "Flowood", "Raymond", "Crystal Springs"],
                "MO": ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence", "Lee's Summit", "O'Fallon", "St. Joseph", "St. Charles", "Blue Springs",
                    "Florissant", "Joplin", "Chesterfield", "Jefferson City", "Cape Girardeau", "Wildwood", "University City", "Ballwin", "Raytown", "Liberty",
                    "Wentzville", "Mehlville", "Kirkwood", "Gladstone", "Belton", "Sedalia", "Hazelwood", "Maryland Heights", "Grandview", "Webster Groves",
                    "Arnold", "Rolla", "Ferguson", "Affton", "Nixa", "Ozark", "Republic", "Parkville", "Creve Coeur", "Sikeston",
                    "Neosho", "Bridgeton", "Hannibal", "Raymore", "Lebanon", "Jennings", "Poplar Bluff", "Carthage", "Lake St. Louis", "Moberly"],
                "MT": ["Billings", "Missoula", "Great Falls", "Bozeman", "Butte", "Helena", "Kalispell", "Havre", "Anaconda", "Miles City",
                    "Belgrade", "Livingston", "Laurel", "Whitefish", "Sidney", "Lewistown", "Glendive", "Columbia Falls", "Polson", "Hamilton",
                    "Dillon", "Hardin", "Glasgow", "Shelby", "Libby", "Cut Bank", "Deer Lodge", "Eureka", "Forsyth", "Red Lodge",
                    "Baker", "Choteau", "Conrad", "Colstrip", "Wolf Point", "Townsend", "Malta", "Roundup", "Plentywood", "Chinook",
                    "Thompson Falls", "Big Timber", "Bigfork", "Superior", "Manhattan", "Big Sky", "Stevensville", "West Yellowstone", "Lolo", "Four Corners"],
                "NE": ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney", "Fremont", "Hastings", "Norfolk", "Columbus", "Papillion",
                    "La Vista", "Scottsbluff", "South Sioux City", "Beatrice", "Lexington", "Gering", "Alliance", "Blair", "York", "McCook",
                    "Ralston", "Nebraska City", "Crete", "Seward", "Schuyler", "Plattsmouth", "Sidney", "Chadron", "Wayne", "Holdrege",
                    "Auburn", "Gothenburg", "Ogallala", "Valentine", "David City", "Falls City", "St. Paul", "Central City", "Geneva", "West Point",
                    "Broken Bow", "Fairbury", "Ord", "O'Neill", "Kimball", "Wahoo", "Tekamah", "Cozad", "Red Cloud", "Hartington"],
                "NV": ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Paradise", "Spring Valley", "Sunrise Manor", "Enterprise", "Sparks", "Carson City",
                    "Whitney", "Pahrump", "Winchester", "Summerlin South", "Fernley", "Sun Valley", "Elko", "Mesquite", "Boulder City", "Spanish Springs",
                    "Gardnerville Ranchos", "Cold Springs", "Dayton", "Incline Village", "Moapa Valley", "Laughlin", "Indian Hills", "Johnson Lane", "Battle Mountain", "Stagecoach",
                    "Spring Creek", "Ely", "Zephyr Cove", "West Wendover", "Tonopah", "Carlin", "Hawthorne", "Yerington", "Minden", "Bunkerville",
                    "Verdi", "Wells", "Silver Springs", "Panaca", "Beatty", "Caliente", "Smith Valley", "Pyramid Lake", "Schurz", "Lovelock"],
                "NH": ["Manchester", "Nashua", "Concord", "Derry", "Dover", "Rochester", "Salem", "Merrimack", "Hudson", "Londonderry",
                    "Keene", "Bedford", "Portsmouth", "Goffstown", "Laconia", "Hampton", "Milford", "Durham", "Exeter", "Windham",
                    "Hooksett", "Claremont", "Lebanon", "Pelham", "Somersworth", "Hanover", "Raymond", "Berlin", "Amherst", "Plaistow",
                    "Seabrook", "Franklin", "Newmarket", "Bow", "Belmont", "Farmington", "Wolfeboro", "Pembroke", "Gilford", "Kingston",
                    "Atkinson", "Newport", "Hollis", "Hampstead", "Weare", "Sandown", "Swanzey", "Greenland", "Brentwood", "Sunapee"],
                "NJ": ["Newark", "Jersey City", "Paterson", "Elizabeth", "Lakewood", "Edison", "Woodbridge", "Toms River", "Hamilton", "Trenton",
                    "Clifton", "Camden", "Brick", "Cherry Hill", "Passaic", "Union City", "Old Bridge", "Franklin", "Middletown", "Bayonne",
                    "East Orange", "North Bergen", "Vineland", "Union", "Piscataway", "New Brunswick", "Jackson", "Wayne", "Irvington", "Parsippany-Troy Hills",
                    "Hoboken", "Perth Amboy", "Plainfield", "West New York", "Washington", "East Brunswick", "Bloomfield", "West Orange", "Evesham", "Bridgewater",
                    "South Brunswick", "Egg Harbor", "Hackensack", "Sayreville", "Mount Laurel", "North Brunswick", "Kearny", "Linden", "Marlboro", "Teaneck"],
                "NM": ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell", "Farmington", "Hobbs", "Clovis", "Carlsbad", "Gallup",
                    "Alamogordo", "Los Lunas", "Deming", "Chaparral", "Sunland Park", "Las Vegas", "Portales", "Los Alamos", "Artesia", "Lovington",
                    "Silver City", "Espanola", "Anthony", "Raton", "Bernalillo", "Grants", "Socorro", "Shiprock", "Taos", "Belen",
                    "Corrales", "Aztec", "Bloomfield", "Santa Teresa", "Truth or Consequences", "Edgewood", "White Rock", "Tucumcari", "Zuni Pueblo", "Tularosa",
                    "Lordsburg", "Peralta", "Eunice", "Estancia", "Jemez Pueblo", "Milan", "Mesilla", "Dexter", "Bayard", "Fort Sumner"],
                "NY": ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica",
                    "White Plains", "Hempstead", "Troy", "Niagara Falls", "Binghamton", "Freeport", "Valley Stream", "Rome", "Ithaca", "Long Beach",
                    "Poughkeepsie", "North Tonawanda", "Jamestown", "Saratoga Springs", "Middletown", "Glen Cove", "Peekskill", "Kingston", "Lindenhurst", "Lockport",
                    "Ossining", "Cortland", "Plattsburgh", "Watertown", "Newburgh", "Garden City", "Tonawanda", "Amsterdam", "Cohoes", "Glens Falls",
                    "Batavia", "Lackawanna", "Oneonta", "Canandaigua", "Geneva", "Oswego", "Fulton", "Hornell", "Dunkirk", "Ogdensburg"],
                "NC": ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington", "High Point", "Concord",
                    "Greenville", "Asheville", "Jacksonville", "Gastonia", "Chapel Hill", "Rocky Mount", "Burlington", "Wilson", "Huntersville", "Kannapolis",
                    "Apex", "Hickory", "Goldsboro", "Indian Trail", "Mooresville", "Monroe", "Salisbury", "New Bern", "Holly Springs", "Matthews",
                    "Sanford", "Elizabeth City", "Garner", "Cornelius", "Fuquay-Varina", "Shelby", "Carrboro", "Asheboro", "Clemmons", "Morrisville",
                    "Lenoir", "Wake Forest", "Thomasville", "Statesville", "Mint Hill", "Kernersville", "Wilson's Mills", "Roanoke Rapids", "Southern Pines", "Laurinburg"],
                "ND": ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo", "Williston", "Dickinson", "Mandan", "Jamestown", "Wahpeton",
                    "Devils Lake", "Valley City", "Grafton", "Beulah", "Watford City", "Horace", "Lincoln", "Casselton", "Harvey", "New Town",
                    "Hazen", "Stanley", "Bottineau", "Oakes", "Rugby", "Carrington", "Hillsboro", "Langdon", "Thompson", "Lisbon",
                    "Cavalier", "Bowman", "Velva", "Larimore", "Mayville", "Killdeer", "Park River", "Linton", "Garrison", "Tioga",
                    "Kindred", "Enderlin", "Harwood", "Washburn", "Hettinger", "Ashley", "Wishek", "Ellendale", "Cando", "Kenmare"],
                "OH": ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Parma", "Canton", "Youngstown", "Lorain",
                    "Hamilton", "Springfield", "Kettering", "Elyria", "Lakewood", "Cuyahoga Falls", "Middletown", "Newark", "Euclid", "Mentor",
                    "Beavercreek", "Dublin", "Strongsville", "Findlay", "Lima", "Huber Heights", "Marion", "Westerville", "Lancaster", "Grove City",
                    "Delaware", "Reynoldsburg", "Fairfield", "Mansfield", "Upper Arlington", "Westlake", "Troy", "Shaker Heights", "Bowling Green", "North Olmsted",
                    "North Ridgeville", "Stow", "Gahanna", "Massillon", "Brunswick", "Xenia", "Kent", "Austintown", "Medina", "Zanesville"],
                "OK": ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond", "Lawton", "Moore", "Midwest City", "Enid", "Stillwater",
                    "Muskogee", "Bartlesville", "Owasso", "Shawnee", "Yukon", "Bixby", "Ardmore", "Ponca City", "Duncan", "Del City",
                    "Jenks", "Sapulpa", "Bethany", "Sand Springs", "Mustang", "Durant", "Altus", "McAlester", "El Reno", "Chickasha",
                    "Claremore", "Miami", "Woodward", "Ada", "Tahlequah", "Weatherford", "Guthrie", "Guymon", "Pryor Creek", "Warr Acres",
                    "Blanchard", "Dewey", "Glenpool", "Poteau", "Newcastle", "Seminole", "Okmulgee", "Purcell", "Cushing", "Sallisaw"],
                "OR": ["Portland", "Eugene", "Salem", "Gresham", "Hillsboro", "Beaverton", "Bend", "Medford", "Springfield", "Corvallis",
                    "Albany", "Tigard", "Lake Oswego", "Keizer", "Grants Pass", "Oregon City", "McMinnville", "Redmond", "Tualatin", "West Linn",
                    "Woodburn", "Newberg", "Forest Grove", "Wilsonville", "Roseburg", "Klamath Falls", "Ashland", "Milwaukie", "Central Point", "Canby",
                    "Hermiston", "Lebanon", "Pendleton", "Coos Bay", "Dallas", "The Dalles", "St. Helens", "La Grande", "Cornelius", "Gladstone",
                    "Ontario", "Newport", "Troutdale", "Monmouth", "Seaside", "Sherwood", "Silverton", "Stayton", "Sweet Home", "Tillamook"],
                "PA": ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "York",
                    "Altoona", "Wilkes-Barre", "State College", "Chester", "Bethel Park", "Williamsport", "Monroeville", "Norristown", "Plum", "Easton",
                    "Lebanon", "Hazleton", "New Castle", "Johnstown", "McKeesport", "Hermitage", "Carlisle", "Butler", "Meadville", "Greensburg",
                    "Pottsville", "Phoenixville", "Wilkinsburg", "West Mifflin", "Lansdale", "Hanover", "King of Prussia", "Waynesboro", "Drexel Hill", "Emmaus",
                    "New Kensington", "Ephrata", "Chambersburg", "Latrobe", "Whitehall", "Gettysburg", "Bloomsburg", "Lower Burrell", "Ellwood City", "Sunbury"],
                "RI": ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence", "Woonsocket", "Coventry", "Cumberland", "North Providence", "South Kingstown",
                    "West Warwick", "Johnston", "North Kingstown", "Newport", "Bristol", "Westerly", "Smithfield", "Lincoln", "Central Falls", "Portsmouth",
                    "Barrington", "Middletown", "Tiverton", "Narragansett", "East Greenwich", "Scituate", "Burrillville", "Glocester", "Hopkinton", "Charlestown",
                    "Exeter", "Richmond", "Jamestown", "Little Compton", "West Greenwich", "Foster", "Tiverton Four Corners", "Wakefield", "Kingston", "Greenville",
                    "Ashaway", "Hope Valley", "Pascoag", "Wyoming", "Slatersville", "Saunderstown", "Bradford", "Clayville", "Harmony", "Mapleville"],
                "SC": ["Charleston", "Columbia", "North Charleston", "Mount Pleasant", "Rock Hill", "Greenville", "Summerville", "Goose Creek", "Sumter", "Florence",
                    "Spartanburg", "Myrtle Beach", "Anderson", "Greer", "Aiken", "Mauldin", "Greenwood", "North Augusta", "Simpsonville", "Easley",
                    "Conway", "Hanahan", "Lexington", "West Columbia", "Clemson", "Orangeburg", "Bluffton", "Gaffney", "Beaufort", "Newberry",
                    "Tega Cay", "Fort Mill", "Port Royal", "Forest Acres", "Camden", "Georgetown", "Seneca", "York", "Laurens", "Dillon",
                    "Lancaster", "Bennettsville", "Fountain Inn", "Irmo", "Walterboro", "Hartsville", "Moncks Corner", "Lake City", "Marion", "North Myrtle Beach"],
                "SD": ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown", "Mitchell", "Yankton", "Pierre", "Huron", "Spearfish",
                    "Box Elder", "Vermillion", "Brandon", "Madison", "Sturgis", "Harrisburg", "Belle Fourche", "Tea", "Dell Rapids", "Mobridge",
                    "Hot Springs", "Custer", "Milbank", "Sisseton", "Wagner", "Hartford", "Dakota Dunes", "Redfield", "Pine Ridge", "North Sioux City",
                    "Flandreau", "Canton", "Lead", "Winner", "Lennox", "Gregory", "Britton", "Chamberlain", "Elk Point", "Garretson",
                    "Clark", "Parker", "Tyndall", "Miller", "Fort Pierre", "Philip", "Kadoka", "Lemmon", "Faith", "Ipswich"],
                "TN": ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville", "Murfreesboro", "Franklin", "Jackson", "Johnson City", "Bartlett",
                    "Hendersonville", "Kingsport", "Collierville", "Cleveland", "Smyrna", "Germantown", "Brentwood", "Columbia", "Spring Hill", "La Vergne",
                    "Cookeville", "Gallatin", "Mount Juliet", "Lebanon", "Oak Ridge", "Morristown", "Maryville", "Bristol", "Shelbyville", "Tullahoma",
                    "East Ridge", "Farragut", "Sevierville", "Dyersburg", "Springfield", "Goodlettsville", "Greeneville", "McMinnville", "Portland", "Soddy-Daisy",
                    "Athens", "Elizabethton", "Lakeland", "Lawrenceburg", "Red Bank", "Martin", "Harriman", "Milan", "Signal Mountain", "Alcoa"],
                "TX": ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Laredo",
                    "Lubbock", "Garland", "Irving", "Amarillo", "Grand Prairie", "Brownsville", "McKinney", "Frisco", "Pasadena", "McAllen",
                    "Killeen", "Mesquite", "Midland", "Denton", "Waco", "Carrollton", "Round Rock", "Abilene", "Odessa", "Pearland",
                    "Richardson", "Sugar Land", "Beaumont", "The Woodlands", "College Station", "Lewisville", "League City", "Tyler", "Wichita Falls", "Allen",
                    "San Angelo", "Edinburg", "Conroe", "Bryan", "Mission", "New Braunfels", "Longview", "Pharr", "Flower Mound", "Baytown"],
                "UT": ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem", "Sandy", "St. George", "Ogden", "Layton", "South Jordan",
                    "Lehi", "Millcreek", "Taylorsville", "Logan", "Murray", "Draper", "Bountiful", "Riverton", "Spanish Fork", "Pleasant Grove",
                    "Eagle Mountain", "Kearns", "Tooele", "Herriman", "Cottonwood Heights", "Springville", "Midvale", "Roy", "American Fork", "Syracuse",
                    "South Salt Lake", "Holladay", "Cedar City", "Clearfield", "Magna", "Kaysville", "South Ogden", "North Ogden", "Washington", "Hurricane",
                    "Payson", "Brigham City", "Saratoga Springs", "Farmington", "West Haven", "Tremonton", "Heber City", "Park City", "North Salt Lake", "Vernal"],
                "VT": ["Burlington", "South Burlington", "Rutland", "Essex Junction", "Bennington", "Brattleboro", "Milton", "Hartford", "Barre", "Montpelier",
                    "Middlebury", "Winooski", "St. Albans", "Shelburne", "St. Johnsbury", "Williston", "Northfield", "Lyndon", "Springfield", "Swanton",
                    "Morristown", "Rockingham", "Colchester", "Hinesburg", "Waterbury", "Hartland", "Brandon", "Randolph", "Richmond", "Derby",
                    "Newport", "Fair Haven", "Berlin", "North Bennington", "Castleton", "Manchester", "Poultney", "Johnson", "Chester", "Norwich",
                    "Pittsford", "Woodstock", "Bethel", "Cavendish", "Enosburg Falls", "Fairfax", "Hardwick", "Barre Town", "Vergennes", "Windsor"],
                "VA": ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News", "Alexandria", "Hampton", "Roanoke", "Portsmouth", "Suffolk",
                    "Lynchburg", "Centreville", "Dale City", "Reston", "Harrisonburg", "Leesburg", "Ashburn", "McLean", "Tuckahoe", "Charlottesville",
                    "Blacksburg", "Lake Ridge", "Danville", "Linton Hall", "Burke", "Manassas", "Woodbridge", "Annandale", "Petersburg", "Mechanicsville",
                    "Springfield", "Franconia", "Fair Oaks", "Cave Spring", "Sterling", "Bailey’s Crossroads", "Tysons", "Oakton", "Lincolnia", "Hopewell",
                    "Waynesboro", "Radford", "Marion", "Bristol", "Short Pump", "Winchester", "Front Royal", "Staunton", "South Riding", "Chantilly"],
                "WA": ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", "Kent", "Everett", "Renton", "Federal Way", "Yakima",
                    "Spokane Valley", "Kirkland", "Bellingham", "Kennewick", "Auburn", "Pasco", "Marysville", "Lakewood", "Redmond", "Shoreline",
                    "Sammamish", "Richland", "Burien", "Olympia", "Lacey", "Edmonds", "Bremerton", "Puyallup", "Longview", "Lynnwood",
                    "Bothell", "Walla Walla", "Issaquah", "Mount Vernon", "University Place", "Pullman", "Des Moines", "SeaTac", "Spanaway", "Lake Stevens",
                    "Maple Valley", "Mercer Island", "Moses Lake", "Oak Harbor", "Kenmore", "Silverdale", "Covington", "Mill Creek", "Camas", "Battle Ground"],
                "WV": ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling", "Weirton", "Fairmont", "Martinsburg", "Beckley", "Clarksburg",
                    "South Charleston", "Vienna", "St. Albans", "Bluefield", "Bridgeport", "Oak Hill", "Moundsville", "Elkins", "Dunbar", "Nitro",
                    "Hurricane", "Princeton", "Keyser", "Ranson", "Charles Town", "Buckhannon", "Point Pleasant", "Westover", "Fayetteville", "New Martinsville",
                    "Barboursville", "Lewisburg", "Ravenswood", "Pleasant Valley", "Petersburg", "Montgomery", "Kenova", "Belington", "Hinton", "Grafton",
                    "Shinnston", "Richwood", "Summersville", "Rainelle", "Wellsburg", "Chester", "Ripley", "Spencer", "Marlinton", "Romney"],
                "WI": ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine", "Appleton", "Waukesha", "Eau Claire", "Oshkosh", "Janesville",
                    "West Allis", "La Crosse", "Sheboygan", "Wauwatosa", "Fond du Lac", "Brookfield", "New Berlin", "Wausau", "Menomonee Falls", "Greenfield",
                    "Beloit", "Franklin", "Oak Creek", "Manitowoc", "Sun Prairie", "West Bend", "Superior", "Stevens Point", "Neenah", "Muskego",
                    "Caledonia", "Mount Pleasant", "De Pere", "Mequon", "Watertown", "South Milwaukee", "Marshfield", "Wisconsin Rapids", "Fitchburg", "Cudahy",
                    "Howard", "Germantown", "Middleton", "Ashwaubenon", "Pewaukee", "Menasha", "Platteville", "River Falls", "Stoughton", "Hudson"],
                "WY": ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs", "Sheridan", "Green River", "Evanston", "Riverton", "Jackson",
                    "Cody", "Rawlins", "Lander", "Torrington", "Powell", "Douglas", "Buffalo", "Ranchettes", "Worland", "Newcastle",
                    "Bar Nunn", "Kemmerer", "Thermopolis", "Wheatland", "Mills", "Saratoga", "Moorcroft", "Pinedale", "Lovell", "Evansville",
                    "Afton", "Glenrock", "Lusk", "Mountain View", "Greybull", "Pine Bluffs", "Basin", "Dubois", "Big Piney", "Shoshoni",
                    "Sundance", "Upton", "Guernsey", "Lingle", "Midwest", "Chugwater", "Baggs", "Kirby", "Manville", "Opal"],
            }


            function updateCities() {
                const stateInput = document.getElementById("state").value.toUpperCase();
                const cityList = document.getElementById("cityList");

                // Clear existing options
                cityList.innerHTML = "";

                if (citiesByState[stateInput]) {
                    citiesByState[stateInput].forEach(city => {
                        let option = document.createElement("option");
                        option.value = city;
                        cityList.appendChild(option);
                    });
                }
            }

            // Attach event listener to state input field
            document.getElementById("state").addEventListener("input", updateCities);
        });

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

                // Lock alternate ID if present
                let row = document.getElementById(rowId);
                let altId = row?.getAttribute("data-alt-id");
                if (altId) {
                    lockRow(altId); // Recursively lock alt ID
                }

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

                // Unlock alternate ID if present
                let row = document.getElementById(rowId);
                let altId = row?.getAttribute("data-alt-id");
                if (altId) {
                    unlockRow(altId); // Recursively unlock alt ID
                }

                // Remove locked state from sessionStorage
                sessionStorage.removeItem(`locked-${rowId}`);
            };

            // Function to restore locked state from sessionStorage on page load
            function restoreLockedRows() {
                document.querySelectorAll(".card-content").forEach(row => {
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
                courtDatalist.innerHTML = '<option value="">Select Court</option>';
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
        document.addEventListener("DOMContentLoaded", function () {
    // Ensure popups are hidden initially
    document.getElementById("idMarksPopup").style.display = "none";
    document.getElementById("chargesPopup").style.display = "none";
});

function openIdMarksPopup() {
    document.getElementById("idMarksPopup").style.display = "block";
}

function closeIdMarksPopup() {
    document.getElementById("idMarksPopup").style.display = "none";
}

function openChargesPopup() {
    document.getElementById("chargesPopup").style.display = "block";
}

function closeChargesPopup() {
    document.getElementById("chargesPopup").style.display = "none";
}


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

        document.addEventListener("DOMContentLoaded", function () {
    const residenceType = document.getElementById("residenceType");
    const defApt = document.getElementById("defApt"); // Ensure correct ID
    const defAptCard = document.getElementById("defAptCard"); // Correct the selector

    function toggleCardVisibility() {
        if (residenceType.value.toLowerCase() === "apartment") {
            defApt.style.display = "block"; // Show APT field
            defAptCard.style.display = "block";   // Show the card
        } else {
            defApt.style.display = "none";  // Hide APT field
            defAptCard.style.display = "none";    // Hide the entire card
        }
    }

    // Run function on page load to ensure correct state
    toggleCardVisibility();

    // Listen for changes
    residenceType.addEventListener("input", toggleCardVisibility);
});


        document.addEventListener("DOMContentLoaded", function () {
            // Get the residenceType and residentType dropdowns
            const residenceType = document.getElementById("residenceType");
            const residentType = document.getElementById("residentType");

            residenceType.addEventListener("input", function () {
                if (residenceType.value.toLowerCase() === "apartment") {
                    residentType.value = "rent"; // Auto-select "Renter (Lease)"
                }
            });
        });

        document.addEventListener("DOMContentLoaded", () => {
    const confirmedEntries = new Set();
    let defendantCount = 1;
    let cosignerCount = 1;
    let defSpouseAdded = false;
    let cosSpouseAdded = false;
    let entryToRemove = null;

    // Format phone numbers
    function formatPhoneNumber(value) {
        const digits = value.replace(/\D/g, "").slice(0, 10);
        if (digits.length <= 3) return digits;
        if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }


    function handlePhoneInput(event) {
      const inputField = event.target;
      inputField.value = formatPhoneNumber(inputField.value);
  }

  
  function confirmEntry(event) {
    event.preventDefault();
    const button = event.target;
    const phoneInput = button.previousElementSibling;
    const lastNameInput = phoneInput.previousElementSibling;
    const firstNameInput = lastNameInput.previousElementSibling;

    const fullName = `${firstNameInput.value.trim().toLowerCase()} ${lastNameInput.value.trim().toLowerCase()}`;
    const formattedNumber = phoneInput.value;
    const nameKey = `${fullName}`;
    const numberKey = `${formattedNumber}`;

    const messageContainer = document.createElement("div");
    messageContainer.style.marginTop = "10px";

    const duplicateMessage = document.createElement("p");
    duplicateMessage.style.color = "red";
    duplicateMessage.style.fontWeight = "bold";

    const successMessage = document.createElement("p");
    successMessage.style.color = "green";
    successMessage.style.fontWeight = "bold";

    if (confirmedEntries.has(nameKey)) {
        const existingEntity = Array.from(confirmedEntries).find(entry => entry === nameKey);

        duplicateMessage.textContent = `The name "${fullName}" is already confirmed as the ${existingEntity.split(':')[0]}.`;

        const editButton = document.createElement("button");
        editButton.textContent = `Edit [${existingEntity.split(':')[0]}]`;
        editButton.style.marginRight = "10px";
        editButton.classList.add("action-button");
        editButton.addEventListener("click", () => {
            console.log(`Editing ${existingEntity}`);
        });

        const confirmButton = document.createElement("button");
        confirmButton.textContent = `Confirm ${label}`;
        confirmButton.classList.add("action-button");
        confirmButton.addEventListener("click", () => {
            console.log(`Confirming as ${label}`);
        });

        messageContainer.appendChild(duplicateMessage);
        messageContainer.appendChild(editButton);
        messageContainer.appendChild(confirmButton);
        button.parentElement.appendChild(messageContainer);

    } else if (confirmedEntries.has(numberKey)) {
        duplicateMessage.textContent = `The phone number "${formattedNumber}" has already been confirmed.`;
        messageContainer.appendChild(duplicateMessage);
        button.parentElement.appendChild(messageContainer);
    } else if (formattedNumber.length === 14 && firstNameInput.value.trim().length > 0 && lastNameInput.value.trim().length > 0) {
        confirmedEntries.add(`${label}:${nameKey}`); // Store with entity label
        confirmedEntries.add(numberKey);

        firstNameInput.disabled = true;
        lastNameInput.disabled = true;
        phoneInput.disabled = true;
        button.disabled = true;
        button.nextElementSibling.disabled = false;

        successMessage.textContent = "✅ Entry confirmed successfully!";
        messageContainer.appendChild(successMessage);
        button.parentElement.appendChild(messageContainer);
    } else {
        duplicateMessage.textContent = "❌ Please enter a valid name and 10-digit US phone number.";
        messageContainer.appendChild(duplicateMessage);
        button.parentElement.appendChild(messageContainer);
    }
}


    // Create Entry Function
    function createEntry(label, includeExtraFields = false, relationOverride = null) {
       
        const containerWrapperDiv = document.createElement("div");
        containerWrapperDiv.classList.add("container-wrapper");

        const containerDiv = document.createElement("div");
        containerDiv.classList.add("container");

        const title = document.createElement("h2");
        title.textContent = label;
        containerDiv.appendChild(title);

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

       


        const cardContentDiv = document.createElement("div");
        cardContentDiv.classList.add("card-content");

        const firstNameInput = document.createElement("input");
        firstNameInput.type = "text";
        firstNameInput.name = "firstName";
        firstNameInput.placeholder = "First Name";

        const middleNameInput = document.createElement("input");
        middleNameInput.type = "text";
        middleNameInput.name = "middleName";
        middleNameInput.placeholder = "Middle Name";

        const lastNameInput = document.createElement("input");
        lastNameInput.type = "text";
        lastNameInput.name = "lastName";
        lastNameInput.placeholder = "Last Name";

        const phoneInput = document.createElement("input");
            phoneInput.type = "text";
            phoneInput.name = "phone";
            phoneInput.placeholder = "(123) 456-7890";
            phoneInput.addEventListener("input", handlePhoneInput);
        cardContentDiv.append(firstNameInput, middleNameInput, lastNameInput, phoneInput);

        if (includeExtraFields) {
            const cityInput = document.createElement("input");
            cityInput.type = "text";
            cityInput.name = "city";
            cityInput.placeholder = "City";

            const stateInput = document.createElement("input");
            stateInput.type = "text";
            stateInput.name = "state";
            stateInput.placeholder = "State";


            cardContentDiv.append(cityInput, stateInput, phoneInput);

            // Add Relation Input for Spouses
            const isSpouse = label === "Defendant’s Spouse" || label === "Co-Signer’s Spouse";
            if (relationOverride || isSpouse || (!label.includes("Mom") && !label.includes("Dad") && !label.startsWith("Defendant"))) {
                const relationInput = document.createElement("input");
                relationInput.type = "text";
                relationInput.name = "relation";
                relationInput.placeholder = "Relation";
                relationInput.setAttribute("list", `relationOptions-${label}`);

                const relationDatalist = document.createElement("datalist");
                relationDatalist.id = `relationOptions-${label}`;

                const defaultRelationOptions = [
                    "---Select---",
                    "Agent",
                    "Attorney",
                    "Aunt",
                    "Boyfriend",
                    "Brother",
                    "Brother in law",
                    "Child's Father",
                    "Child's Mother",
                    "Co-Worker",
                    "Cousin",
                    "Daughter",
                    "Daughter in law",
                    "Employee",
                    "Employer",
                    "Ex-Husband",
                    "Ex-Partner",
                    "Ex-Wife",
                    "Father",
                    "Father in law",
                    "Fiance`",
                    "Friend",
                    "Girlfriend",
                    "God Father",
                    "God Mother",
                    "Grand Daughter",
                    "Grand Father",
                    "Grand Mother",
                    "Grand Son",
                    "Great Aunt",
                    "Great Granddaughter",
                    "Great Grandfather",
                    "Great Grandmother",
                    "Great Grandson",
                    "Great Uncle",
                    "Half Brother",
                    "Half Sister",
                    "Husband",
                    "Manager",
                    "Manager Business",
                    "Mother",
                    "Mother in law",
                    "Neice",
                    "Neighbor",
                    "Nephew",
                    "Partner",
                    "Pastor",
                    "Priest",
                    "Probation officer",
                    "Rabbi",
                    "Roomate",
                    "Self",
                    "Sister",
                    "Sister in law",
                    "Son",
                    "Son in law",
                    "Sponsor to name a few",
                    "Step-Brother",
                    "Step-Daughter",
                    "Step-Father",
                    "Step-Mother",
                    "Step-Sister",
                    "Step-Son",
                    "Teacher",
                    "Uncle",
                    "Wife"
                ];

                const spouseRelationOptions = ["Husband", "Wife"];
                const relationOptions = relationOverride || (isSpouse ? spouseRelationOptions : defaultRelationOptions);

                relationOptions.forEach(optionValue => {
                    const option = document.createElement("option");
                    option.value = optionValue;
                    relationDatalist.appendChild(option);
                });

                cardContentDiv.append(relationInput, relationDatalist);
            }
        }

    // Confirm Button
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm";
    confirmButton.classList.add("confirm-btn");
    
    let lastConfirmedState = {};

    confirmButton.addEventListener("click", () => {
        const nameKey = `${firstNameInput.value.trim()} ${lastNameInput.value.trim()}`;
        const numberKey = phoneInput ? phoneInput.value.trim() : null;

          const currentState = {
            name: nameKey,
            phone: numberKey
        };

     
        // Check if entity has experienced changes since last confirmation
        const hasChanged =
            currentState.name !== lastConfirmedState.name ||
            currentState.phone !== lastConfirmedState.phone;

        if (!hasChanged) {
            // Highlight fields and make them read-only
            firstNameInput.style.backgroundColor = "lightgreen";
            lastNameInput.style.backgroundColor = "lightgreen";
            if (phoneInput) phoneInput.style.backgroundColor = "lightgreen";

            firstNameInput.disabled = true;
            lastNameInput.disabled = true;
            if (phoneInput) phoneInput.disabled = true;
            confirmButton.disabled = true;
            editButton.disabled = false;
            return;
        }

        // If changes detected or first confirmation
        if (
            (!phoneInput || phoneInput.value.length === 14) &&
            firstNameInput.value.trim().length > 0 &&
            lastNameInput.value.trim().length > 0
        ) {
            confirmedEntries.add(nameKey);
            if (numberKey) confirmedEntries.add(numberKey);

            lastConfirmedState = { ...currentState };

            firstNameInput.style.backgroundColor = "lightgreen";
            lastNameInput.style.backgroundColor = "lightgreen";
            if (phoneInput) phoneInput.style.backgroundColor = "lightgreen";

            firstNameInput.disabled = true;
            lastNameInput.disabled = true;
            if (phoneInput) phoneInput.disabled = true;
            confirmButton.disabled = true;
            editButton.disabled = false;

            // Display a success message dynamically
const successMessage = document.createElement('p');
successMessage.textContent = 'Entry confirmed successfully!';
successMessage.style.color = 'green';
successMessage.style.fontWeight = 'bold';
cardContentDiv.appendChild(successMessage);
        } else {
            alert("Please enter a valid name and phone number.");
        }
    });

    
    // Edit Button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.disabled = true;

    editButton.addEventListener("click", () => {
        firstNameInput.disabled = false;
        lastNameInput.disabled = false;
        if (phoneInput) phoneInput.disabled = false;

        confirmButton.disabled = false;
        editButton.disabled = true;
    });

    
    // Append Buttons
    cardContentDiv.append(confirmButton, editButton);
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
    const containerWrapper = document.getElementById("containerWrapper");

    // Add Default Entries
    containerWrapper.appendChild(createEntry("Defendant", true));
    containerWrapper.appendChild(createEntry("Def-Mom", true));
    containerWrapper.appendChild(createEntry("Def-Dad", true));

    for (let i = 1; i <= 3; i++) {
        containerWrapper.appendChild(createEntry(`Reference ${i}`, true));
    }

    containerWrapper.appendChild(createEntry("Co-Signer 1", true));
    containerWrapper.appendChild(createEntry("Co-Signer 1 - Reference 1", true));
    containerWrapper.appendChild(createEntry("Co-Signer 1 - Reference 2", true));

    // Add Defendant Button
    document.getElementById("addDefendant").addEventListener("click", () => {
        defendantCount++;
        containerWrapper.appendChild(createEntry(`Defendant ${defendantCount}`, true));
        containerWrapper.appendChild(createEntry(`Def-${defendantCount}’s Mom`, true));
        containerWrapper.appendChild(createEntry(`Def-${defendantCount}’s Dad`, true));

        for (let i = 1; i <= 3; i++) {
            containerWrapper.appendChild(createEntry(`Def-${defendantCount} Reference ${i}`, true));
        }
    });

    // Add Defendant Spouse Button
    document.getElementById("addDefendantSpouse").addEventListener("click", () => {
        if (!defSpouseAdded) {
            containerWrapper.appendChild(createEntry("Defendant’s Spouse", true));
            defSpouseAdded = true;
        } else {
            alert("Defendant’s Spouse already added.");
        }
    });

    // Add Cosigner Button
    document.getElementById("addCosigner").addEventListener("click", () => {
        cosignerCount++;
        containerWrapper.appendChild(createEntry(`Co-Signer ${cosignerCount}`, true));
        containerWrapper.appendChild(createEntry(`Co-Signer ${cosignerCount} - Reference 1`, true));
        containerWrapper.appendChild(createEntry(`Co-Signer ${cosignerCount} - Reference 2`, true));
    });

    // Add Cosigner Spouse Button
    document.getElementById("addCosignerSpouse").addEventListener("click", () => {
        if (!cosSpouseAdded) {
            containerWrapper.appendChild(createEntry("Co-Signer’s Spouse", true));
            cosSpouseAdded = true;
        } else {
            alert("Co-Signer’s Spouse already added.");
        }

        console.log({ fullName, formattedNumber, confirmedEntries });

    
    });
});



</script>

</body>

</html>