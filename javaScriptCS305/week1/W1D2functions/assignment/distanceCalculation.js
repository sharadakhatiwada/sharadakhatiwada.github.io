// 6. Write a function that takes x and y co-ordinates of two points as inputs and returns the distance
// between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
// console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));
/**
 *
 * @param { x co-ordinate of first point} x
 * @param {y co-ordinate of first point} y
 * @param { x co-ordinate of second point} x2
 * @param {y co-ordinate of second point} y2
 * @returns total distance between two points
 */
function calcDistance(x, y, x2, y2) {
  let distance = Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
  return Number(distance.toFixed(2));
}
console.log("expect 7.07 : ", calcDistance(0, 0, 5, 5));

exports.calcDistance = calcDistance;
