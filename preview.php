<?php
session_start();



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Function to format phone numbers
    function formatPhoneNumber($phone) {
        $digits = preg_replace("/\D/", "", $phone);
        if (strlen($digits) == 10) {
            return "(".substr($digits, 0, 3).") ".substr($digits, 3, 3)."-".substr($digits, 6);
        }
        return $phone; // Return as-is if not 10 digits
    }

    // Initialize a set to track duplicate phone numbers
    $enteredPhones = [];

    // Defendant's Name
    $_SESSION['defendant']['name']['first'] = isset($_POST["address"]["defendant"]["name"]["first"]) 
        ? htmlspecialchars($_POST["address"]["defendant"]["name"]["first"]) 
        : "";

    $_SESSION['defendant']['name']['middle'] = isset($_POST["address"]["defendant"]["name"]["middle"]) 
        ? htmlspecialchars($_POST["address"]["defendant"]["name"]["middle"]) 
        : "";

    $_SESSION['defendant']['name']['last'] = isset($_POST["address"]["defendant"]["name"]["last"]) 
        ? htmlspecialchars($_POST["address"]["defendant"]["name"]["last"]) 
        : "";

    // Defendant's Phone Number
    $_SESSION['defendant']['phone'] = isset($_POST["address"]["defendant"]["phone"]) 
        ? formatPhoneNumber($_POST["address"]["defendant"]["phone"]) 
        : "";

    if (in_array($_SESSION['defendant']['phone'], $enteredPhones)) {
        die("Error: Duplicate phone number detected for Defendant.");
    } else {
        $enteredPhones[] = $_SESSION['defendant']['phone'];
    }

    // Defendant's Parents' Phone Numbers
    $_SESSION['defendant']['parents']['mother']['name'] = isset($_POST["address"]["defendant"]["parents"]["mother"]["name"])
        ? htmlspecialchars($_POST["address"]["defendant"]["parents"]["mother"]["name"])
        : "";

    $_SESSION['defendant']['parents']['mother']['phone'] = isset($_POST["address"]["defendant"]["parents"]["mother"]["phone"])
        ? formatPhoneNumber($_POST["address"]["defendant"]["parents"]["mother"]["phone"])
        : "";

    if (!empty($_SESSION['defendant']['parents']['mother']['phone']) && in_array($_SESSION['defendant']['parents']['mother']['phone'], $enteredPhones)) {
        die("Error: Duplicate phone number detected for Defendant's Mother.");
    } else {
        $enteredPhones[] = $_SESSION['defendant']['parents']['mother']['phone'];
    }

    $_SESSION['defendant']['parents']['father']['name'] = isset($_POST["address"]["defendant"]["parents"]["father"]["name"])
        ? htmlspecialchars($_POST["address"]["defendant"]["parents"]["father"]["name"])
        : "";

    $_SESSION['defendant']['parents']['father']['phone'] = isset($_POST["address"]["defendant"]["parents"]["father"]["phone"])
        ? formatPhoneNumber($_POST["address"]["defendant"]["parents"]["father"]["phone"])
        : "";

    if (!empty($_SESSION['defendant']['parents']['father']['phone']) && in_array($_SESSION['defendant']['parents']['father']['phone'], $enteredPhones)) {
        die("Error: Duplicate phone number detected for Defendant's Father.");
    } else {
        $enteredPhones[] = $_SESSION['defendant']['parents']['father']['phone'];
    }

    // Defendant's References
    for ($i = 1; $i <= 3; $i++) {
        $_SESSION['defendant']['references'][$i]['name'] = isset($_POST["address"]["defendant"]["references"][$i]["name"])
            ? htmlspecialchars($_POST["address"]["defendant"]["references"][$i]["name"])
            : "";

        $_SESSION['defendant']['references'][$i]['phone'] = isset($_POST["address"]["defendant"]["references"][$i]["phone"])
            ? formatPhoneNumber($_POST["address"]["defendant"]["references"][$i]["phone"])
            : "";

        if (!empty($_SESSION['defendant']['references'][$i]['phone']) && in_array($_SESSION['defendant']['references'][$i]['phone'], $enteredPhones)) {
            die("Error: Duplicate phone number detected for Defendant Reference $i.");
        } else {
            $enteredPhones[] = $_SESSION['defendant']['references'][$i]['phone'];
        }
    }

    // Co-Signer(s) Information
    for ($cosigner = 1; isset($_POST["address"]["cosigner"][$cosigner]); $cosigner++) {
        $_SESSION['cosigner'][$cosigner]['name']['first'] = isset($_POST["address"]["cosigner"][$cosigner]["name"]["first"])
            ? htmlspecialchars($_POST["address"]["cosigner"][$cosigner]["name"]["first"])
            : "";

        $_SESSION['cosigner'][$cosigner]['name']['last'] = isset($_POST["address"]["cosigner"][$cosigner]["name"]["last"])
            ? htmlspecialchars($_POST["address"]["cosigner"][$cosigner]["name"]["last"])
            : "";

        $_SESSION['cosigner'][$cosigner]['phone'] = isset($_POST["address"]["cosigner"][$cosigner]["phone"])
            ? formatPhoneNumber($_POST["address"]["cosigner"][$cosigner]["phone"])
            : "";

        if (!empty($_SESSION['cosigner'][$cosigner]['phone']) && in_array($_SESSION['cosigner'][$cosigner]['phone'], $enteredPhones)) {
            die("Error: Duplicate phone number detected for Co-Signer $cosigner.");
        } else {
            $enteredPhones[] = $_SESSION['cosigner'][$cosigner]['phone'];
        }

        // Co-Signer References
        for ($ref = 1; $ref <= 2; $ref++) {
            $_SESSION['cosigner'][$cosigner]['references'][$ref]['name'] = isset($_POST["address"]["cosigner"][$cosigner]["references"][$ref]["name"])
                ? htmlspecialchars($_POST["address"]["cosigner"][$cosigner]["references"][$ref]["name"])
                : "";

            $_SESSION['cosigner'][$cosigner]['references'][$ref]['phone'] = isset($_POST["address"]["cosigner"][$cosigner]["references"][$ref]["phone"])
                ? formatPhoneNumber($_POST["address"]["cosigner"][$cosigner]["references"][$ref]["phone"])
                : "";

            if (!empty($_SESSION['cosigner'][$cosigner]['references'][$ref]['phone']) && in_array($_SESSION['cosigner'][$cosigner]['references'][$ref]['phone'], $enteredPhones)) {
                die("Error: Duplicate phone number detected for Co-Signer $cosigner Reference $ref.");
            } else {
                $enteredPhones[] = $_SESSION['cosigner'][$cosigner]['references'][$ref]['phone'];
            }
        }
    }

    // Redirect to preview page
    header("Location: preview.php");


    
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
    $_SESSION['dob'] = htmlspecialchars($_POST["dob"]);
    $_SESSION['dob'] = htmlspecialchars($_POST["dob"]);
    $_SESSION['courtDate'] = htmlspecialchars($_POST["courtDate"]);
    $_SESSION['idMarks'] = isset($_POST["idMarks"]) ? htmlspecialchars($_POST["idMarks"]) : "None";
    $_SESSION['holds'] = isset($_POST["holds"]) ? htmlspecialchars($_POST["holds"]) : "";
    $_SESSION['alias'] = isset($_POST["alias"]) ? htmlspecialchars($_POST["alias"]) : "";
    $_SESSION['charges'] = isset($_POST["charges"]) ? htmlspecialchars($_POST["charges"]) : "";
    $_SESSION['dmv'] = isset($_POST["dmv"]) ? htmlspecialchars($_POST["dmv"]) : "";
    $_SESSION['ssnInput'] = isset($_POST["ssnInput"]) ? htmlspecialchars($_POST["ssnInput"]) : ""; 
    $_SESSION['residenceType'] = isset($_POST["residenceType"]) ? htmlspecialchars($_POST["residenceType"]) : "";
    $_SESSION['residentType'] = isset($_POST["residentType"]) ? htmlspecialchars($_POST["residentType"]) : "";
    $_SESSION['yearsAtAddress'] = isset($_POST["yearsAtAddress"]) ? htmlspecialchars($_POST["yearsAtAddress"]) : "";
$_SESSION['monthsAtAddress'] = isset($_POST["monthsAtAddress"]) ? htmlspecialchars($_POST["monthsAtAddress"]) : "";
$_SESSION['defendantLivesWith'] = isset($_POST["defendantLivesWith"]) ? htmlspecialchars($_POST["defendantLivesWith"]) : "";
$_SESSION['street'] = isset($_POST["address"]["defendant"]["street"]) ? htmlspecialchars($_POST["address"]["defendant"]["street"]) : "";
$_SESSION['apt'] = isset($_POST["address"]["defendant"]["apt"]) ? htmlspecialchars($_POST["address"]["defendant"]["apt"]) : "";
$_SESSION['city'] = isset($_POST["address"]["defendant"]["city"]) ? htmlspecialchars($_POST["address"]["defendant"]["city"]) : "";
$_SESSION['state'] = isset($_POST["address"]["defendant"]["state"]) ? htmlspecialchars($_POST["address"]["defendant"]["state"]) : "";
$_SESSION['zipCode'] = isset($_POST["address"]["defendant"]["zipCode"]) ? htmlspecialchars($_POST["address"]["defendant"]["zipCode"]) : "";

}

// Function to format date from YYYY-MM-DD to MM/DD/YYYY
function formatDate($date)
{
    $dateParts = explode('-', $date);
    if (count($dateParts) === 3) {
        return "{$dateParts[1]}/{$dateParts[2]}/{$dateParts[0]}"; // Convert to MM/DD/YYYY
    }
    return $date;
}
if (!empty($_SESSION['dob'])) {
    $formattedDOB = DateTime::createFromFormat('Y-m-d', $_SESSION['dob'])->format('m/d/Y');
} else {
    $formattedDOB = "N/A";
}


if (!empty($_SESSION['dob'])) {
    $birthDate = new DateTime($_SESSION['dob']);
    $today = new DateTime();
    $age = $today->diff($birthDate)->y;
    $_SESSION['age'] = $age;
} else {
    $_SESSION['age'] = "";
}

function formatUnderline($text, $length = 1, $isDate = false)
{
    $text = htmlspecialchars($text);

    // Format date if the text is not empty
    if (!empty($text) && $isDate) {
        $timestamp = strtotime($text);
        $text = $timestamp ? date("m-d-Y", $timestamp) : "";
    }

    $placeholder = str_repeat("", $length); // Solid underline structure

    return "<span class='underline'>" . (!empty($text) ? $text : $placeholder) . "</span>";
}
// Function to format height correctly
function formatHeight($height)
{
    $numericString = preg_replace('/[^0-9]/', '', $height); // Remove non-digits

    if ($numericString === '') {
        return ''; // If empty, return blank
    }

    $feet = intval(substr($numericString, 0, 1)); // First digit is feet
    $inches = intval(substr($numericString, 1)) ?? 0; // Remaining digits are inches

    if ($inches > 11) {
        $inches = $inches % 10; // Prevent inches from exceeding 11
    }

    return "{$feet}'{$inches}\""; // Ensure correct display of feet and inches
}
// Function to format bond amount as currency
function formatCurrency($amount)
{
    if (empty($amount))
        return '';
    $numericValue = floatval(preg_replace('/[^0-9.]/', '', $amount)); // Extract numbers
    return number_format($numericValue, 2, '.', ','); // Format as USD
}
// Function to format Bond Amount properly
function formatBondAmount($amount)
{
    return preg_match('/^\$\d+$/', $amount) ? $amount : "$" . number_format((float) preg_replace('/[^0-9.]/', '', $amount), 2);
}
// Function to display ID marks properly
function formatIdMarks($marks)
{
    if ($marks === "None") {
        return "None";
    }
    return str_replace("|", "<br>", $marks); // Convert stored "|" separator into new lines
}
// Function to format full name properly
function formatFullName($nameArray) {
    $first = $nameArray['first'] ?? '';
    $middle = $nameArray['middle'] ?? '';
    $last = $nameArray['last'] ?? '';

    $fullName = trim("$first $middle $last");
    return $fullName ?: "";
}

// Function to format charges properly for display
function formatCharges($charges)
{
    if ($charges === "None") {
        return "None";
    }
    return str_replace("|", "<br>", $charges); // Convert stored "|" separator into new lines
}

function formatAddress($street, $apt, $city, $state, $zip) {
    $address = $street;
    
    if (!empty($apt)) {
        $address .= ", Apt " . $apt;
    }

    $address .= ", " . $city . " " . $state . " " . $zip;

    return $address;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $defendant = $_POST['address']['defendant'] ?? [];

    $street = $defendant['street'] ?? '';
    $apt = $defendant['apt'] ?? '';
    $city = $defendant['city'] ?? '';
    $state = $defendant['state'] ?? '';
    $zip = $defendant['zipCode'] ?? '';

    $formattedAddress = formatAddress($street, $apt, $city, $state, $zip);
}



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="preview.css">
    <title>Print Preview</title>

</head>


<div class="container-wrapper">
<button
class="back-btn"
onclick="window.location.href='index.php'">Go
Back</button>   <!-- Row 1: Sex, Race, Today's Date, Court Date -->
    <div class="container">
        <div class="card">
            <div class="card-content">
                <p><strong>SEX:</strong> <span
                        class="contract-field"><?php echo formatUnderline($_SESSION['sex'] ?? '', 10); ?></span></p>
        </div>
    </div>
 </div>

    <div class="container">
        <div class="card">
            <div class="card-content">
                <p><strong>RACE</strong> <span
                        class="contract-field"><?php echo formatUnderline($_SESSION['race'] ?? '', 15); ?></span></p>
            </div>
                  </div>
                        </div>
       
        <div class="container">
          <div class="card">
            <div class="card-content">
                <p><strong>TODAY'S DATE:</strong> <span
                        class="contract-field"><?php echo formatUnderline($_SESSION['todayDate'] ?? '', 15); ?></span>
                </p>
            </div>
        </div>
     </div>

        <div class="container">
         <div class="card">
            <div class="card-content">
                <p><strong>CRT/DATE/TIME:</strong> <span
                        class="contract-field"><?php echo formatDate($_SESSION['courtDate'] ?? ''); ?></span></p>
            </div>
        </div>
    </div>
</div>

    <!-- Row 2: HGT, WGT, BOND AMOUNT, COUNTY -->
    <div class="container">
        <div class="card">
            <div class="card-content">
                <p><strong>HGT:</strong> <span
                        class="contract-field"><?php echo htmlspecialchars_decode(formatUnderline(formatHeight($_SESSION['height'] ?? ''), 10)); ?></span>
                </p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="card">
            <div class="card-content">
                <p><strong>WGT:</strong> <span
                        class="contract-field"><?php echo formatUnderline($_SESSION['weight'] ?? '', 10); ?></span></p>
        </div>
    </div>
 </div>
        
        <div class="container">
        <div class="card">
            <div class="card-content">
                <p><strong>BOND AMOUNT:</strong> <span
                        class="contract-field"><?php echo formatBondAmount($_SESSION['bondAmount'] ?? ''); ?></span></p>
         </div>
    </div>
 </div>
        
 <div class="container">
        <div class="card">
            <div class="card-content">
                <p><strong>COUNTY:</strong> <span
                        class="contract-field"><?php echo formatUnderline($_SESSION['county'] ?? '', 15); ?></span></p>
            </div>
        </div>
    </div>




    <!-- Row 3: Hair, Eyes, Warrant/case, Courtlocation-->
    <div class="container">

        <div class="card">
            <div class="card-content">
                <p><strong>HAIR:</strong> <span class="contract-field"><?php echo $_SESSION['hair'] ?? ''; ?></span></p>
            </div>
        </div>
    </div>
    
    <div class="container">
        <div class="card">
            <div class="card-content">
                <p><strong>EYES:</strong> <span class="contract-field"><?php echo $_SESSION['eyes'] ?? ''; ?></span></p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="card">
            <div class="card-content">
                <p><strong>WARRANT #:</strong> <span
                        class="contract-field"><?php echo $_SESSION['warrantNumber'] ?? ''; ?></span></p>
            </div>
        </div>
    </div>
        <div class="container">
            <div class="card">
                 <div class="card-content">
                <p><strong>CASE #:</strong> <span
                        class="contract-field"><?php echo $_SESSION['caseNumber'] ?? ''; ?></span></p>
            </div>
        </div>
    </div>



        <div class="container">
        <div class="card">
            <div class="card-content">
                <p><strong>COURT:</strong> <span
                        class="contract-field"><?php echo $_SESSION['courtLocation'] ?? ''; ?></span></p>
            </div>
        </div>
    </div>
</div>

    <!-- Row 4: ID MARK, HOLDS, ALIAS -->
    <div class="container">

        <div class="card">
            <div class="card-content">
                <p><strong>ID MARKS:</strong> <span
                        class="contract-field"><?php echo formatIdMarks($_SESSION['idMarks']); ?></span></p>
            </div>
        </div>
        </div>
        <div class="container">
        <div class="card">
            <div class="card-content">
                <p><strong>HOLDS:</strong> <span class="contract-field"><?php echo $_SESSION['holds'] ?: ''; ?></span>
                </p>
            </div>
        </div>
        </div>
        <div class="container">
        <div class="card">
            <div class="card-content">
                <p><strong>ALIAS:</strong> <span class="contract-field"><?php echo $_SESSION['alias'] ?: ''; ?></span>
                </p>
            </div>
        </div>
    </div>


    <!-- Row 5-6-7:- 3 LEFT - 1 RIGHT -->
    <div class="container">
        <div class="left">

            <div class="card">
                <div class="card-content">
                    <p><strong>DL#:</strong> <span class="contract-field"><?php echo $_SESSION['dmv'] ?? ''; ?></span>
                    </p>
                </div>
            </div>

            <!-- Row 6: DOB - LEFT -->
            <div class="card">
                <div class="card-content">
                    <p><strong>DOB:</strong> <span
                            class="contract-field"><?php echo formatDate($_SESSION['dob'] ?? ''); ?></span>
                        <strong>Age:</strong> <span
                            class="contract-field"><?php echo formatUnderline($_SESSION['age'] ?? '', 2); ?></span>
                    </p>
                </div>
            </div>

            <!-- Row 7: SSN - LEFT -->
            <div class="card">
                <div class="card-content">
                    <p><strong>SSN:</strong> <span
                            class="contract-field"><?php echo $_SESSION['ssnInput'] ?? ''; ?></span></p>
                </div>
            </div>
        </div>

        <!-- Row 5-6-7: CHARGES - RIGHT -->
        <div class="right">
            <div class="card-content">
                <p><strong>CHARGES:</strong></p>
                <p><?php echo formatCharges($_SESSION['charges']); ?></p>
            </div>
        </div>
    </div>




<div class="container">
        <h2>Defendant Information</h2>
        <div class="card">
            <div class="card-content">
                <p><strong>Name:</strong> <?= $_SESSION['defendant']['name']['first'] ?? '' ?> <?= $_SESSION['defendant']['name']['last'] ?? '' ?></p>
                <p><strong>Phone:</strong> <?= $_SESSION['defendant']['phone'] ?? '' ?></p>
            </div>
        </div>
     </div>

    <div class="container">
        <h2>Defendant's Parents</h2>
         <div class="card">
            <div class="card-content">
                <p><strong>Mother:</strong> <?= $_SESSION['defendant']['parents']['mother']['name'] ?? 'N/A' ?> | <strong>Phone:</strong> <?= $_SESSION['defendant']['parents']['mother']['phone'] ?? 'N/A' ?></p>
                <p><strong>Father:</strong> <?= $_SESSION['defendant']['parents']['father']['name'] ?? 'N/A' ?> | <strong>Phone:</strong> <?= $_SESSION['defendant']['parents']['father']['phone'] ?? 'N/A' ?></p>
            </div>
        </div>
     </div>

        <div class="container">
        <h2>Defendant References</h2>
        <?php for ($i = 1; $i <= 3; $i++): ?>
            <div class="card">
                <div class="card-content">
                    <p><strong>Reference <?= $i ?>:</strong> <?= $_SESSION['defendant']['references'][$i]['name'] ?? 'N/A' ?> | <strong>Phone:</strong> <?= $_SESSION['defendant']['references'][$i]['phone'] ?? 'N/A' ?></p>
                </div>
                </div>
            </div>
        <?php endfor; ?>

        <div class="container">
        <h2>Actions</h2>
        <div class="card">
            <div class="card-content actions">
                <form method="post" action="submit_contract.php">
                    <button type="submit" name="confirm">Confirm & Submit</button>
                </form>
                <form method="post" action="index.php">
                    <button type="submit">Edit Contract</button>
                </form>
            </div>
        </div>
    </div>







    <div class="container-wrapper">
   
        
        <!-- Row 1: Name & Address -->
        <div class="container">
        <div class="card">
        <div class="card-content">
                <label for="name">Name:</label>
                <input type="text" id="name" name="address[defendant][name]" required>
                <label for="address">Add:</label>
                <input type="text" id="address" name="address[defendant][address]" required>
                <label for="zip">Zip:</label>
                <input type="text" id="zip" name="address[defendant][zip]" required>
            </div>
        </div>
        </div>


        <!-- Row 2: Residence Type -->
        <div class="container">
        <div class="card">
        <div class="card-content" id="defendantSection">
                <label for="residenceType">APT/HOUSE/OTHER:</label>
                <input list="residenceTypeList" id="residenceType" name="address[defendant][residenceType]" required>
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
                
                <label for="ownership">OWN/RENT/RELATIVE:</label>
                <input type="text" id="ownership" name="address[defendant][ownership]" required>
                <label for="length">LENGTH:</label>
                <input type="text" id="length" name="address[defendant][length]" required>
            </div>
        </div>
     </div>


        <!-- Row 3: Contact Info -->
        <div class="container">
        <div class="card">
        <div class="card-content">
                <label for="cell">CELL:</label>
                <input type="text" id="cell" name="address[defendant][cell]">
                <label for="home">HOME/OTHER:</label>
                <input type="text" id="home" name="address[defendant][home]">
                <label for="email">EMAIL:</label>
                <input type="email" id="email" name="address[defendant][email]">
            </div>
        </div>
    </div>








    
    <!-- Row 8: Def Name & Address -->
    <div class="container">
        <div class="card">
            <div class="card-content">
            <p><strong>DEFENDANT NAME:</strong> 
    <span class="contract-field">
        <?php echo formatFullName($_SESSION['defendant']['name'] ?? []); ?>
    </span>
</p>


            </div>
        </div>

        <div class="card">
    <div class="card-content">

        <p><strong>Address:</strong> <?php echo htmlspecialchars($formattedAddress); ?></p>
    </div>
</div>
</div>

<div class="container">
   
        <div class="card">
        <div class="card-content">
        <p><strong>Residence Type:</strong> <?php echo $_SESSION['residenceType']; ?></p>
        </div></div>
        <div class="card">
    <div class="card-content">
        <p><strong>Resident Type:</strong> <?php echo $_SESSION['residentType']; ?></p>
        </div></div>
        <div class="card">
    <div class="card-content">
        <p><strong>Lives With:</strong> <?php echo $_SESSION['defendantLivesWith']; ?></p>
    </div>
</div>
        <div class="card">
    <div class="card-content">
        <p><strong>How Long at Listed Address:</strong> <?php echo $_SESSION['yearsAtAddress']; ?> years, <?php echo $_SESSION['monthsAtAddress']; ?> months</p>
        </div></div>
</div>








<div
class="container">
<div
class="card">
<div
class="card-content">
<button
class="print-btn"
onclick="window.print()">Print</button>
<button
class="back-btn"
onclick="window.location.href='index.php'">Go
Back</button>
</div>
</div>
</div>
</div>
</div>
</html>
