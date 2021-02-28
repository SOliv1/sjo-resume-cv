var firebaseConfig = {
    apiKey: "AIzaSyCKsr2iyTfztT0VqiLNIAMVdkSOPTsCXuY",
    authDomain: "my-contact-b2e96.firebaseapp.com",
    projectId: "my-contact-b2e96",
    storageBucket: "my-contact-b3e96.appspot.com",
    messagingSenderId: "1001114404916",
    appId: "1:1001114404916:web:3c0dd2edd2bfbd9606a261"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
    
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
    
  function submitForm(e) {
    e.preventDefault();
          
    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    
    
      saveContactInfo(name, email, message);
    
      document.querySelector(".contact-form").reset();
    }
    
    // Save infos to Firebase
    function saveContactInfo(name, email, message) {
      let newContactInfo = contactInfo.push();
      
      newContactInfo.set({
        name: name,
        email: email,
        message: message,
      });
  }
    //Retrieve Infos
  function retrieveInfos() {
    let ref = firebase.database().ref("infos");
    ref.on("value", gotData);
  }
  
  function gotData(data)  {
    let info = data.val();
    let keys = object.keys(info);
  
    for (let i = 0; i < keys.length; i++) {
      let i = keys[i];
      let name = info[i].name;
      let email = info.email;
      let message = info[i].message; 
      //console.log(name, email, message);
      
      let infosResults = document.querySelector(".infoResults");
      
      infosResults.innerHTML += `<div>
      <p><strong>Name: <strong/>${name} <br/>
      <a><strong>Email: <strong/>${email}</a> <br/>
      <a><strong>Message: <strong/>${message}</a>
      </p>
      </div>`;
    }
  }
  
  retrieveInfos();