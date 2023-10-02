var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const $shipping = document.querySelector('.shipping span')

function getNewDate(){
  let date = new Date()
  let dayLimit = 30 - date.getDate()
  let randomDay = Math.floor(Math.random() * dayLimit)

  $shipping.textContent = `${randomDay}/10/2023`
}

function cleanLocalStorage(){
  let Items = []

  localStorage.cartItems = JSON.stringify(Items)
}

function loadTotalValue() {
  cart = getStorageData();
  let aux = 0
  let total = document.querySelector(`.total-container span`)

  cart.map(function (e) {
    aux += parseFloat(e.price.replace(",","."))
  });
  aux += 12.60
  total.textContent = `R$ ` + aux.toFixed(2)
}

function getStorageData() {
  if (localStorage.cartItems) {
    cart = JSON.parse(localStorage.getItem("cartItems"));
  }
  return cart;
}

function finishPayment(){
  let modal = document.querySelector("#buy-succes")
  cleanLocalStorage()

  modal.style.display = "block"
  setTimeout(() =>{
    modal.style.display = "none"
    location.href = "../Home/index.html";
  }, 3000)

}

window.addEventListener('load', () =>{
  getNewDate()
  loadTotalValue()
})