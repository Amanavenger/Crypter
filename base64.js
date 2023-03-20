var encryptBtn = $("#Submit");
var decryptBtn = $("#Submit2");

$(document).ready(function(){

  encryptBtn.on("click", function(event){
    event.preventDefault()
    var plainMsg = $("#inp1");
    var keyword = $(".inp2");

    if(plainMsg.val() == "" || keyword.val() == "" ){
      alert("Please type both secret message and keyword!");
    }else{
      var outp = $("#output");
      outp.val(btoa(plainMsg.val()));
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
      outp.val(atob(plainMsg.val()));
    }
  });

});
