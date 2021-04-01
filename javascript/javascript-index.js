var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".ham")

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger)

// toggle when clicking on links


function checkToggle(e){
  var itemClicked = e.target
  if (itemClicked.classList.contains("menuLink")) {
    toggleHamburger()
  }
}
