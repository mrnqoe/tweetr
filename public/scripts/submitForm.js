function submitForm(){
  $usrinput = $("textarea").val();
  if(!$usrinput){
    alert("empty tweet");
    // return 0;
  }else if($usrinput.length > 140){
    alert("too long");
    // return 0;
  }else{
    $tweet = $("textarea").serialize();
    $.ajax({
      url: '/tweets',
      data: $tweet,
      method: 'POST',
      success: function(){
        $("textarea").val("");
        loadTweets(renderTweets);
      }
    });
  }
}
