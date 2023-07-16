// select DOM elements
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const textContent = document.querySelector('.text-content');

// There is any text at the end of active
const textEnd =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aliquid cumque esse.';

// Counter for active circles
let currentActive = 1;

// Buttons - prev / next
next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

// Logical: one function - one action
const circleUpdate = function (circles) {
  circles.forEach((circle, indx) => {
    if (indx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
};

const progressWidthView = function () {
  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
};

const btnDisabledClass = function () {
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};

const fillCircle = function () {
  circles[circles.length - 1].classList.remove('fill');
  circles[0].classList.remove('fill');
  textContent.hidden = true;
  textContent.textContent = textEnd;
  if (currentActive === circles.length) {
    circles[circles.length - 1].classList.add('fill');
    circles[0].classList.add('fill');
    textContent.hidden = false;
  }
};

// Run all functions
const update = function () {
  circleUpdate(circles);
  progressWidthView();
  btnDisabledClass();
  fillCircle();
};
