// Wap to calculate the sum of even digit and product of odd digits of number entered by the user
let originalNum = Number(prompt("Enter any no."));
let num = originalNum;
let evenSum = 0;
let oddProduct = 1;

while (num > 0) {
  let digit = num % 10;
  if (digit % 2 == 0) {
    evenSum += digit;
  } else {
    oddProduct *= digit;
  }
  num = Math.floor(num / 10);
}

console.log(
  `Sum of even digit = ${evenSum} and Product of odd digit = ${oddProduct} of number ${originalNum}`
);
