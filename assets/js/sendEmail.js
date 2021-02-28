function sendMail(contactForm) {
  emailjs
    .send("gmail", "contact-form", {
      from_name: contactForm.name.value,
      from_email: contactForm.email.value,
      project_request: contactForm.projectsummary.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
  //return false: // To block from loading a new page
  return true; // need this to allow form data to be refreshed otherwise retains data just typed in.
}
