function renderTweets(tw){
  console.log($(".tweet footer .tweet-date").val());
  $("#all-tweets").empty();
  tw.forEach(function(t){
    // if()
    $tweetEl = createTweetElement(t);
    // $('#all-tweets').append($tweetEl);
    $lasTweet = $("article").first();
    $($tweetEl).insertBefore($lasTweet);
  });
}
