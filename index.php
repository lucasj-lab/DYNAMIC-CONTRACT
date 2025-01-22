<?php
session_start();

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Form</title>
    <link rel="stylesheet" href="index.css"> <!-- Optional: Link your styles -->
    
</head>
<body>
<?php include 'header.php'; ?>
    <!-- Validation Form -->
    <form id="validationForm" action="index.php" method="post">
    </form>
    <script src="index.js"></script> 
</body>

</html>