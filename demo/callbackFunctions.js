function myCallBack(func, arg) {
  function cube(number) {
    number = number * number * number;
    return number;
  }
  function isEven(number) {
    if (number % 2 === 0) return true;
    else false;
  }
}
console.log(myCallBack(cube, 10));
