function aandb() {
  var abutton = document.querySelector(".a-button");
  var bbutton = document.querySelector(".b-button");
  var start = document.querySelector(".start");
  var updown = document.querySelector(".up-down-btn");
  var left = document.querySelector(".left-part");
  var right = document.querySelector(".right-part");
  var up = document.querySelector(".up-part");
  var down = document.querySelector(".down-part");
  var leftright = document.querySelector(".left-right-btn");

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 65) {
      abutton.classList.add("a-button-no-shadow");
    }

    if (event.keyCode === 66) {
      bbutton.classList.add("b-button-no-shadow");
    }

    if (event.keyCode === 13) {
      start.classList.add("start-button-no-shadow");
    }

    if (event.keyCode === 38) {
      //upp
      up.style.boxShadow = "0px 0px 0px 0px rgba(160, 0, 20, 1)";
    }

    if (event.keyCode === 37) {
      //vänster
      left.style.boxShadow = "0px 0px 0px 0px rgba(160, 0, 20, 1)";
    }

    if (event.keyCode === 39) {
      //höger
      right.style.boxShadow = "0px 0px 0px 0px rgba(160, 0, 20, 1)";
    }

    if (event.keyCode === 40) {
      //ner
      down.style.boxShadow = "0px 0px 0px 0px rgba(160, 0, 20, 1)";
    }

  });

  window.addEventListener("keyup", function(event) {
    if (event.keyCode === 65) {
      abutton.classList.remove("a-button-no-shadow");
    }

    if (event.keyCode === 66) {
      bbutton.classList.remove("b-button-no-shadow");
    }

    if (event.keyCode === 13) {
      start.classList.remove("start-button-no-shadow");
    }

    if (event.keyCode === 38) {
      //upp
      up.style.boxShadow = "4px 3px 0px 0px rgba(160, 0, 20, 1)";
    }

    if (event.keyCode === 40) {
      //ner2px 3px 0px 0px rgba(160, 0, 20, 1)
      down.style.boxShadow = "2px 3px 0px 0px rgba(160, 0, 20, 1)";
    }

    if (event.keyCode === 37) {
      //vänster
      left.style.boxShadow = "3px 3px 0px 0px rgba(160, 0, 20, 1)";
    }

    if (event.keyCode === 39) {
      //höger
      right.style.boxShadow = "2px 3px 0px 0px rgba(160, 0, 20, 1)";
    }

  });

}

aandb();
