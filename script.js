// Display an alert when the page loads
window.onload = function() {
    alert("Welcome to my portfolio!");
};

// Add event listeners to the contact links
document.querySelectorAll('.contact-info a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        // Open the link in a new tab or window
        window.open(link.href, '_blank');
    });
});

// Add a hover effect to the profile image
document.querySelector('.profile img').addEventListener('mouseover', event => {
    event.target.style.transform = 'scale(1.1)';
});

document.querySelector('.profile img').addEventListener('mouseout', event => {
    event.target.style.transform = 'scale(1)';
});
