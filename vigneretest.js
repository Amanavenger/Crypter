//   /**
//  * Created by boyoung on 3/10/16.
//  */

// // steps
// // ci = (pi + kj) % 26
// // Ger user input with plain text, keyword
// // mapping each letter from plain text with integer (A-Z, a-z, 0-26) - use ASCII code
// // ASCII Code reference: A-Z (65-90), a-z (97-122)
// // mapping each letter from keyword text with integer - use ASCII code
// // preserve the case of each letter
// // preserve non-alphabetical characters from input.

var encryptBtn = $("#Submit");
var decryptBtn = $("#Submit2");

// function isUpperCase(letter){
//   var l = letter.charCodeAt();
//   if(l >= 65 && l <= 90){
//     return true;
//   }else{
//     return false;
//   }
// };

// function isLowerCase(letter){
//   var l = letter.charCodeAt();
//   if(l >= 97 && l <= 122){
//     return true;
//   }else{
//     return false;
//   }
// };

// var encrypt = function(plainMsg, key){
//   var cypher = "";
//   for(var i = 0, j = 0; i < plainMsg.length; i++){
//     var currentLetter = plainMsg[i];

//     if(isUpperCase(currentLetter)){
//       var upperLetter = ((currentLetter.charCodeAt() - 65) + (key[j%key.length].toUpperCase().charCodeAt() - 65)) % 26;
//       cypher += String.fromCharCode(upperLetter+65);
//       j++;
//     }else if(isLowerCase(currentLetter)){
//       var lowerLetter = ((currentLetter.charCodeAt() - 97) + (key[j%key.length].toLowerCase().charCodeAt() - 97)) % 26;
//       cypher += String.fromCharCode(lowerLetter+97);
//       j++;
//     }else{
//       cypher += currentLetter;
//     }
//   }
//   return cypher;
// };



function insert(array, index, item) {
    return array.splice(index, 0, item);
}

function CharCode(c) {
    //Transforma o código ASCII do caracter em código do alfabeto (0~25)
    let code = c.charCodeAt(0) - 65;
    if (code >= 0 && code < 26) { //ignora caractéres diferentes de letras maiúsculas
        return code;
    } else {
        return '';
    }
}
function Decode (c) {
    //Transforma o código alfabético (0~25) em código ASCII
    return String.fromCharCode(c + 65);
}

function Encrypt (text, key, decrypt = false) {
    text = text.split(''); //cria um array com o texto para procurar espaços
    let spaces = text.map((t, index) => {
        if (t == ' ') { return index }
    }).filter((t, index) => {
        if (t) { return t }
    }); //mapeia e constroi um novo array com o número e a posição de espaços

    let UpperAndLower = text.map((t, i) => {
        return t.charCodeAt(0) <= 90 ? true : false; //  MAIUSCULAS / minusculas
    })

    text = text.join(''); //recupera o texto original
    text = text.replace(/\s/g, ''); //remove os espaços
    text = text.toUpperCase();
    key = key.toUpperCase();

    let c, t, k;    //codigo (0~25) correspondente a criptografado / texto / key
    let kp = 0; //caracter da key
    let CODE = '';

    for (var i = 0; i < text.length; i++) {

        if (kp >= key.length) { kp = 0; }   //para repetir a key no texto

        t = CharCode(text[i]);
        k = CharCode(key[kp]);

        if (decrypt === true) {  //se for para descriptografar
            c = ((t - k) + 26) % 26;
        } else {
            c = (t + k) % 26;
        }
        CODE += Decode(c);
        kp++;
    }
    CODE = CODE.split('');
    spaces.forEach(s => {
        insert(CODE, s, ' '); //insere espaços nos pontos marcados
    });
    CODE = CODE.map((t, i) => {
        return UpperAndLower[i] == false ? t.toLowerCase() : t.toUpperCase(); //converte para maiusculas e minusculas
    })
    CODE = CODE.join('');
    return CODE;
}



$(document).ready(function(){

  encryptBtn.on("click", function(event){
    event.preventDefault()
    var plainMsg = $("#inp1");
    var keyword = $(".inp2");

    if(plainMsg.val() == "" || keyword.val() == "" ){
      alert("Please type both secret message and keyword!");
    }else{
      var outp = $("#output");
      outp.val(Encrypt(plainMsg.val(), keyword.val()));
    }
  });

  decryptBtn.on("click", function(event){
     event.preventDefault() 
    var plainMsg = $("#inp3");
    var keyword = $(".inp4");

    if(plainMsg.val() == "" || keyword.val() == "" ){
      alert("Please type both secret message and keyword!");
    }else{
      var outp = $(".output2");
      outp.val(Encrypt(plainMsg.val(), keyword.val(),true));
    }
  });

});
