// Wap to Count the no. of even and odd digits of number entered by the user.
let OriginalNum = Number(prompt("Enter any no. to count its digit"));
let num = OriginalNum;
let evenCount = 0;
let oddCount = 0;
while (num > 0) {
  let digit = num % 10;
  if (digit % 2 == 0) {
    evenCount++;
  } else {
    oddCount++;
  }
  num = Math.floor(num / 10);
}
console.log(
  `The number ${OriginalNum} has ${evenCount} even digits and ${oddCount} odd digits.`
);
