<?php
// Start the session or include any necessary session management here

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Section Toggle</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        #header {
            background-color: #f4f4f4;
            padding: 15px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            border-bottom: 2px solid #ccc;
        }
        .section-buttons {
            display: flex;
            justify-content: center;
            margin: 15px 0;
        }
        .section-buttons button {
            margin: 0 10px;
            padding: 0px;
            font-size: 14px;
            cursor: pointer;
            border: 1px solid #ccc;
            background-color: #007BFF;
            color: white;
            border-radius: 5px;
        }
        .section-buttons button:hover {
            background-color: #0056b3;
        }
        .container-wrapper {
            display: none;
            padding: 20px;
            border: 1px solid #ccc;
            margin: 10px auto;
        }
        .container-wrapper.active {
            display: grid;
            justify-content: space-between;
            justify-content: center;
            align-items: start;
        }
    </style>
</head>



<body>
<div id="header">Select a Section</div>

<div class="section-buttons">
    <button data-target="defendant-section">Defendant</button>
    <button data-target="cosigner-section">Cosigner</button>
    <button data-target="conditions-section">Conditions</button>
    <button data-target="terms-section">Terms</button>
    <button data-target="promissory-section">Promissory</button>
    <button data-target="release-section">Release</button>
</div>


<!-- Section containers -->
<div id="defendant-section" class="container-wrapper active">
<h2>Defendant Information</h2>
<p>Content related to the Defendant goes here.</p>
</div>

<div id="cosigner-section" class="container-wrapper">
    <h2>Cosigner Information</h2>
    <p>Content related to the cosigner goes here.</p>
</div>

<div id="conditions-section" class="container-wrapper">
    <h2>Conditions</h2>
    <p>List of conditions...</p>
</div>

<div id="terms-section" class="container-wrapper">
    <h2>Terms</h2>
    <p>List of terms...</p>
</div>

<div id="promissory-section" class="container-wrapper">
    <h2>Promissory Note</h2>
    <p>Content for the promissory note goes here.</p>
</div>

<div id="release-section" class="container-wrapper">
    <h2>Release of Information</h2>
    <p>Content for the release of information goes here.</p>
</div>
</body>
</html>