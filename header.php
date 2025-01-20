<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Header</title>

</head>
<body>
<div class="header">
        <h1>Entity Manager</h1>
        <div class="menu">
            <button id="addDefendant">Add Defendant</button>
            <button id="addDefendantSpouse">Add Defendant’s Spouse</button>
            <button id="addCosigner">Add Co-Signer</button>
            <button id="addCosignerSpouse">Add Co-Signer’s Spouse</button>
        </div>
        <div class="hamburger" onclick="openHeaderOverlay()">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

    <div id="headerOverlay" class="header-overlay">
        <span class="close-btn" onclick="closeHeaderOverlay()">&times;</span>
        <div class="header-overlay-content">
            <button id="addDefendant-overlay">Add Defendant</button>
            <button id="addDefendantSpouse-overlay">Add Defendant’s Spouse</button>
            <button id="addCosigner-overlay">Add Co-Signer</button>
            <button id="addCosignerSpouse-overlay">Add Co-Signer’s Spouse</button>
            <button id="removeDefendant-overlay">Remove Defendant</button>
            <button id="removeDefendantSpouse-overlay">Remove Defendant’s Spouse</button>
            <button id="removeCosigner-overlay">Remove Co-Signer</button>
            <button id="removeCosignerSpouse-overlay">Remove Co-Signer’s Spouse</button>
        </div>
    </div>
  
</body>
</html>
