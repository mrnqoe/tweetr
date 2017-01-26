function goodTweet(tweet){
  if(tweet === null){
    console.log("empty tweet");
    return "No Emptweets";
  }else if(tweet.length > 140){
    console.log("full tweet");
    return "No tweeeeeeeps please";
  }else{
    console.log();
    return 0;
  }
}
