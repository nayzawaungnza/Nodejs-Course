//console.log(global);

let interval = global.setInterval(() => {
  console.log("hello");
}, 1000);
global.setTimeout(() => {
  clearInterval(interval);
}, 3000);

console.log(__dirname);
console.log(__filename);
