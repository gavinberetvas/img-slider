/* eslint-disable quotes */
/* eslint-disable require-jsdoc */
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
const imgWrapper = document.querySelector(".img-wrapper");
let counter = 0;

leftArrow.addEventListener("click", function () {
  counterDown();
  moveElement();
});

rightArrow.addEventListener("click", function () {
  counterUp();
  moveElement();
});

let radioButtons = document.querySelectorAll(".radio");

radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("click", function () {
    counter = parseInt(radioButton.dataset.id, 10);
    moveElement();
  });
});

function counterUp() {
  counter++;
}

function counterDown() {
  counter--;
}

function moveElement() {
  if (counter < 0) {
    counter = 4;
    imgWrapper.style.marginLeft = "-100rem";
  } else if (counter == 0) {
    imgWrapper.style.marginLeft = "0rem";
  } else if (counter == 1) {
    imgWrapper.style.marginLeft = "-25rem";
  } else if (counter == 2) {
    imgWrapper.style.marginLeft = "-50rem";
  } else if (counter == 3) {
    imgWrapper.style.marginLeft = "-75rem";
  } else if (counter == 4) {
    imgWrapper.style.marginLeft = "-100rem";
  } else if (counter > 4) {
    counter = 0;
    imgWrapper.style.marginLeft = "0rem";
  }
  console.log(counter);
  moveRadioButton();
}

function moveRadioButton() {
  var radioBtn = document.querySelector('input[type="radio"][data-id="' + counter + '"]');
  if (radioBtn) {
    radioBtn.checked = true;
  }
}

