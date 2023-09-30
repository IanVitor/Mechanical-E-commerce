const btnMostLeft = document.querySelector('#MostIleft')
const btnMostRight = document.querySelector('#MostIright')

btnMostLeft.addEventListener("click", () =>{
  var width = document.getElementById('mostSoldsCarousel').offsetWidth / 5;
  document.getElementById('mostSoldsCarousel').scrollLeft -= width;
})

btnMostRight.addEventListener("click", () =>{
  var width = document.getElementById('mostSoldsCarousel').offsetWidth / 5;
  document.getElementById('mostSoldsCarousel').scrollLeft += width
})

// Mechanicals Slider

const btnMecLeft = document.querySelector('#mechanicalILeft')
const btnMecRight = document.querySelector('#mechanicalIRight')

btnMecLeft.addEventListener("click", () =>{
  var width = document.getElementById('mechanicalsCarousel').offsetWidth / 5;
  document.getElementById('mechanicalsCarousel').scrollLeft -= width;
})

btnMecRight.addEventListener("click", () =>{
  var width = document.getElementById('mechanicalsCarousel').offsetWidth / 5;
  document.getElementById('mechanicalsCarousel').scrollLeft += width;
})

// Acessories Slider

const btnAcessLeft = document.querySelector('#AcessoriesILeft')
const btnAcessRight = document.querySelector('#AcessoriesIRight')

btnAcessLeft.addEventListener("click", () =>{
  var width = document.getElementById('acessoriesCarousel').offsetWidth / 5;
  document.getElementById('acessoriesCarousel').scrollLeft -= width;
})

btnAcessRight.addEventListener("click", () =>{
  var width = document.getElementById('acessoriesCarousel').offsetWidth / 5;
  document.getElementById('acessoriesCarousel').scrollLeft += width;
})