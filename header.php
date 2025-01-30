<?php
// Initialize the logo title with a default value
$logoTitle = "BOND, JAMES BOND"; // Default logo title

// Check if a section is active via a query parameter
if (isset($_GET['section'])) {
    // Sanitize the section name
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
            <!-- Notice we do not add "active-link" here by default. We’ll do it via JS. -->
            <li><a href="#" data-target="defendant-section">Defendant</a></li>
            <li><a href="#" data-target="cosigner-section">Cosigner</a></li>
            <li><a href="#" data-target="conditions-section">Conditions</a></li>
            <li><a href="#" data-target="terms-section">Terms</a></li>
            <li><a href="#" data-target="promissory-section">Promissory</a></li>
            <li><a href="#" data-target="release-section">Release</a></li>
        </ul>
    </nav>

    <!-- Dark Mode toggle button -->
    <button id="darkModeToggle" style="background-color:#666; color:#fff; padding:5px 10px; border:none; cursor:pointer;">
        <span id="darkLabel">Dark</span>
        <span id="lightLabel" style="display: none;">Light</span>
    </button>

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

<!-- Sections (Defendant is the default one shown) -->
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

    // We'll track which link is "active" and highlight it
    function setActiveLink(clickedLink) {
        // Remove .active-link from all
        navLinks.forEach(link => link.classList.remove('active-link'));
        // Add .active-link to the clicked one
        clickedLink.classList.add('active-link');
    }

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

            // Set this link as active
            setActiveLink(link);

            // On mobile, close the menu after clicking
            document.getElementById("mobileMenu").classList.remove("active");
        });
    });

    // By default, highlight "Defendant" link 
    // (since #defendant-section is displayed on load)
    window.addEventListener('DOMContentLoaded', () => {
        // Find the link with data-target="defendant-section" 
        // and mark it as active
        const defaultLink = document.querySelector('[data-target="defendant-section"]');
        if (defaultLink) {
            defaultLink.classList.add('active-link');
        }

        // 3) Dark Mode toggle initial check
        if (document.body.classList.contains('dark-mode')) {
            darkLabel.style.display  = 'none';
            lightLabel.style.display = 'inline';
        } 
    });

    // 3) Dark Mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkLabel      = document.getElementById('darkLabel');
    const lightLabel     = document.getElementById('lightLabel');

    darkModeToggle.addEventListener('click', () => {
        // Toggle dark mode class
        document.body.classList.toggle('dark-mode');

        // If now in dark mode, show "Light Mode" label
        if (document.body.classList.contains('dark-mode')) {
            darkLabel.style.display  = 'none';
            lightLabel.style.display = 'inline';
        } else {
            // If now in light mode, show "Dark Mode" label
            darkLabel.style.display  = 'inline';
            lightLabel.style.display = 'none';
        }
    });
</script>
</body>
</html>
