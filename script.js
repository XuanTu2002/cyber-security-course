// Check if it's within working hours (9am - 6pm GMT+7)
function isWithinWorkingHours() {
    const currentTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" });
    const currentHour = new Date(currentTime).getHours();
    return currentHour >= 9 && currentHour < 18;
}

// Handle access request for the sensitive file
function checkFileAccess() {
    if (isWithinWorkingHours()) {
        document.getElementById("file2-content").innerText = "You can view this sensitive file.";
    } else {
        // Show the modal asking for password
        document.getElementById("password-modal").style.display = "flex";
    }
}

// Close the modal
function closeModal() {
    document.getElementById("password-modal").style.display = "none";
}

// Verify the admin password
function verifyPassword() {
    const password = document.getElementById("admin-password").value;
    const correctPassword = "admin123"; // Example password, should be changed in a real application

    if (password === correctPassword) {
        document.getElementById("file2-content").innerText = "You are granted access to the sensitive file.";
        closeModal();
    } else {
        alert("Incorrect password! Access denied.");
        closeModal();
    }
}
