/*Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// --------------Test Data 1-------------
// const dolphinsMatch_1_Score = 96;
// const dolphinsMatch_2_Score = 108;
// const dolphinsMatch_3_Score = 89;

// const koalasMatch_1_Score = 88;
// const koalasMatch_2_Score = 91;
// const koalasMatch_3_Score = 110;

// --------------Test Data Bonus 1-------------
// const dolphinsMatch_1_Score = 97;
// const dolphinsMatch_2_Score = 112;
// const dolphinsMatch_3_Score = 101;

// const koalasMatch_1_Score = 109;
// const koalasMatch_2_Score = 95;
// const koalasMatch_3_Score = 123;

// --------------Test Data Bonus 2-------------
const dolphinsMatch_1_Score = 97;
const dolphinsMatch_2_Score = 112;
const dolphinsMatch_3_Score = 101;

const koalasMatch_1_Score = 109;
const koalasMatch_2_Score = 95;
const koalasMatch_3_Score = 106;

const dolphinsAverageScore =
  (dolphinsMatch_1_Score + dolphinsMatch_2_Score + dolphinsMatch_3_Score) / 3;
const koalasAverageScore =
  (koalasMatch_1_Score + koalasMatch_2_Score + koalasMatch_3_Score) / 3;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
  console.log(`Dolphins wins the match with score ${dolphinsAverageScore} 🏆.`);
} else if (
  dolphinsAverageScore < koalasAverageScore &&
  koalasAverageScore >= 100
) {
  console.log(`Koalas wins the match with score ${koalasAverageScore} 🏆.`);
} else if (
  dolphinsAverageScore === koalasAverageScore &&
  koalasAverageScore >= 100 &&
  dolphinsAverageScore >= 100
) {
  console.log(
    `Match draws because both teams Dolphins (${dolphinsAverageScore}) and Koalas (${koalasAverageScore}) have equal score 🙂.`
  );
} else {
  console.log(
    `No team wins the trophy because both the teams Dolphins (${dolphinsAverageScore}) and Koalas (${koalasAverageScore}) do not have a score greater or equal to 100 points 🥲.`
  );
}
