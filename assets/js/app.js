var data = {
    service_id: '',
    template_id: '',
    user_id: 'user_OxfJZYwpeVsS9XIdsUY0r',
    template_params: {
        "user_name": "contact_form",
        "template_id": "template_2opfpx6"
    },
};
 
$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    alert('Your mail is sent!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});
// code fragment