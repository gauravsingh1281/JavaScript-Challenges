// Wap to find the reverse of digits of number entered by the user.
let originalNum = Number(prompt("Enter any no."));
let num = originalNum;
let numReverse = 0;

while (num > 0) {
  let digit = num % 10;
  numReverse = numReverse * 10 + digit;
  num = Math.floor(num / 10);
}

console.log(`Reverse of digits of number ${originalNum} = ${numReverse}`);
