
document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's entered password
    var enteredPassword = document.getElementById("pwd").value;

    // Hardcoded stored password (replace this with your actual stored password)
    var storedPassword = "SYL";

    // Compare entered password with stored password
    if (enteredPassword === storedPassword) {
        alert("Authentication successful!");

        window.location.href = "result.html";
    } else {
        alert("Authentication failed. Please try again.");
        console.log("Galat answer")
    }
});
