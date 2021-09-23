const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".navbar-li");
const choiceBtn1 = document.querySelector(".choice-btn-1");
const choiceBtn2 = document.querySelector(".choice-btn-2");


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
});


choiceBtn1.addEventListener("click", () => {
    location.href ='./alcoholic.html'
})

choiceBtn2.addEventListener("click", () => {
  location.href ='./nonAlcoholic.html'
})