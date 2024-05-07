//swtiches screen to yellow sun
function switchToYellowScreen() {
    // Redirect to the yellow screen HTML file
    window.location.href = 'yellow.html';
}

//sends email to Nandeesh with the user's message
function sendEmail() {
    // Email details
    var to = 'nandeeshthemaster@gmail.com'; // Nandeesh's fake email adress
    var subject = 'A request for thout leader, Nandeesh Jain'; // The subject of the email
    var body = document.getElementById('message').value; // Get message from input field

    // Clear the message input field
    document.getElementById('message').value = '';

    // Open default email client with pre-filled content
    var mailtoUrl = 'mailto:' + encodeURIComponent(to) +
                    '?subject=' + encodeURIComponent(subject) +
                    '&body=' + encodeURIComponent(body);

    window.location.href = mailtoUrl;
}
