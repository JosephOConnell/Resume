function sendMail(contactForm) {
    emailjs.send("service_97skkzc", "Joseph-Temp", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            alert("Message Sent");
        },
        function(error) {
            console.log("FAILED", error);
            return false;  // To block from loading a new page
        }
    );
}