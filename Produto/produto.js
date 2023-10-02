window.onload = produto = async () => {
  var url = document.location.href,
    params = url.split("?")[1].split("&"),
    data = {},
    tmp;
  for (var i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split("=");
    data[tmp[0]] = tmp[1];
  }

  const image = document.getElementById("product-image");
  const name = document.getElementById("product-name");
  const price = document.getElementById("product-price-span");

  image.src = decodeURIComponent(data.img);
  name.innerText = decodeURI(data.name);
  price.innerText = decodeURIComponent(data.price);

  calcInstallments(price.textContent.replace(",", "."));

  // Slider

  const mostSoldData = await getData("../DB/mostSolds.json");
  var $mostContainer = document.querySelector("#moreProductsCarousel");

  $mostContainer.innerHTML = "";

  mostSoldData.mostSolds.map(function (e) {
    $mostContainer.innerHTML += `
      <button class="product-btn" onclick="redirectToProductPage('${e.name}',' ${e.price}', '${e.img}')">
        <li class="card">
          <div class="img"><img src="${e.img}" alt="img" draggable="false"></div>
          <h2>${e.name}</h2>
          <span>R$ ${e.price}</span>
        </li>
      </button>
      `;
  });
};

var cart = [];
const buyBtn = document.querySelector("#buy-btn");

async function getData(url) {
  const resposta = await fetch(url);
  const json = await resposta.json();
  console.log(json);
  return json;
}

const btnMoreLeft = document.querySelector("#MoreIleft");
const btnMoretRight = document.querySelector("#MoreIright");

btnMoreLeft.addEventListener("click", () => {
  const width = document.querySelector(".product-btn").offsetWidth;
  document.getElementById("moreProductsCarousel").scrollLeft -= width;
});

btnMoretRight.addEventListener("click", () => {
  const width = document.querySelector(".product-btn").offsetWidth;
  document.getElementById("moreProductsCarousel").scrollLeft += width;
});

function calcInstallments(price) {
  var installments = document.querySelector("#installments");
  var value = document.querySelector("#value");

  if (price < 20) {
    installments.textContent = "2";
    value.textContent = (price / 2).toFixed(2).replace(".", ",");
    console.log("foi");
  } else if (price < 100) {
    installments.textContent = "4";
    value.innerText = (price / 4).toFixed(2).replace(".", ",");
  } else {
    installments.textContent = "10";
    value.innerText = (price / 10).toFixed(2).replace(".", ",");
  }
}

function redirectToProductPage(name, price, img) {
  url =
    "../../Produto/index.html?name=" +
    encodeURI(name) +
    "&price=" +
    encodeURI(price) +
    "&img=" +
    encodeURIComponent(img);

  document.location.href = url;
}

function addToCart(img, name, price) {
  saveOnLocalStorage(img, name, price, "1");
}

function saveOnLocalStorage(img, name, price, qtd) {
  cart = getStorageData();

  let item = {
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

buyBtn.addEventListener("click", () => {
  let image = document.getElementById("product-image");
  let name = document.getElementById("product-name");
  let price = document.getElementById("product-price-span");
  let modal = document.querySelector("#buy-succes")

  addToCart(image.src, name.textContent, price.textContent);

  modal.style.display = "block"
  setTimeout(() =>{
    modal.style.display = "none"
  }, 3000)
});
