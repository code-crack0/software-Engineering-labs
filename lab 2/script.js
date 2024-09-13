// Store the original font size
const originalFontSize = window.getComputedStyle(document.body).fontSize;
let darkModeEnabled = false;

function increaseFontSize() {
    document.body.style.fontSize = (parseFloat(window.getComputedStyle(document.body).fontSize) * 2) + 'px';
}

function resetFontSize() {
    document.body.style.fontSize = originalFontSize;
}

function changeFontType() {
    document.body.style.fontFamily = 'Comic Sans MS, Comic Sans, cursive';
}

function changeFontStyle() {
    document.body.style.fontWeight = 'bold';
}

function toggleDarkMode() {
    darkModeEnabled = !darkModeEnabled;
    document.body.style.transition = 'all 0.5s'; // Add transition for smooth effect

    if (darkModeEnabled) {
        // Apply dark mode styles
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';

        // Get all input and textarea elements
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.style.backgroundColor = '#444'; // Dark background for input fields
            input.style.color = '#fff'; // White text color for input fields
            input.style.borderColor = '#666'; // Border color for input fields
        });

        // Apply dark mode styles to cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.backgroundColor = '#444'; // Dark background for cards
            card.style.color = '#fff'; // White text color for cards
        });
    } else {
        // Revert to light mode styles
        document.body.style.backgroundColor = '#f9f9f9';
        document.body.style.color = '#333';

        // Revert input and textarea styles
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.style.backgroundColor = '#fff'; // Light background for input fields
            input.style.color = '#333'; // Default text color for input fields
            input.style.borderColor = '#ccc'; // Default border color for input fields
        });

        // Revert styles for cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.backgroundColor = '#fff'; // Light background for cards
            card.style.color = '#333'; // Default text color for cards
        });
    }
}

