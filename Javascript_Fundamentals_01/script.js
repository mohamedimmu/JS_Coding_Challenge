

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks 1:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula(you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
// m tall.


const markWeight  = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


// Your tasks 2:
// 1. Print a nice output to the console, saying who has the higher BMI.The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs.Example: "Mark's
// BMI(28.3) is higher than John's (23.9)!"

if (markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
}
else{
    console.log(`John's BMI (${johnBMI}) is higher than mark's (${markBMI})!`)
}


// There are two gymnastics teams, Dolphins and Koalas.They compete against each
// other 3 times.The winner with the highest average score wins a trophy!


// Your tasks 3:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console.Don't forget that there can be a draw, so test for that
// as well(draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points.Hint: Use a logical operator to test for minimum
// score, as well as multiple else -if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points.Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106



// data 1
let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;

let koalasScore1 = 88;
let koolasScore2 = 91;
let koolasScore3 = 110;

// data 2
// let dolphinsScore1 = 97;
// let dolphinsScore2 = 112;
// let dolphinsScore3 = 101;

// let koalasScore1 = 109;
// let koolasScore2 = 95;
// let koolasScore3 = 106;


//data 3
// dolphinsScore1 = 97;
// dolphinsScore2 = 112;
// dolphinsScore3 = 101;

// koalasScore1 = 109;
// koolasScore2 = 95;
// koolasScore3 = 123;

let dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
let koolasAverage = (koalasScore1 + koolasScore2 + koolasScore3) / 3;

console.log(dolphinsAverage, koolasAverage)

if (dolphinsAverage > koolasAverage && dolphinsAverage >= 100){
    console.log(`Dolphins wins with ${dolphinsAverage}`)
}
else if(koolasAverage > dolphinsAverage && koolasAverage >= 100){
    console.log(`Koolas wins with ${koolasAverage}`);
}
else if(koolasAverage === dolphinsAverage && koolasAverage >= 100 && dolphinsAverage >= 100){
    console.log("Match draw");
}
else{
    console.log("No one wins");
}


// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant.In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20 %.


// Your tasks 4:
// 1. Calculate the tip, depending on the bill value.Create a variable called 'tip' for
// this.It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
//(bill + tip).Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430

let bill_amount = 430;
let tip_per = 50 <= bill_amount && bill_amount <= 300 ? 15 : 20;
let tip_amount = bill_amount * (tip_per / 100);
let final_amount = bill_amount + tip_amount;
console.log(bill_amount, tip_amount, final_amount); 