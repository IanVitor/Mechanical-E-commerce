var userModal = document.getElementById("user-modal");

var userBtn = document.getElementById("user-btn");

userBtn.onclick = function() {
  if(userModal.style.display == "block"){
    userModal.style.display = "none";
  } else{
    userModal.style.display = "block";
  }
}