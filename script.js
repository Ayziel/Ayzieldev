function SentEmail(params) {
var tempParams = {

  from_name: document.getElementById("MySubject").value,
  to_name: document.getElementById("MyName").value,
  message: document.getElementById("MyMessage").value,
  email: document.getElementById("MyEmail").value,

};

emailjs.send('service_o4rf9bw',"template_i9s6y4i",tempParams)
.then(function(res){
  console.log("success", res.status);
})
}


function func(e){
event.preventDefault()

console.log('not refreshed!')

}


