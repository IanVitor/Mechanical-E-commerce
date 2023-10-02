function redirectToProductPage(name, price, img) {
  url =
    "../../Produto/index.html?name=" +
    encodeURI(name) + "&price=" + encodeURI(price) + "&img=" + encodeURIComponent(img);

  document.location.href = url;
}

// Load products

async function getData(url) {
  const resposta = await fetch(url);
  const json = await resposta.json();
  return json;
}

const createElements= async () => {
  const mostSoldData = await getData('../DB/mostSolds.json');
  const mechanicalsData = await getData('../DB/mechanicalParts.json');
  const acessoriesData = await getData('../DB/acessories.json');
  var $mostContainer = document.querySelector("#mostSoldsCarousel")
  var $mecContainer = document.querySelector("#mechanicalsCarousel")
  var $acessContainer = document.querySelector("#acessoriesCarousel")

  $mostContainer.innerHTML=''

  mostSoldData.mostSolds.map(function(e){
    $mostContainer.innerHTML += 
    `
    <button class="product-btn" onclick="redirectToProductPage('${e.name}',' ${e.price}', '${e.img}')">
      <li class="card">
        <div class="img"><img src="${e.img}" alt="img" draggable="false"></div>
        <h2>${e.name}</h2>
        <span>R$ ${e.price}</span>
      </li>
    </button>
    `
  });
  // Mechanical Parts
  mechanicalsData.mechanicalParts.map(function(e){
    $mecContainer.innerHTML += 
    `
    <button class="product-btn" onclick="redirectToProductPage('${e.name}',' ${e.price}', '${e.img}')">
      <li class="card">
        <div class="img"><img src="${e.img}" alt="img" draggable="false"></div>
        <h2>${e.name}</h2>
        <span>R$ ${e.price}</span>
      </li>
    </button>
    `
  });
  // Acessories
  acessoriesData.acessories.map(function(e){
    $acessContainer.innerHTML += 
    `
    <button class="product-btn" onclick="redirectToProductPage('${e.name}',' ${e.price}', '${e.img}')">
      <li class="card">
        <div class="img"><img src="${e.img}" alt="img" draggable="false"></div>
        <h2>${e.name}</h2>
        <span>R$ ${e.price}</span>
      </li>
    </button>
    `
  });
}

window.addEventListener("load", () =>{
  createElements()
})