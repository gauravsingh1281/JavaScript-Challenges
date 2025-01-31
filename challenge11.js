// Wap to print the Fibonacci Series upto n terms
let N = Number(prompt("Enter no. of terms"));
const fibonacciNumGen = (n) => {
  let series = [];
  if (n === 0) {
    series = [0];
  } else if (n === 1) {
    series = [0, 1];
  } else {
    series = [0, 1];
    for (let i = 2; i < n; i++) {
      series.push(series[series.length - 2] + series[series.length - 1]);
    }
  }
  return series;
};

console.log(fibonacciNumGen(N));
