"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    saveTweet: function(tweet, callback) {
      db.collection("tweets").insertOne(tweet, (err, res) => {
        if(err){
          console.log(res);
          return callback(err);
        }
        callback(null, res);
      });
    },

    // Get all tweets in `db`, sorted by newest first

    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err, res) => {
        if (err) {
          return callback(err);
        }
        callback(null, res);
      });
    }
    // getTweets: function(callback) {
    //   simulateDelay(() => {
    //     const sortNewestFirst = (a, b) => a.created_at - b.created_at;
    //     callback(null, db.tweets.sort(sortNewestFirst));
    //   });
    // }

  }
}
