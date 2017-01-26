$(document).ready(function() {
  // console.log("fine");
  $('#all-tweets').on('mouseover', 'article', function() {
    // debugger;
    $(this).css("opacity",1);
  }).on('mouseleave', 'article', function(){
    $(this).css("opacity",0.7)
  });
});
