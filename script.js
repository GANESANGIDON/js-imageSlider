// JavaScript image slider

// Images array
const images = [
  "./images/cat.jpeg",
  "./images/tiger.jpeg",
  "./images/angrybird.jpeg",
  "./images/rajasthan.jpeg",
  "./images/sonic.jpg",
  "./images/goli.jpeg",
  "./images/windows11.jpg",
];

// variables declaration
let slideImg = document.querySelector(".slider");
let leftBtn = document.querySelector("#prev");
let rightBtn = document.querySelector("#next");
let i = 0;
// default image source
slideImg.src = images[i];

// left slide button
// using traditional  ES5 function
leftBtn.addEventListener("click", function () {
  // if slide reaches the first image source
  if (i === 0) {
    i = images.length - 1;
  } else {
    i--;
  }
  slideImg.src = images[i];
});

// right slide button
// using ES6 arrow function
rightBtn.addEventListener("click", () => {
  // if slide reaches the last image source
  if (i === images.length - 1) {
    i = 0;
  } else {
    i++;
  }
  slideImg.src = images[i];
});
