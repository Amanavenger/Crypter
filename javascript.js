document.querySelector(".dobutton").addEventListener("click", function() {   
  var elmnt = document.querySelector(".feat");
  elmnt.scrollIntoView({behavior: 'smooth'});
});


document.querySelector(".explore").addEventListener("click", function() {
  window.location.assign("explore.html",);
});


document.querySelector(".encb").addEventListener("click", function(){   
  window.location.assign("encrypt.html");
//  open(
//    "encrypt.html");
});

document.querySelector(".decb").addEventListener("click", function() {
  window.location.assign("encrypt.html",);
});