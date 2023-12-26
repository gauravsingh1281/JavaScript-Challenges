// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

//------------Data 1-------------
const markMass1 = 78;
const markHeight1 = 1.69;
const JohnMass1 = 92; // Here mass in kg and height in meter.
const johnHeight1 = 1.95;

//------------Data 2--------------
const markMass2 = 95;
const markHeight2 = 1.88;
const JohnMass2 = 85; // Here mass in kg and height in meter.
const johnHeight2 = 1.76;

const calculateBMI = (mass, height) => {
  const BMI = mass / height ** 2;
  return BMI;
};

//---------------For Data 1 ------------
// const markBMI = calculateBMI(markMass1,markHeight1);
// const johnBMI = calculateBMI( JohnMass1,johnHeight1);

//---------------For Data 2 ------------
const markBMI = calculateBMI(markMass2, markHeight2);
const johnBMI = calculateBMI(JohnMass2, johnHeight2);

const markHigherBMI = markBMI > johnBMI;

console.log(`Mark's BMI ${markBMI}`);
console.log(`John's BMI ${johnBMI}`);
console.log(`Whether Mark has a higher BMI than John = ${markHigherBMI}`);
