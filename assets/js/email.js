(function() {
    emailjs.init("Gwx_D9712nYw6O2QA");
    console.log("ionint")
})();

function sendEmail(event) {
    event.preventDefault();

    // get form input data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // compose the email parameters
    var params = {
        from_name: name,
        from_email: email,
        from_subject: subject,
        message: message
    };

    // send the email using EmailJS
    emailjs.send('service_dxjbh6b', 'template_de04hhk', params).then(function(response) {
        console.log('email sent: ', response.status, response.text);
        alert("Thank you for your submission!");
    }, function(error) {
        console.error("email sending failed: ", error);
        alert("Oops! Something went wrong. Please try again.");
    });
};