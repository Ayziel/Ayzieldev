function SentEmail() {
  console.log("start");
  var tempParams = {
  
    from_name: document.getElementById("MySubject").value,
    to_name: document.getElementById("MyName").value,
    message: document.getElementById("MyMessage").value,
    email: document.getElementById("MyEmail").value,
  
  };
  
  emailjs.send('service_ejxuv7g',"template_basw2me",tempParams)
  .then(function(res){
    console.log("success", res.status);
    console.log("in");
  })

  }

  function func(e)
  {
  event.preventDefault()
  alert("Message-Sent")
  console.log('not refreshed!');
  
  }
