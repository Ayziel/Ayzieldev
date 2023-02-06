let popUp = document.querySelector(".Pop-up");
let createReminder = document.querySelector(".Create-Reminder-Btn");
let createBtn = document.querySelector(".Create-Btn"); 
let container = document.querySelector(".Container");
let Userinput = document.querySelector(".User-Input");

createReminder.addEventListener("click", function(){ //Opens The pop up
popUp.classList.add("Pop-up-Display");
});


createBtn.addEventListener("click", function(){ //Creates The Reminder
  if( Userinput.value == 0){
    alert("Add a text");
  }
  else {
popUp.classList.remove("Pop-up-Display");

let newDiv = document.createElement("div"); //Creates The Div
newDiv.classList.add("List-Container");
container.append(newDiv);

let newP = document.createElement("p"); //Creates The Paragraph
newP.classList.add("List-Text");
newP.innerText= Userinput.value; //Input User
newDiv.append(newP);
Userinput.value = "";

let newDivBtn = document.createElement("div"); //Creates The Div
newDivBtn.classList.add("List-Container-Btn");
newDiv.append(newDivBtn);

let finishBtn = document.createElement("button"); //Under Lines the Text
finishBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
finishBtn.classList.add("Finish-Btn")
newDivBtn.append(finishBtn);



let DeleteBtn = document.createElement("button"); //Deletes The text
DeleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
DeleteBtn.classList.add("Delete")
newDivBtn.append(DeleteBtn);



DeleteBtn.addEventListener("click", function(){
let parent = newDiv.parentNode;
 parent.removeChild(newDiv);

});

finishBtn.addEventListener("click", function(){

newP.style.textDecoration = "line-through";
newP.style.color = "gray";
finishBtn.style.backgroundColor = "green";
});

}

})







