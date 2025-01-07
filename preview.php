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
}

// Function to format date from YYYY-MM-DD to MM/DD/YYYY
function formatDate($date) {
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

    // Calculate Age
    if (!empty($_SESSION['dob'])) {
        $birthDate = new DateTime($_SESSION['dob']);
        $today = new DateTime();
        $age = $today->diff($birthDate)->y;
        $_SESSION['age'] = $age;
    } else {
        $_SESSION['age'] = "";
    }



function formatUnderline($text, $length = 1, $isDate = false) {
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
function formatHeight($height) {
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
function formatCurrency($amount) {
    if (empty($amount)) return '';
    $numericValue = floatval(preg_replace('/[^0-9.]/', '', $amount)); // Extract numbers
    return number_format($numericValue, 2, '.', ','); // Format as USD
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
            margin: 20px;
        }
        .row-container {
            margin-bottom: 10px;
            border: 1px solid #ccc;
            display: flex;
            justify-content: left;
        }

        label {
            font-weight: bold;
            display: block;
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

        @media print {
            .back-btn, .print-btn {
                display: none;
            }
        }
    </style>
</head>
<div>
<div class="container">
        <h2>Agreement for Bail Bond</h2>

     <!-- Row 1: Sex, Race, Today's Date, Court Date -->
        <div class="row-container">
            <p><strong>Sex:</strong> <span class="contract-field"><?php echo formatUnderline($_SESSION['sex'] ?? '', 10); ?></span></p>
            <p><strong>Race:</strong> <span class="contract-field"><?php echo formatUnderline($_SESSION['race'] ?? '', 15); ?></span></p>
            <p><strong>Today's Date:</strong> <span class="contract-field"><?php echo formatUnderline($_SESSION['todayDate'] ?? '', 15); ?></span></p>
            <p><strong>Court Date:</strong> <span class="contract-field"><?php echo formatDate($_SESSION['courtDate'] ?? ''); ?></span></p>
        </div>

        <div class="row-container">
        <p><strong>HGT:</strong> <span class="contract-field"><?php echo htmlspecialchars_decode(formatUnderline(formatHeight($_SESSION['height'] ?? ''), 10)); ?></span></p>
              <p><strong>WGT:</strong> <span class="contract-field"><?php echo formatUnderline($_SESSION['weight'] ?? '', 10); ?></span></p>
            <p><strong>BOND AMOUNT $:</strong> <span class="contract-field"><?php echo formatUnderline($_SESSION['bondAmount'] ?? '', 15); ?></span></p>
            <p><strong>COUNTY:</strong> <span class="contract-field"><?php echo formatUnderline($_SESSION['county'] ?? '', 15); ?></span></p>
        </div>
        <div class="row-container">
        <p><strong>HAIR:</strong> <span class="contract-field"><?php echo $_SESSION['hair'] ?? ''; ?></span></p>
    <p><strong>EYES:</strong> <span class="contract-field"><?php echo $_SESSION['eyes'] ?? ''; ?></span></p>
    <p><strong>WARRANT #:</strong> <span class="contract-field"><?php echo $_SESSION['warrantNumber'] ?? ''; ?></span></p>
    <p><strong>CASE #:</strong> <span class="contract-field"><?php echo $_SESSION['caseNumber'] ?? ''; ?></span></p>
    <p><strong>COURT:</strong> <span class="contract-field"><?php echo $_SESSION['courtLocation'] ?? ''; ?></span></p>
      </div> 
       <div class="row-container">
       <p><strong>Date of Birth:</strong> <span class="contract-field"><?php echo formatDate($_SESSION['dob'] ?? ''); ?></span></p>
            <p><strong>Age:</strong> <span class="contract-field"><?php echo formatUnderline($_SESSION['age'] ?? '', 5); ?></span></p>
        </div>
   <!-- Row 2: Personal Details -->
   <div class="row-container">
            <p><strong>Name:</strong> <span class="contract-field"><?php echo formatUnderline($_SESSION['defFirstName'] ?? '', 5); ?></span></p>
            <p><strong></strong> <span class="contract-field"><?php echo formatUnderline($_SESSION['defMiddleName'] ?? '', 5); ?></span></p>
            <p><strong></strong> <span class="contract-field"><?php echo formatUnderline($_SESSION['lastName'] ?? '', 5); ?></span></p>
        </div>
        
        <div class="section-container">
            <button class="print-btn" onclick="window.print()">Print</button>
            <button class="back-btn" onclick="window.location.href='index.php'">Go Back</button>
        </div>
    </div>
</body>
</html>
