const $cartList = document.querySelector("#items-list");
const $itemsValueSum = document.querySelector("#products-value");
const $shippingValue = document.querySelector("#shipping-value span");
const $moreBtn = document.querySelector("#qtd-more");
const $minusBtn = document.querySelector("#qtd-minus");
const $qtdInput = document.querySelector("#qtd-input");

var cart = [];

// Carregar items do carrinho

function loadCartItems() {
  cart = getStorageData();

  $cartList.innerHTML = ""

  if (cart == "") {
    $cartList.innerHTML = `
    <div id="item">
      <h2>Seu carrinho está vazio</h2>
    </div>
    `;
  } else {
    cart.map(function (e) {
      $cartList.innerHTML += `
    <div id="item" value="${e.id}">
      <img id="item-img" src="${e.img}" alt="item image">
      <h3 id="item-name">${e.name}</h3>
      <div id="item-qtd">
        <button id="qtd-minus" value="${e.id}" onclick="changeItemDown(value)">-</button>
        <input id="qtd-input" type="text" value="${e.qtd}">
        <button id="qtd-more" value="${e.id}" onclick="changeItemUp(value)">+</button>
      </div>
      <p id="item-price">R$ ${e.price}</p>
    </div>
    `;
    });
  }
}

function getRandomId() {
  let id = (Math.random() * 99999999).toFixed(0);

  return id;
}

function saveOnLocalStorage(img, name, price, qtd) {
  cart = getStorageData();
  let id = getRandomId();

  let item = {
    id: id,
    img: img,
    name: name,
    price: price,
    qtd: qtd,
  };

  cart.push(item);

  localStorage.cartItems = JSON.stringify(cart);
}

function getStorageData() {
  if (localStorage.cartItems) {
    cart = JSON.parse(localStorage.getItem("cartItems"));
  }
  return cart;
}

function totalValueSum() {
  cart = getStorageData();
  let aux = 0;
  $shippingValue.textContent = "12.60";

  cart.map(function (e) {
    aux += parseFloat(e.price.replace(",", ".")) * e.qtd;
  });

  $itemsValueSum.textContent = "R$ " + aux.toFixed(2);

  document.querySelector("#summary-value").textContent =
    "R$ " + (parseFloat($shippingValue.textContent) + aux).toFixed(2);
}

// Aumentar QTD de itens no cart

function changeItemUp(value) {
  let input = document.querySelectorAll("#qtd-input");
  let itemAmount = document.querySelectorAll("#item");

  for (let i = 0; i < itemAmount.length; i++) {
    if (itemAmount[i].getAttribute("value") === value) {
      input[i].setAttribute("value", parseInt(input[i].value) + 1);
      updateItemQtd(
        itemAmount[i].getAttribute("value"),
        parseInt(input[i].value)
      );
    }
  }
}

// Retirar item do cart

function changeItemDown(value) {
  let input = document.querySelectorAll("#qtd-input");
  let itemAmount = document.querySelectorAll("#item");

  for (let i = 0; i < itemAmount.length; i++) {
    if (itemAmount[i].getAttribute("value") === value) {
      if (input[i].getAttribute("value") <= 1) {
        removeItemFromCart(itemAmount[i].getAttribute("value"));
      } else {
        input[i].setAttribute("value", parseInt(input[i].value) - 1);
        updateItemQtd(
          itemAmount[i].getAttribute("value"),
          parseInt(input[i].value)
        );
      }
    }
  }
}

function removeItemFromCart(id) {
  let cart = getStorageData();

  let itemAmount = document.querySelectorAll("#item");

  for (let i = 0; i < itemAmount.length; i++) {
    if (itemAmount[i].getAttribute("value") === id) {
      cart.splice(i, 1);
      itemAmount[i].parentNode.removeChild(itemAmount[i]);
    }
  }

  loadCartItems()
  localStorage.cartItems = JSON.stringify(cart);
}

function updateItemQtd(id, qtd) {
  let cart = getStorageData();

  cart.map(function (e) {
    if (e.id === id) {
      e.qtd = qtd;
    }
  });
  localStorage.cartItems = JSON.stringify(cart);
}

window.addEventListener("load", () => {
  loadCartItems();
  totalValueSum();
});
