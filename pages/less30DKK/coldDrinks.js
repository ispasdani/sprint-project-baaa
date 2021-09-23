const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".navbar-li");
const choiceBtn1 = document.querySelector(".choice-btn-1");
const choiceBtn2 = document.querySelector(".choice-btn-2");
const choiceBtn3 = document.querySelector(".choice-btn-3");
const choiceBtn4 = document.querySelector(".choice-btn-4");


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
});


choiceBtn1.addEventListener("click", () => {
    location.href ='https://aarhusstreetfood.com/en/rynkeby-appelsinjuice.html'
})

choiceBtn2.addEventListener("click", () => {
    location.href ='./noBudget.html'
})

choiceBtn3.addEventListener("click", () => {
    location.href ='https://aarhusstreetfood.com/en/coca-cola-zero.html'
})

choiceBtn4.addEventListener("click", () => {
    location.href ='https://aarhusstreetfood.com/en/kildevaeld-4.html'
})