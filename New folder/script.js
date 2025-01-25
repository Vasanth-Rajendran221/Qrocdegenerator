


const userInput = document.getElementById("userInput");
const generateButton = document.getElementById("generateBtn");
generateButton.addEventListener("click", function() {
    const text = userInput.value;
    if (text) {
        document.getElementById("qrcode").innerHTML = "";
        console.log(text);
        new QRCode(document.getElementById("qrcode"), {
            text: text,
            width: 200,  
            height: 200, 
            colorDark: "#000000", 
            colorLight: "#ffffff", 
            correctLevel: QRCode.CorrectLevel.H,
        });
    } else {
        alert("Please enter some text to generate a QR code!");
    }
});

