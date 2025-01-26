<?php
// Initialize the logo title with a default value
$logoTitle = "James Bond"; // Default logo title

// Check if a section is active via a query parameter
if (isset($_GET['section'])) {
    // Sanitize the section name to prevent XSS or other vulnerabilities
    $activeSection = htmlspecialchars($_GET['section']);

    // Map the section names to their corresponding titles
    $sectionTitles = [
        'defendant-section' => 'Defendant',
        'cosigner-section' => 'Cosigner',
        'conditions-section' => 'Conditions',
        'terms-section' => 'Terms',
        'promissory-section' => 'Promissory',
        'release-section' => 'Release'
    ];

    // Update the logo title if the section exists in the map
    if (array_key_exists($activeSection, $sectionTitles)) {
        $logoTitle = $sectionTitles[$activeSection];
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($logoTitle); ?></title>
    <style>
       body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        /* Basic reset and structure */
        header {
            position: relative;
            background-color: #f4f4f4;
            border-bottom: 2px solid #ccc;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        /* Logo or site title in the header */
        .logo h1 {
            margin: 0;
            font-size: 20px;
        }

        /* Desktop Menu (shown by default on larger screens) */
        .desktop-menu ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            gap: 15px;
        }

        .desktop-menu ul li {
            margin: 0;
            padding: 0;
        }

        .desktop-menu ul li a {
            text-decoration: none;
            padding: 8px 12px;
            background-color:#444d5c;
            color: white;
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        .desktop-menu ul li a:hover {
            background-color:#161920;
        }

        .desktop-menu ul li a:hover {
            background-color:#161920;
        }

        /* The text area that changes when a nav item is clicked */
        #sectionHeader {
            text-align: center;
            margin: 10px 0;
            font-size: 1.2rem;
            font-weight: bold;
            background-color: #f9f9f917;
            color: #fff;
            max-width: 30%;
            border-radius: 4px;
            display: flex;
            justify-content: space-evenly;
            align-self: center;
            min-width: 240px;
        }


        /* Container area for the sections */
        .container-wrapper {
            display: none;
            padding: 20px;
            border: 1px solid #ccc;
            margin: 10px auto;
            border-radius: 3px;
            max-width: 100%;
        }

        .container-wrapper.active {
            display: grid;
            /* justify-content: space-between; */
            align-items: start;
            padding: 20px;
            border: 1px solid #ccc;
            margin: 10px auto;
            max-width: 100%;
        }

        /* Hamburger for mobile */
        .hamburger {
            display: none; /* Hide by default, shown on smaller screens */
            cursor: pointer;
            font-size: 16px;
            background: #333c4df2;
            border: none;
        }

        /* Mobile Menu (hidden by default) */
        .mobile-menu {
            display: none;
            position: absolute;
            top: 60px; /* Below header */
          
            width: 25%;
            background-color:#333c4d;
            border-bottom: 2px solid #ccc;
        }

        .mobile-menu.active {
            display: block;
        }

        .mobile-menu ul {
            list-style-type: none;
            margin: 0;
            padding: 10px;
            align-items: stretch;
        }

        .mobile-menu ul li {
            margin-bottom: 10px;
        }

        .mobile-menu ul li a {
            text-decoration: none;
            display: block;
            padding: 8px 12px;
            background-color: #333c4df2;
            color: #ffffff;
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        .mobile-menu ul li a:hover {
            background-color: #161920;
        }

        /* Media Query for mobile responsiveness */
        @media (max-width: 599px) {
            .desktop-menu {
                display: none; /* Hide the desktop menu */
            }
            .hamburger {
                display: block; /* Show the hamburger */
            }
        }
    </style>
</head>
<body>

<header>
    <!-- Logo or title from our PHP variable -->
    <div class="logo">
        <h1><?php echo htmlspecialchars($logoTitle); ?></h1>
    </div>

    <!-- Desktop Menu -->
    <nav class="desktop-menu">
        <ul>
            <li><a href="#" data-target="defendant-section">Defendant</a></li>
            <li><a href="#" data-target="cosigner-section">Cosigner</a></li>
            <li><a href="#" data-target="conditions-section">Conditions</a></li>
            <li><a href="#" data-target="terms-section">Terms</a></li>
            <li><a href="#" data-target="promissory-section">Promissory</a></li>
            <li><a href="#" data-target="release-section">Release</a></li>
        </ul>
    </nav>

    <!-- Hamburger icon for mobile -->
    <button class="hamburger" onclick="toggleMobileMenu()">☰</button>

    <!-- Mobile Menu (hidden until hamburger is clicked) -->
    <nav class="mobile-menu" id="mobileMenu">
        <ul>
            <li><a href="#" data-target="defendant-section">Defendant</a></li>
            <li><a href="#" data-target="cosigner-section">Cosigner</a></li>
            <li><a href="#" data-target="conditions-section">Conditions</a></li>
            <li><a href="#" data-target="terms-section">Terms</a></li>
            <li><a href="#" data-target="promissory-section">Promissory</a></li>
            <li><a href="#" data-target="release-section">Release</a></li>
        </ul>
    </nav>
</header>

<!-- The text in the “header” region that changes based on which button/link is clicked -->
<div id="sectionHeader">Agreement for Bail Bond</div>

<!-- Your six sections -->
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

<script>
    // 1) Toggle mobile menu
    function toggleMobileMenu() {
        document.getElementById("mobileMenu").classList.toggle("active");
    }

    // 2) Section toggling & updating #sectionHeader text
    const sectionHeader = document.getElementById('sectionHeader');
    const navLinks = document.querySelectorAll('[data-target]'); 

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // prevent any default <a> behavior

            // Update the big text header
            const label = link.textContent.trim();
            sectionHeader.textContent = label;

            // Get the target section ID
            const targetId = link.getAttribute('data-target');

            // Hide all sections
            const allSections = document.querySelectorAll('.container-wrapper');
            allSections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the selected section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // On mobile, close the menu after clicking
            document.getElementById("mobileMenu").classList.remove("active");
        });
    });
</script>

</body>
</html>
