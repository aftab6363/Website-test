document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the username and password match any user
    let foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        // Store the user info in localStorage
        localStorage.setItem('currentUser', JSON.stringify(foundUser));

        // If it's an admin user, redirect to the admin dashboard
        if (username === "admin" && password === "admin123") {
            window.location.href = "admin-dashboard.html"; // Redirect to admin dashboard
        } else {
            window.location.href = "index.html"; // Redirect to the home page (user dashboard)
        }
    } else {
        // Show error message if credentials are invalid
        document.getElementById('error-message').textContent = "Invalid username or password.";
    }
});
