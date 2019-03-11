$(document).ready(function(){

/*! Fades in page on load */
$('#contact').css('display', 'none');
$('#contact').fadeIn("3000");
});

function revealMessage() {
  var message = document.getElementById("hiddenMessage");
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}

$("button").click(function() {
    $('html,body').animate({
        scrollTop: $("#hiddenMessage").offset().top},
        'slow');
});
