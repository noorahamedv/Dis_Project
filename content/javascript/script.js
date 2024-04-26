// JavaScript for handling navigation

// Function to add 'active' class to the current page's link in the navigation
function setActiveLink() {
    var currentLocation = window.location.pathname;
    var links = document.querySelectorAll('nav ul li a');
    links.forEach(function(link) {
        if (link.getAttribute('href') === currentLocation) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
}

// Call setActiveLink function when the page loads
document.addEventListener('DOMContentLoaded', setActiveLink);

// JavaScript for toggling attraction list display
function showAttractions() {
    var attractionList = document.getElementById('attractionList');
    if (attractionList.style.display === 'none') {
        attractionList.style.display = 'block';
    } else {
        attractionList.style.display = 'none';
    }
}
