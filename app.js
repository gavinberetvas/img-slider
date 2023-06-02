/* eslint-disable quotes */
/* eslint-disable require-jsdoc */
let counter = 0;
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
const imgWrapper = document.querySelector(".img-wrapper");
const radioButtons = document.querySelectorAll(".radio");
let intervalFunction = setInterval(advance, 2000);

initializeArrows();
initializePlayPause();
initializeRadioButtons();

function initializeRadioButtons() {
  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("click", function () {
      counter = parseInt(radioButton.dataset.id, 10);
      moveElement();
    });
  });
}

function initializeArrows() {
  leftArrow.addEventListener("click", function () {
    counterDown();
    moveElement();
  });
  rightArrow.addEventListener("click", function () {
    counterUp();
    moveElement();
  });
}

function initializePlayPause() {
  document.getElementById('play').addEventListener('click', () => {
    intervalFunction = setInterval(advance, 2000);
    console.log("play");
  });
  document.getElementById('pause').addEventListener('click', () => {
    clearInterval(intervalFunction);
    console.log("pause");
  });
}

function counterUp() {
  counter++;
}

function counterDown() {
  counter--;
}

function moveElement() {
  if (counter < 0) {
    counter = 4;
    imgWrapper.style.marginLeft = "-280rem";
  } else if (counter == 0) {
    imgWrapper.style.marginLeft = "0rem";
  } else if (counter == 1) {
    imgWrapper.style.marginLeft = "-70rem";
  } else if (counter == 2) {
    imgWrapper.style.marginLeft = "-140rem";
  } else if (counter == 3) {
    imgWrapper.style.marginLeft = "-210rem";
  } else if (counter == 4) {
    imgWrapper.style.marginLeft = "-280rem";
  } else if (counter > 4) {
    counter = 0;
    imgWrapper.style.marginLeft = "0rem";
  }
  console.log(counter);
  moveRadioButton();
}

function advance() {
  counterUp();
  moveElement();
}

function moveRadioButton() {
  var radioBtn = document.querySelector(
    'input[type="radio"][data-id="' + counter + '"]'
  );
  if (radioBtn) {
    radioBtn.checked = true;
  }
}

