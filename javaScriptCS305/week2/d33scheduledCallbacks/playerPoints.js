"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
// module.exports = { findTotalScores, findTotalPlayerPoints }; //add all of your function names here that you need for the node mocha tests

/*Be sure to use meaningful variable names and write JSdoc comments for findTotalScores and any helper functions such as findTotalPlayerPoints.
Try to use map and reduce in your functions as appropriate. */

function findTotalScores(teamStatisticsArr) {
  const arrayOfPlayer = [];
  for (let eachPlayer of teamStatisticsArr) {
    let ScoreOfAPlayer = findTotalPlayerPoints(eachPlayer);
    let playerObj = { jersey: eachPlayer.jersey, total: ScoreOfAPlayer };
    arrayOfPlayer.push(playerObj);
  }
  return arrayOfPlayer;
}

function findTotalPlayerPoints(player) {
  let totalScore = 0;
  for (let score of player.stats) {
    totalScore = totalScore + score.points;
  }

  return totalScore;
}
