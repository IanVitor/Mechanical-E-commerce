const form = document.getElementById("login-form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  Redirect()
})

function Redirect() {
  location.href = "../Home/index.html";
}


/*
  const $form = document.querySelector("#login-form");
function login(){
  const $username = document.querySelector("#usuario");
  console.log($username.value)
}

$form.addEventListener("submit", (e)=>{
  e.preventDefault()
  login();
});


*/