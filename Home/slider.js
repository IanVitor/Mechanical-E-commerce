const btnMostLeft = document.querySelector('#MostIleft')
const btnMostRight = document.querySelector('#MostIright')

btnMostLeft.addEventListener("click", () =>{
  const width = document.querySelector('.product-btn').offsetWidth;
  document.getElementById('mostSoldsCarousel').scrollLeft -= width;
})

btnMostRight.addEventListener("click", () =>{
  const width = document.querySelector('.product-btn').offsetWidth;
  document.getElementById('mostSoldsCarousel').scrollLeft += width;
})

// Mechanicals Slider

const btnMecLeft = document.querySelector('#mechanicalILeft')
const btnMecRight = document.querySelector('#mechanicalIRight')

btnMecLeft.addEventListener("click", () =>{
  const width = document.querySelector('.product-btn').offsetWidth;
  document.getElementById('mechanicalsCarousel').scrollLeft -= width;
})

btnMecRight.addEventListener("click", () =>{
  const width = document.querySelector('.product-btn').offsetWidth;
  document.getElementById('mechanicalsCarousel').scrollLeft += width;
})

// Acessories Slider

const btnAcessLeft = document.querySelector('#AcessoriesILeft')
const btnAcessRight = document.querySelector('#AcessoriesIRight')

btnAcessLeft.addEventListener("click", () =>{
  const width = document.querySelector('.product-btn').offsetWidth;
  document.getElementById('acessoriesCarousel').scrollLeft -= width;
})

btnAcessRight.addEventListener("click", () =>{
  const width = document.querySelector('.product-btn').offsetWidth;
  document.getElementById('acessoriesCarousel').scrollLeft += width;
})