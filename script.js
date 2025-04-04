function showDashboard() {
    alert('Dashboard Feature Coming Soon!');
}
// Example of calculating earnings for different investment plans
let investmentAmount = 1000; // Example investment amount in dollars
let earningRate = 0.05; // 5% daily earning rate

// Function to calculate earnings
function calculateEarnings(amount, rate) {
    return amount * rate;
}

// Show earnings dynamically
let earnings = calculateEarnings(investmentAmount, earningRate);
document.getElementById("earningsDisplay").textContent = `Current Earnings: $${earnings.toFixed(2)}`;

// Set active link based on current page
function setActiveLink() {
    const links = document.querySelectorAll('.nav-item');
    links.forEach(link => link.classList.remove('active'));
    
    const currentPage = window.location.pathname.split('/').pop();
    const currentLink = document.getElementById(currentPage.split('.')[0] + 'Link');
    if (currentLink) {
        currentLink.classList.add('active');
    }
}

// Initialize active link when page loads
document.addEventListener('DOMContentLoaded', function() {
    setActiveLink();
    
    // Add click handlers for mobile/smooth transitions
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            // Don't prevent default if it's an actual link
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
            
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});