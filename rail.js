var encryptBtn = $("#Submit");
var decryptBtn = $("#Submit2");

function Encrypt(plaintext, key) {
  plaintext = plaintext.toLowerCase().replace(/[^a-z]/g, "");    
  if(plaintext.length < 1){ alert("please enter some plaintext"); return; }    
  key = parseInt(key);
  if(key > Math.floor(2*(plaintext.length-1))){ alert("key is too large for the plaintext length."); return; }  
  ciphertext = "";
  for(line=0; line<key-1; line++){
     skip=2*(key-line-1);   j=0;
      for(i=line; i<plaintext.length;){
          ciphertext += plaintext.charAt(i);
          if((line==0) || (j%2 == 0)) i+=skip;
         else i+=2*(key-1) - skip;  
         j++;          
      }
  }
  for(i=line; i<plaintext.length; i+=2*(key-1)) ciphertext += plaintext.charAt(i);
  return ciphertext;
}

function Decrypt(ciphertext,key) {
  ciphertext = ciphertext.toLowerCase().replace(/[^a-z]/g, "");  
  if(ciphertext.length < 1){ alert("please enter some ciphertext (letters only)"); return; }    
  key = parseInt(key);
  if(key > Math.floor(2*(ciphertext.length-1))){ alert("please enter 1 - 22."); return; }      
  pt = new Array(ciphertext.length);   k=0;
  for(line=0; line<key-1; line++){
     skip=2*(key-line-1);  j=0;
      for(i=line; i<ciphertext.length;){
          pt[i] = ciphertext.charAt(k++);
          if((line==0) || (j%2 == 0)) i+=skip;
         else i+=2*(key-1) - skip;  
         j++;        
      }
  }
  for(i=line; i<ciphertext.length; i+=2*(key-1)) pt[i] = ciphertext.charAt(k++);
  return pt.join("");
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
      outp.val(Decrypt(plainMsg.val(), keyword.val()));
    }
  });

});
