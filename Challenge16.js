// Wap to calculate the sum of digits of a number entered by the user
let originalNum = Number(prompt("Enter any no."));
let num = originalNum;
let digitSum = 0;

while (num > 0) {
  let digit = num % 10;
  digitSum += digit;
  num = Math.floor(num / 10);
}

console.log(`Sum of digits of a number ${originalNum} = ${digitSum}`);
