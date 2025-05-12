// Wap to Count the no. of even and odd digits of number entered by the user.
function countEvenOddDigit(originalNum) {
  let num = originalNum;
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
  return `The number ${originalNum} has ${evenCount} even digits and ${oddCount} odd digits.`;
}

console.log(countEvenOddDigit(2344));
