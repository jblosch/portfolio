
function parallax(){
  const header = document.getElementById("header-bg");
  let xPos = window.scrollY * 0.015;
  header.style.backgroundPosition = "50% " + (50 + xPos).toString() + "%";
}

window.addEventListener("scroll", parallax);
