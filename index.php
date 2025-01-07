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
    $_SESSION['dob'] = htmlspecialchars($_POST["date-of-birth"]);
    $_SESSION['courtDateInput'] = htmlspecialchars($_POST["courtDateInput"]);

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bail Bond Form</title>
    <link rel="stylesheet" href="styles.css">
    <script>
    

    // Function to calculate age
    function calculateAge() {
        let dob = dobInput.value;
        if (dob) {
            let dateParts = dob.split('/');
            let birthDate = new Date(`${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`); // Convert MM/DD/YYYY to valid JS Date format
            let today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            let monthDiff = today.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            
            document.getElementById("age-display").value = age;
        }
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
</head>
<body>
    <div class="container">
        <h2>Bail Bond Form</h2>

        <form action="preview.php" method="post">
            <!-- Row 1:  Today's Date, Sex, Race, Court Date -->
            <div class="row-container" id="row1">
                <label for="todayDate">Today's Date:</label>
                <input type="text" id="todayDate" name="todayDate" value="<?php echo $_SESSION['todayDate'] ?? ''; ?>" readonly>
            </div>
            <div class="row-container" id="row1">
            <label for="dateInput">Court Date:</label>
            <input type="date" id="dateInput" name="courtDate" value="<?php echo $_SESSION['courtDate'] ?? ''; ?>" required>
        </div>
            <div class="row-container" id="row1">
                <label for="sex">SEX:</label>
                <input list="sex-options" id="sex" name="sex" value="<?php echo $_SESSION['sex'] ?? ''; ?>" required>
                <datalist id="sex-options">
                    <option value="Male">
                    <option value="Female">
                </datalist>
            </div>

            <div class="row-container" id="row1">
                <label for="race">RACE:</label>
                <input list="race-options" id="race" name="race" value="<?php echo $_SESSION['race'] ?? ''; ?>" required>
                <datalist id="race-options">
                    <option value="White">
                    <option value="Black">
                    <option value="Asian">
                    <option value="Hispanic">
                    <option value="Native American">
                    <option value="Other">
                </datalist>
            </div>
            <div class="row-container" id="row1">
                <button type="button" class="confirm-btn" onclick="lockRow('row1')">Confirm Row</button>
                <button type="button" class="edit-btn" onclick="unlockRow('row1')">Edit</button>
                <button type="submit">Preview</button>
            </div>

              <!-- Row 2: Name & DOB-->
              <div class="row-container" id="row2">
                <label for="height">HGT:</label>
                <input type="text" id="height" name="height" value="<?php echo $_SESSION['height'] ?? ''; ?>" required>
            </div>
            <div class="row-container" id="row2">
                <label for="weight">WGT:</label>
                <input type="text" id="weight" name="weight" value="<?php echo $_SESSION['weight'] ?? ''; ?>" required>
            </div>
            <div class="row-container" id="row2">
                <label for="bondAmount">BOND AMOUNT $:</label>
                <input type="text" id="bondAmount" name="bondAmount" placeholder="0.00" value="<?php echo $_SESSION['bondAmount'] ?? ''; ?>" required>
            </div>
        
            <div class="row-container" id="row2">
            <label for="county">COUNTY:</label>
            <input list="county-options" id="county" name="county" value="<?php echo $_SESSION['county'] ?? ''; ?>" required oninput="updateCourtAndJail()">
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

        <div class="row-container" id="row2">
                <button type="button" class="confirm-btn" onclick="lockRow('row2')">Confirm Row</button>
                <button type="button" class="edit-btn" onclick="unlockRow('row2')">Edit</button>
                <button type="submit">Preview</button>
            </div>

            <div class="row-container" id="row3">
            <!-- Hair Color -->
            <label for="hair">HAIR:</label>
            <input list="hair-options" id="hair" name="hair" value="<?php echo $_SESSION['hair'] ?? ''; ?>" required>
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

        <div class="row-container" id="row3">
            <!-- Eye Color -->
            <label for="eyes">EYES:</label>
            <input list="eyes-options" id="eyes" name="eyes" value="<?php echo $_SESSION['eyes'] ?? ''; ?>" required>
            <datalist id="eyes-options">
                <option value="Brown">
                <option value="Blue">
                <option value="Green">
                <option value="Hazel">
                <option value="Gray">
                <option value="Other">
            </datalist>
        </div>

        <div class="row-container" id="row3">
            <!-- Warrant # -->
            <label for="warrantNumber">WARRANT #:</label>
            <input type="text" id="warrantNumber" name="warrantNumber" value="<?php echo $_SESSION['warrantNumber'] ?? ''; ?>">
        </div>

        <div class="row-container" id="row3">
            <!-- Case # -->
            <label for="caseNumber">CASE #:</label>
            <input type="text" id="caseNumber" name="caseNumber" value="<?php echo $_SESSION['caseNumber'] ?? ''; ?>">
        </div>

        <div class="row-container" id="row3">
            <!-- Court -->
            <label for="courtLocation">COURT:</label>
            <input list="court-options" id="courtLocation" name="courtLocation" value="<?php echo $_SESSION['courtLocation'] ?? ''; ?>" required>
            <datalist id="court-options">
                <!-- Courts will be dynamically populated by JavaScript -->
            </datalist>
        </div>
             
        <div class="row-container" id="row3">
                <button type="button" class="confirm-btn" onclick="lockRow('row3')">Confirm Row</button>
                <button type="button" class="edit-btn" onclick="unlockRow('row3')">Edit</button>
                <button type="submit">Preview</button>
            </div>

            <div class="row-container" id="row7">
                <h2>Name</h2>
                <p>
                    <label for="defFirstName">FIRST:</label>
                    <input type="text" id="defFirstName" name="defFirstName" value="<?php echo $_SESSION['defFirstName'] ?? ''; ?>" required>
                </p>
                <p>
                    <label for="defMiddleName">MIDDLE:</label>
                    <input type="text" id="defMiddleName" name="defMiddleName" value="<?php echo $_SESSION['defMiddleName'] ?? ''; ?>">
                </p>
                <p>
                    <label for="lastName">LAST:</label>
                    <input type="text" id="lastName" name="lastName" value="<?php echo $_SESSION['lastName'] ?? ''; ?>" required>
                </p>
            </div>

            <div class="row-container" id="row7">
                <label for="date-of-birth">DOB:</label>
                <input type="date" id="date-of-birth" name="dob" value="<?php echo $_SESSION['dob'] ?? ''; ?>" required>
            </div>

            <div class="row-container" id="row7">
                <label for="age-display">AGE:</label>
                <input type="text" id="age-display" name="age-display" value="<?php echo $_SESSION['age'] ?? ''; ?>" readonly>
            </div>

            <div class="row-container">
                <button type="button" class="confirm-btn" onclick="lockRow('row7')">Confirm Row</button>
                <button type="button" class="edit-btn" onclick="unlockRow('row7')">Edit</button>
                <button type="submit">Preview</button>
            </div>

        </form>
    </div>
    <script defer src="script.js"></script>
</body>
</html>
