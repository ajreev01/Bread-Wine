
function revealMessage() {
  var message = document.getElementById("hiddenMessage");
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}
