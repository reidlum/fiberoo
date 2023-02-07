function fib() {
  const a = [0, 1];
  for (let i = 0; i < 48; i++) {
    a.push((a[i] + a[i + 1]));
  }
  return a;
}

function numsToStrings(arr) {
  return _.map(arr, function (num) { return `${num}`; });
}
function numEvenNums(arr) {
  return _.countBy(arr, function (num) { return num % 2 === 0; }).true;
}
console.log(fib());
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));
