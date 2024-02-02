
document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's entered password
    var enteredPassword = document.getElementById("pwd").value;

    // Hardcoded stored password (replace this with your actual stored password)
    var storedPassword = "SYL";

    // Compare entered password with stored password
    if (enteredPassword === storedPassword) {
        alert("sahi jawaab haathi");

        window.location.href = "result.html";
    } else {
        alert("galat hai pagal");
        console.log("Galat answer")
    }
});
