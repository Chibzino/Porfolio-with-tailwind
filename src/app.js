const hamburger = document.querySelector("#hamburger");
const menu =document.querySelector("#menu");
const cancel = document.querySelector("#cancel");

hamburger.addEventListener("click", function(){
menu.classList.toggle("hidden");

})

cancel.addEventListener("click", function(){
    menu.classList.toggle("hidden");
   
    });




const autotyping = document.querySelector("#autotyping");
const texts=[
    "Developer", "Designer", "Author"
];
  const delay = 50; // Delay in milliseconds between each character
  let textIndex = 0;
  let charIndex = 0;
  
  function autotype() {
    if (charIndex < texts[textIndex].length) {
      document.getElementById("autotype").innerHTML += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(autotype, delay);
    } else {
      // Start typing the next text after a delay
      setTimeout(erase, 2000);
    }
  }
  
  function erase() {
    if (charIndex >= 0) {
      const text = texts[textIndex].substring(0, charIndex - 1);
      document.getElementById("autotype").innerHTML = text;
      charIndex--;
      setTimeout(erase, delay);
    } else {
      // Move to the next text
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(autotype, 1000);
    }
  }
  
  // Call the autotype function when the page loads
  window.onload = function() {
    autotype();
  };


  //toggle between dark and white mode
  const moon = document.querySelector("#moon");
  const body = document.querySelector("body");

  moon.addEventListener("click", function(){
    body.classList.toggle("dark")
  })
  