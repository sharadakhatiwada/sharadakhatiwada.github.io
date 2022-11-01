/* write a function, maxPoints, to find and return the maximum points of any single player.  Do it 

first with a for .. of loop and then using reduce */

function maxPoints(players) {
  let maxSum = 0;

  for (let player of players) {
    let sum = player.points.reduce((accum, item) => {
      accum = accum + item;

      return accum;
    });

    if (maxSum < sum) {
      maxSum = sum;
    }
  }

  return maxSum;
}
const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];

console.log("expect 4:", maxPoints(players));
