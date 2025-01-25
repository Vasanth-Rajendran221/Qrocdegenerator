

// Get references to the input box and the button
const userInput = document.getElementById("userInput");
const generateButton = document.getElementById("generateBtn");

// Listen for the button click
generateButton.addEventListener("click", function() {
    // Grab the value the user typed
    const text = userInput.value;

    // Check if the user has typed something
    if (text) {
        // Clear any previous QR code
        document.getElementById("qrcode").innerHTML = "";
        console.log(text);
        // Create a new QR code using QRCode.js
        new QRCode(document.getElementById("qrcode"), {
            text: text, // The text to turn into a QR code
            width: 200,  // Width of the QR code
            height: 200, // Height of the QR code
            colorDark: "#000000", // Dark color for the QR code
            colorLight: "#ffffff", // Light background color for the QR code
            correctLevel: QRCode.CorrectLevel.H,// Error correction level (L, M, Q, H)
            
        });
    } else {
        alert("Please enter some text to generate a QR code!");
    }
});

