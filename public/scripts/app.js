$(function(){
  loadTweets(renderTweets);

  $("#submitTweet").on("click",function(e){
    e.preventDefault();
    submitForm();
  });

  $(".new-tweet").css("display","none");

  $('#all-tweets').on('mouseover', 'article', function() {
    $(this).css("opacity",1);
  }).on('mouseleave', 'article', function(){
    $(this).css("opacity",0.7)
  });

  $('.togglePost').on('click', function() {
    $(".new-tweet").toggle(500,"swing",function(){
      if($(".new-tweet").is(':visible')){
        $("textarea").focus();
        $("textarea").keydown(function(e) {
          if(e.keyCode === 13){
            e.preventDefault();
            submitForm();
          }
        });
        $('.togglePost').css("opacity",1);
        $('.togglePost').css("color","black");
      }
    });
  });
});
