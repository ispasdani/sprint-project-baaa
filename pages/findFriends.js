const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const rejectBtn = document.querySelector(".reject-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;
let counter = 0;


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".navbar-li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
});





//image slider next button
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });
  
    slideNumber++;
  
    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }
  
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");

});

//image slider previous button
prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });
  
    slideNumber--;
  
    if(slideNumber < 0){
      slideNumber = numberOfSlides - 1;
    }
  
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");

  });

//image slider reject button
rejectBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });
  
    slideNumber--;
  
    if(slideNumber < 0){
      slideNumber = numberOfSlides - 1;
    }
  
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  });

  nextBtn.addEventListener("click", () => {
    counter++;

    if(counter == 3) {
      location.href='matchFriend.html'
    }
  })