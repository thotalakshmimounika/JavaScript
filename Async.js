// //Async function setTimeout
function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
  }

  function findSumTill100() {
    x =findSum(100);
    console.log(x);
  }

  setTimeout(findSumTill100, 1000)
  console.log("hello world");

//Async function fs.readFile
const fs = require('fs');

fs.readFile("a.txt", "utf-8", function(err, data) {
  console.log(data);
console.log("hello world");
});