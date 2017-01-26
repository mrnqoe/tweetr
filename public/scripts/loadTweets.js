function loadTweets(cb){
  $.ajax({
    url: '/tweets',
    method: 'GET',
    success: cb
      // console.log(tweets);
      // cb(tweets);
      // return tweets;
    // }
  });
}

// function loadTweets(cb){
//   $.ajax({
//     url: '/tweets',
//     method: 'GET',
//     success: function(tweets){
//       console.log(tweets);
//       cb(tweets);
//       // return tweets;
//     }
//   });
// }
