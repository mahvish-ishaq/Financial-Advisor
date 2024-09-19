// Add event listener to the Get Started button
document.querySelector('button').addEventListener('click', function() {
    // Toggle the visibility of the services section
    document.querySelector('#services').classList.toggle('visible');
});
// Add event listener to the login form
document.querySelector('#login form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.querySelector('#login input[type="text"]').value;
    var password = document.querySelector('#login input[type="password"]').value;
    // Validate the user input and handle the login request
});

// Add event listener to the register form
document.querySelector('#register form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.querySelector('#register input[type="text"]').value;
    var email = document.querySelector('#register input[type="email"]').value;
    var password = document.querySelector('#register input[type="password"]').value;
    var confirmPassword = document.querySelector('#register input[type="password"]:last-child').value;
    // Validate the user input and handle the registration request
});
