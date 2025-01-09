<?php
session_start();

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
    $_SESSION['dob'] = htmlspecialchars($_POST["dob"]);
    $_SESSION['dob'] = htmlspecialchars($_POST["dob"]);
    $_SESSION['courtDate'] = htmlspecialchars($_POST["courtDate"]);
    $_SESSION['idMarks'] = isset($_POST["idMarksData"]) ? htmlspecialchars($_POST["idMarksData"]) : "None";
    $_SESSION['holds'] = isset($_POST["holds"]) ? htmlspecialchars($_POST["holds"]) : "";
    $_SESSION['alias'] = isset($_POST["alias"]) ? htmlspecialchars($_POST["alias"]) : "";
    $_SESSION['charges'] = isset($_POST["charges"]) ? htmlspecialchars($_POST["charges"]) : "";
    $_SESSION['dmv'] = isset($_POST["dmv"]) ? htmlspecialchars($_POST["dmv"]) : "";
    $_SESSION['ssnInput'] = isset($_POST["ssnInput"]) ? htmlspecialchars($_POST["ssnInput"]) : "";
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
function formatFullName($first, $middle, $last)
{
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
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Print Preview</title>
    <style>
                      
                      body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }


        /* Wrapper for all Containers */
        .page-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            /* Centers containers if needed */
            gap: 20px;
            /* Space between each container */
            padding: 20px;
            background-color: #f4f4f4;
        }

        /* Ensure text is always underlined */
        .underline {
            display: inline-block;
            min-width: 80px;
            /* Ensures underline fits empty space */
            text-align: left;
            padding-inline: 10px;

        }

        /* Ensures a solid contract-style underline */
        .contract-field {
            display: inline-block;
            min-width: 80px;
            /* Adjust to fit contract spacing */
            border-bottom: 1px solid #0000002b;
            /* Keeps it solid */
            font-size: 12px;

        }

        .container {
            display: flex;
            flex-direction: column;

        }



        /* Each Container (Row) */
        .container {
            display: flex;
            align-items: center;
            width: 80%;
            /* Adjust width for better readability */
            max-width: 1200px;
            /* Ensures it doesn’t get too large on big screens */
            gap: 10px;
            padding: 15px;
            border-radius: 8px;
            background: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            flex-direction: row;
        }

        /* Left Section */
        .left {
            display: flex;
            width: 30%;
            gap: 5px;
            flex-direction: column;
        }

        .card {
            background: white;
            height: 25px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            padding: 5px 10px;
            font-size: 14px;
            font-weight: bold;
            background-color: lightblue;
            overflow: hidden;
            white-space: nowrap;
        }

        .card-content {
            flex-grow: 1;
            text-align: left;
        }

        /* Right Section */
        .right {
            width: 70%;
            height: 100px;
            background: white;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: bold;
            background-color: lightcoral;
            padding: 10px;
        }

        label {
            font-weight: lighter;
            display: block;
            font-size: 12px;
        }

        .print-btn {
            background-color: green;
            color: white;
            padding: 10px;
            border: none;
            cursor: pointer;
            margin-top: 10px;
        }

        .back-btn {
            background-color: red;
            color: white;
            padding: 10px;
            border: none;
            cursor: pointer;
            margin-top: 10px;
        }

        /* Ensure text is always underlined */
        .underline {
            display: inline-block;
            min-width: 80px;
            /* Ensures underline fits empty space */
            text-align: left;
            padding-inline: 10px;

        }

        @media print {

            .back-btn,
            .print-btn {
                display: none;
            }
        }
    </style>
</head>


<div class="page-wrapper">

    <h2>Agreement for Bail Bond</h2>

    <!-- Row 1: Sex, Race, Today's Date, Court Date -->
    <div class="container">
        <div class="card">
            <div class="card-content">
                <p><strong>SEX:</strong> <span
                        class="contract-field"><?php echo formatUnderline($_SESSION['sex'] ?? '', 10); ?></span></p>
            </div>
        </div>


        <div class="card">
            <div class="card-content">
                <p><strong>RACE</strong> <span
                        class="contract-field"><?php echo formatUnderline($_SESSION['race'] ?? '', 15); ?></span></p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <p><strong>TODAY'S DATE:</strong> <span
                        class="contract-field"><?php echo formatUnderline($_SESSION['todayDate'] ?? '', 15); ?></span>
                </p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <p><strong>CRT/DATE/TIME:</strong> <span
                        class="contract-field"><?php echo formatDate($_SESSION['courtDate'] ?? ''); ?></span></p>
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


            <div class="card">
            <div class="card-content">
            <p><strong>WGT:</strong> <span
                    class="contract-field"><?php echo formatUnderline($_SESSION['weight'] ?? '', 10); ?></span></p>
                    </div>
</div>

                    <div class="card">
                    <div class="card-content">
                    <p><strong>BOND AMOUNT:</strong> <span
                    class="contract-field"><?php echo formatBondAmount($_SESSION['bondAmount'] ?? ''); ?></span></p>
                    </div>
</div>

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

        <div class="card">
            <div class="card-content">
                <p><strong>EYES:</strong> <span class="contract-field"><?php echo $_SESSION['eyes'] ?? ''; ?></span></p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <p><strong>WARRANT #:</strong> <span
                        class="contract-field"><?php echo $_SESSION['warrantNumber'] ?? ''; ?></span></p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <p><strong>CASE #:</strong> <span
                        class="contract-field"><?php echo $_SESSION['caseNumber'] ?? ''; ?></span></p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <p><strong>COURT:</strong> <span
                        class="contract-field"><?php echo $_SESSION['courtLocation'] ?? ''; ?></span></p>
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

        <div class="card">
            <div class="card-content">
                <p><strong>HOLDS:</strong> <span class="contract-field"><?php echo $_SESSION['holds'] ?: ''; ?></span>
                </p>
            </div>
        </div>

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
    

    <!-- Row 8: Def Name & Address -->
    <div class="container">
    <div class="card">
    <div class="card-content">
        <p><strong>DEFENDANT NAME:</strong> <span
                class="contract-field"><?php echo formatFullName($_SESSION['defFirstName'], $_SESSION['defMiddleName'], $_SESSION['lastName']); ?></span>
        </p>
    </div>
    </div>
    </div>


        <!-- Row 9: Def Name & Address -->
        <div class="container">
        <div class="card">
        <div class="card-content">
        <p><strong>COSIGNER NAME:</strong> <span
                class="contract-field"><?php echo formatFullName($_SESSION['cosFirstName'], $_SESSION['cosMiddleName'], $_SESSION['coslastName']); ?></span>
        </p>
    </div>




    <!-- Row xxx: THE FINAL ROW -->
    <div class="container">
        <div class="card">
            <div class="card-content">
                <button class="print-btn" onclick="window.print()">Print</button>
                <button class="back-btn" onclick="window.location.href='index.php'">Go Back</button>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>










</body>

</html>