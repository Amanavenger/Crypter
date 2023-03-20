//Picking out getElementById
const btn = document.getElementById('Submit');
const btn2 = document.getElementById('Submit2');
const out = document.querySelector('.output');
const out2 = document.querySelector(".output2");


// Func for encryption
var caesarShift = function (plaintext, enteredKey) {
  ciphertext = "";
  var re = /[a-z]/;
  for (i = 0; i < plaintext.length; i++) {
    if (re.test(plaintext.charAt(i))) ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + enteredKey) % 26 + 97);
    else ciphertext += plaintext.charAt(i);
  }
  return ciphertext;
};




//Func for Decryption 
var caesarShift1 = function (ciphertext, enteredKey) {
  plaintext = ""; var re = /[a-z]/;
  for (i = 0; i < ciphertext.length; i++) {
    if (re.test(ciphertext.charAt(i))) plaintext += String.fromCharCode((ciphertext.charCodeAt(i) - 97 + 26 - enteredKey) % 26 + 97);
    else plaintext += ciphertext.charAt(i);
  }
  return plaintext;
};


//EventListener for encrypt button
btn.addEventListener('click', (e) => {
  e.preventDefault(); // disable the refresh on the page when submit
  const value = document.querySelector(".inpu1").value;
  const key = document.querySelector(".inp2").value;
  out.innerHTML = caesarShift(value, parseInt(key));
});


//EventListener for Decrypt button
btn2.addEventListener('click', (e) => {
  e.preventDefault(); // disable the refresh on the page when submit
  const value2 = document.getElementById('inp3').value;
  const key2 = document.querySelector(".inp4").value;
  out2.innerHTML = caesarShift1(value2, parseInt(key2));
});



