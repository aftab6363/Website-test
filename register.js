document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const referralCode = document.getElementById('referral').value;
    const captchaInput = document.getElementById('captchaInput').value;

    // Validate CAPTCHA
    if (captchaInput !== captchaCode) {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
        generateCaptcha(); // Regenerate CAPTCHA
        return;
    }

    // Check if all fields are filled
    if (username && email && password) {
        // Retrieve existing users from localStorage or initialize as an empty array
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the username already exists
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            // If username exists, show an error message and return
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('errorMessage').innerText = 'Username already taken! Please choose a different username.';
            document.getElementById('successMessage').style.display = 'none';
            return;
        }

        // Create a new user object
        const newUser = {
            username: username,
            email: email,
            password: password,
            referralCode: referralCode,
        };

        // Add the new user to the users array
        users.push(newUser);

        // Store the updated users array back to localStorage
        localStorage.setItem('users', JSON.stringify(users));

        // Display success message and hide the form
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('errorMessage').style.display = 'none';
        document.getElementById('registerForm').reset(); // Reset the form

        setTimeout(function() {
            window.location.href = 'login.html'; // Redirect to login page after 3 seconds
        }, 3000);
    } else {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('errorMessage').innerText = 'Please fill out all fields.';
        document.getElementById('successMessage').style.display = 'none';
    }
});
