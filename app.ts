setTimeout(() => {
    console.log("This message is shown after a 5-second delay.");
  }, 5000);
  console.log("Start");
  setTimeout(() => {
    console.log("Callback executed");
  }, 0);
  console.log("End");
console.log("Before synchronous operation");
for (let i = 0; i < 1e9; i++) {}
console.log("After synchronous operation");
console.log("Before asynchronous operation");
setTimeout(() => {
  console.log("Asynchronous operation completed");
}, 5000);
console.log("After asynchronous operation setup");