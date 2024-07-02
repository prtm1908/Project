
document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's entered password
    var enteredPassword = document.getElementById("pwd").value;

    // Hardcoded stored password (replace this with your actual stored password)
    var storedPassword = "sahi password";

    // Compare entered password with stored password
    if (enteredPassword.toLowerCase() === storedPassword) {
        alert("Damn sahi jawab haathi");

        window.location.href = "result.html";
    } else if (enteredPassword.toLowerCase() === "gugnani") {
        alert("Are you sureeeee?");

    } else {
        alert("Galat hai pagal");
    }
});
