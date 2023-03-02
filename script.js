// function SentEmail() {
//   console.log("start");
//   var tempParams = {
  
//     from_name: document.getElementById("MySubject").value,
//     to_name: document.getElementById("MyName").value,
//     message: document.getElementById("MyMessage").value,
//     email: document.getElementById("MyEmail").value,
  
//   };
  
//   emailjs.send('service_ejxuv7g',"template_basw2me",tempParams)
//   .then(function(res){
//     console.log("success", res.status);
//     console.log("in");
//   })

//   }

//   function func(e)
//   {
//   event.preventDefault()
//   alert("Message-Sent")
//   console.log('not refreshed!');
  
//   }


  function SentEmail() {
    console.log("start");
    
    var subject = document.getElementById("MySubject").value;
    var name = document.getElementById("MyName").value;
    var message = document.getElementById("MyMessage").value;
    var email = document.getElementById("MyEmail").value;
    
    // check if all fields are filled
    if (!subject || !name || !message || !email) {
      alert("Please fill in all fields.");
      return;
    }
    
    // check if email is valid
    var validEmail = false;
    if (email.endsWith("@gmail.com") || email.endsWith("@yahoo.com")) {
      validEmail = true;
    }
    if (!validEmail) {
      alert("Please enter a valid email address (gmail or yahoo).");
      return;
    }
    
    var tempParams = {
      from_name: subject,
      to_name: name,
      message: message,
      email: email,
    };
    
    emailjs.send('service_ejxuv7g', 'template_basw2me', tempParams)
      .then(function(res){
        console.log("success", res.status);
        alert("Message-Sent. Thank you for reaching out. I usually reply within 2-3 days.");
        document.getElementById("MySubject").value = "";
        document.getElementById("MyName").value = "";
        document.getElementById("MyMessage").value = "";
        document.getElementById("MyEmail").value = "";
      });
  }
  
  function func(e) {
    event.preventDefault()

    console.log('not refreshed!');
  }