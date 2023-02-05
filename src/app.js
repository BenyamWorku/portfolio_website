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





