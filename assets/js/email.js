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

        var notice = document.getElementById("notice");
        var message = document.getElementById("notice-message");
        var closeButton = document.getElementById("close-notice");

        message.innerText = 'Thank you for your submission!';
        message.style.backgroundColor = '#4caf50';

        // show the notification
        notice.style.display = 'block';

        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("subject").value = '';
        document.getElementById("message").value = '';

    }, function(error) {
        console.error("email sending failed: ", error);
        message.innerText = 'Form submission failed!';
        message.style.backgroundColor = '#44336';

        // show the notification
        notice.style.display = 'block';
        // Hide the overlay
        document.getElementById('overlay').style.display = 'none';
    });

    // function to close the notification
    function closeNotice() {
        var notification = document.getElementById("notice");
        notification.style.display = 'none';
    }

    // attach event listener to the close button
    document.getElementById("close-notice").addEventListener('click', closeNotice);


};