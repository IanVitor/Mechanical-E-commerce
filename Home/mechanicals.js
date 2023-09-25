const wrapper = document.querySelector(".mechanicalsWrapper");
const carousel = document.querySelector("#mechanicalsCarousel");
const firstCardWidth = carousel.querySelector("#mechanicalCard").offsetWidth;
const leftBtn = document.querySelector("#mechanicalILeft");
const rightBtn = document.querySelector("#mechanicalIRight");

leftBtn.addEventListener("click", () =>{
  carousel.scrollLeft += -firstCardWidth
})

rightBtn.addEventListener("click", () =>{
  carousel.scrollLeft += firstCardWidth
})