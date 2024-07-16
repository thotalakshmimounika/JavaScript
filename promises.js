const fs = require('fs');

// my own asynchronous function
function MounikaReadFile() {
  return new Promise(function(resolve) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

MounikaReadFile().then(onDone);
// It is just a wrapper on top of another async function,
// which is fine.
// Usually all async functions you will write will be on top of
// JS provided async functions like setTimeout or fs.readFile