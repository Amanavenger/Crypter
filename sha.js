var encryptBtn = $("#Submit");
var decryptBtn = $("#Submit2");


//CDN from some random clodflare CDN  

$(document).ready(function(){

  encryptBtn.on("click", function(event){
    event.preventDefault()
    var plainMsg = $("#inp1");
    var keyword = $(".inp2");

    if(plainMsg.val() == "" || keyword.val() == "" ){
      alert("Please type both secret message and keyword!");
    }else{
      var outp = $("#output");
      let hey = sha512(plainMsg.val())
      console.log("hey");
      outp.val(hey);
    }
  });

//   decryptBtn.on("click", function(event){
//      event.preventDefault() 
//     var plainMsg = $("#inp3");
//     var keyword = $(".inp4");

//     if(plainMsg.val() == "" || keyword.val() == "" ){
//       alert("Please type both secret message and keyword!");
//     }else{
//       var outp = $(".output2");
//       outp.val(Decrypt(plainMsg.val(), keyword.val()));
//     }
//   });

});