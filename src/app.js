
window.onload = function() {
  if (location.hash !=="")
 {
  // history.replaceState(null, null, "#");
  location.hash="";
  // scrollTo(0,0);
  
 }
//  location.replace(location.href);
};
const typewriter = document.querySelector(".typewriter");
  const caret = typewriter.style.borderRight;
  const text = typewriter.innerHTML;
  const time = text.length * 15; // adjust time based on text length
  const typingSound = document.querySelector("#typing-sound");

//   typewriter.style.animation = `typing ${time}ms steps(40, end), blink-caret 0.75s step-end forwards`;

  typewriter.addEventListener("animationstart", () => {
    typingSound.currentTime = 0;
    typingSound.play();
  });
// button is clicked and takes us to the about me page

  document.getElementById("about-me-button").addEventListener("click", function() {
    location.hash = "#about-me";
  });

// toggle the hamburger icon depending on the size of the viewport
const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

document.getElementById("email-link").addEventListener("click",function(event)
{
  event.preventDefault();
  window.open("options.html","choose Email Provider","width=400,height=500");

})

// displays the cv in pdf 
// document.getElementById("pdf-link").addEventListener("click", function(event) {
//   event.preventDefault();
//   document.getElementById("pdf-window").style.display = "block";
// });

// document.getElementById("pdf-window").addEventListener("click", function(event) {
//   if (event.target == this) {
//     document.getElementById("pdf-window").style.display = "none";
//   }
// });

document.getElementById("pdf-link").addEventListener("click", function(event) {
  event.preventDefault();
  window.open(this.href, '_blank');
});




