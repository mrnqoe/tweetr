function createTweetElement(tweetObj){
  $tweet = $("<article>", {"class": "tweet", "style": "opacity: 0.7;"});

// HEADER
  $tweetHeader = $("<header>");
  $ava = $("<img>", {
    "src": tweetObj.user.avatars.small,
    "alt": "ava"});
  $usrFullname = $("<h3>",{"class":"usrFullname", "text": tweetObj.user.name});
  $usrname = $("<h5>",{"class":"usrname", "text": tweetObj.user.handle});

  // TWEET-TEXT
  $tweetText = $("<p>", {"class":"tweetText", "text": tweetObj.content.text});

  // FOOTER
  $tweetFooter = $("<footer>");
  $tweetDate = $("<h6>", {"class":"tweet-date", "text": tweetObj.created_at});
  $icons = $("<div>", {"class": "icons"}).append(
    "<i class='material-icons'>favorite_border</i>",
    "<i class='material-icons'>sentiment_very_dissatisfied</i>",
    "<i class='material-icons'>share</i>");

  // NEW TWEET ARTICLE
  $tweet.append($tweetHeader);
  $tweetHeader.append($ava, $usrFullname, $usrname);
  $tweet.append($tweetText);
  $tweet.append($tweetFooter);
  $tweetFooter.append($tweetDate, $icons);
  $("#all-tweets").append($tweet);

  return $tweet;
}
