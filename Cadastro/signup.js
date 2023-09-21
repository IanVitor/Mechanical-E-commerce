const form = document.getElementById("signup-form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  Redirect()
})

function Redirect() {
  location.href = "../Home/index.html";
}