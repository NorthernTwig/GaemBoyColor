function setGameboySize() {
  var windowHeight = window.innerHeight;
  var gameboy = document.querySelector(".gameboy-main");

  var calculateZoom = windowHeight/(gameboy.clientHeight + 35);
  gameboy.style.transform = "scale(" + calculateZoom + ")";

}

window.addEventListener("load", setGameboySize);
window.addEventListener("resize", setGameboySize);
