// Get username from localStorage
const username = localStorage.getItem("username");

// Display the username on the dashboard
document.getElementById("userName").textContent = username;
    // Check if the user is logged in
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        // If the user is not logged in, redirect to login page
        window.location.href = 'login.html';
    }

    