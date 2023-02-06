const frontPage = document.querySelector(".Front");
const SecondPage = document.querySelector("#Second-Page");
const ThirdPage = document.querySelector("#Third-Page");
const nav = document.querySelector(".Nav");

const arrowOne = document.querySelector(".Second-Page-Arrow-One")
const arrowTwo = document.querySelector(".Second-Page-Arrow-Two")
const call = document.querySelector(".Second-Page-Call")
const camera = document.querySelector(".Second-Page-Camera")
const smile = document.querySelector(".Second-Page-Smile")
const secondBox = document.querySelector(".Second-Page-Box") 

const Navoptions = {
 root: null,
 threshold:"0",
 rootMargin:"0px"
};
const navI = new IntersectionObserver (function (entries, navI){
entries.forEach(function(entry){
  console.log(entry.target, entry.isIntersecting);
  if(!entry.isIntersecting){
  nav.classList.add("NavSwitch");
  } 
  else{
    nav.classList.remove("NavSwitch");
    } 
})
}, Navoptions);
navI.observe(frontPage);


const goMiddleOptions = {
  root: null,
  threshold:".9",
  rootMargin:"0px"
 };
 const goMiddle = new IntersectionObserver (function (entries, goMiddle){
 entries.forEach(function(entry){
   console.log(entry.target, entry.isIntersecting);
  if(entry.isIntersecting){
    
    arrowOne.classList.add("Go-Middle");
    arrowTwo.classList.add("Go-Middle");
    call.classList.add("Go-Middle");
    camera.classList.add("Go-Middle");
    smile.classList.add("Go-Middle");
    goMiddle.unobserve;
  }


 })
 }, goMiddleOptions);

 goMiddle.observe(secondBox);
 