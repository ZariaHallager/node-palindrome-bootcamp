const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Endpoint to check palindrome
app.get('/check', (req, res) => {
    const input = req.query.input;
    if (isPalindrome(input)) {
        res.json({ message: `"${input}" is a palindrome!` });
    } else {
        res.json({ message: `"${input}" is not a palindrome. Example of a palindrome: "A man, a plan, a canal, Panama"` });
    }
});

// Start the server
