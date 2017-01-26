$(document).ready(function() {
  var twChar = 140;
  $('.new-tweet form textarea').on('keyup', function(e) {
    var inputLength = twChar - this.value.length;
    $('.new-tweet .counter').text(inputLength);
    if(inputLength<0) {
      $('.new-tweet .counter').css("color","red");
    }else{
      $('.new-tweet .counter').css("color","black");
    }
  });
});
