const leftArrow = document.getElementById('arrow-left');
const RightArrow = document.getElementById('arrow-right');
const imgWrapper = document.querySelector('.img-wrapper');

leftArrow.addEventListener('click', moveElementsLeft);
RightArrow.addEventListener('click', moveElementsRight);
let counter = 0;


// -4 -3 -2 -1 0 1 2 3 4
// -25 -50 -75 -100 0 -25 -50 -75 -100


function moveElementsLeft() {
  counter++;
  if (counter == -1) {
    imgWrapper.style.marginLeft = '-100rem';
} else if (counter == -2) {
    imgWrapper.style.marginLeft = '-75rem';
} else if (counter == -3) {
    imgWrapper.style.marginLeft = '-50rem';
} else if (counter == -4) {
    imgWrapper.style.marginLeft = '-25rem';
} else if (counter < -4) {
    imgWrapper.style.marginLeft = '0rem';
    counter = 0;
}   else if (counter == 0) {
    imgWrapper.style.marginLeft = '0rem';
}
  else if (counter == 1) {
    imgWrapper.style.marginLeft = '-25rem';
  } else if (counter == 2) {
    imgWrapper.style.marginLeft = '-50rem';
  } else if (counter == 3) {
    imgWrapper.style.marginLeft = '-75rem';

  } else if (counter == 4) {
    imgWrapper.style.marginLeft = '-100rem';

  } else if (counter > 4) {
    counter = 0;
    imgWrapper.style.marginLeft = '0rem';
}
}

function moveElementsRight() {
    counter--;

    if (counter == -1) {
        imgWrapper.style.marginLeft = '-100rem';
    } else if (counter == -2) {
        imgWrapper.style.marginLeft = '-75rem';
    } else if (counter == -3) {
        imgWrapper.style.marginLeft = '-50rem';
    } else if (counter == -4) {
        imgWrapper.style.marginLeft = '-25rem';
    } else if (counter < -4) {
        imgWrapper.style.marginLeft = '0rem';
        counter = 0;
    }   else if (counter == 0) {
        imgWrapper.style.marginLeft = '0rem';
    }
      else if (counter == 1) {
        imgWrapper.style.marginLeft = '-25rem';
      } else if (counter == 2) {
        imgWrapper.style.marginLeft = '-50rem';
      } else if (counter == 3) {
        imgWrapper.style.marginLeft = '-75rem';
    
      } else if (counter == 4) {
        imgWrapper.style.marginLeft = '-100rem';
    
      } else if (counter > 4) {
        counter = 0;
        imgWrapper.style.marginLeft = '0rem';
    }
  }