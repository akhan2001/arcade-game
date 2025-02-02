/* global bootstrap */

document.addEventListener('DOMContentLoaded', function () {
  const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
  document.getElementById('showModalButton').addEventListener('click', function () {
    myModal.show()
  })
  document.getElementById('cancel').addEventListener('click', function () {
    myModal.hide()
  })
  document.getElementById('login').addEventListener('click', function () {
    var username = document.getElementById("username").value;
    let secretMessage = document.getElementById("secretMessage");
    if(username === "InSertACoin") {
      secretMessage.style.display = "inline";
    } else {
      sessionStorage.setItem('username', username);
      myModal.hide();
    }
  });
  
})
