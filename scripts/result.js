const $result = document.querySelector("#result-container");

const createSearchElements = async () => {
  const mostSoldData = await getData("../DB/mostSolds.json");
  const mechanicalsData = await getData("../DB/mechanicalParts.json");
  const acessoriesData = await getData("../DB/acessories.json");
  let aux = 0;

  mostSoldData.mostSolds.map(function (e) {
    $result.innerHTML += `
    <div class="result" id="result${aux}">
      <button class="product-btn" onclick="redirectToProductPage('${e.name}','${e.price}', '${e.img}')">
      <img src="${e.img}" alt="search item">
        <h4>${e.name}</h4>
        <span>R$ ${e.price}</span>
      </button>
    </div>
    `;
    aux++;
  });
  // Mechanical Parts
  mechanicalsData.mechanicalParts.map(function (e) {
    $result.innerHTML += `
    <div class="result" id="result${aux}">
      <button class="product-btn" onclick="redirectToProductPage('${e.name}','${e.price}', '${e.img}')">
      <img src="${e.img}" alt="search item">
        <h4>${e.name}</h4>
        <span>R$ ${e.price}</span>
      </button>
    </div>
  `;
    aux++;
  });
  // Acessories
  acessoriesData.acessories.map(function (e) {
    $result.innerHTML += `
    <div class="result" id="result${aux}">
      <button class="product-btn" onclick="redirectToProductPage('${e.name}','${e.price}', '${e.img}')">
      <img src="${e.img}" alt="search item">
        <h4>${e.name}</h4>
        <span>R$ ${e.price}</span>
      </button>
    </div>
    `;
    aux++;
  });
};

var result = document.getElementById('result-container')
var searchInput = document.getElementById('search-input')

searchInput.addEventListener("keyup", (event) =>{
  if(event.target.value == "")
  {
    result.style.display = "none"
  }
  else{
    result.style.display = "block"
  }
})

window.onclick = function(){
  result.style.display = "none"
}

async function getData(url) {
  const resposta = await fetch(url);
  const json = await resposta.json();
  return json;
}

window.addEventListener("load", createSearchElements())