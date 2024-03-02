
document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's entered password
    var enteredPassword = document.getElementById("pwd").value;

    // Hardcoded stored password (replace this with your actual stored password)
    var storedPassword = "9315057337";

    // Compare entered password with stored password
    if (enteredPassword === storedPassword) {
        alert("Damn sahi jawab haathi ");

        window.location.href = "result.html";
    } else {
        alert("Galat hai pagal");
    }
});
