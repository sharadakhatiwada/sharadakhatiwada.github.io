//scope example
function b() {
  function a() {
    console.log(x);
  }
  let x = 10;
  a();
  console.log(x);
}
let x = 20;
b(); // 10
