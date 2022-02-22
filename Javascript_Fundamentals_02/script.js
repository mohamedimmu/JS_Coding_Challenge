// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated(so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
//     Otherwise, no team wins!

// Your tasks 1:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
//     Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) /3
// Test data 1
let avgDolphins = calcAverage(44, 23, 71)
let avgKoolas = calcAverage(65, 54, 49)

const checkwinner = function (dolphinsScore, koolasScore){

    let result;
    if (dolphinsScore >= (koolasScore * 2)){
        result = `Dolphins win (${dolphinsScore} vs ${koolasScore})`
    }
    else if (koolasScore >= (dolphinsScore *2)){
        result = `Koolas win (${koolasScore} vs ${dolphinsScore})`
    }
    else{
        result = `No team wins (${dolphinsScore} vs ${koolasScore})`
    }

    return result;
}

console.log(checkwinner(avgDolphins, avgKoolas));

// // Test data 2
// avgDolphins = calcAverage(85, 54, 41)
// avgKoolas = calcAverage(23, 34, 27)

// console.log(checkwinner(avgDolphins, avgKoolas));

// Steven is still building his tip calculator, using the same rules as before: Tip 15 % of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20 %.

// Your tasks 2:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above(you can check out
// the code from first tip calculator challenge if you need to). Use the function
//     type you like the most.Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

const calcTip = (bill_amount) => {
    if (bill_amount >=50 && bill_amount <=300){
        const tip_value = (15/100) * bill_amount;
        return tip_value;
    }
    else{
        const tip_value = (20/100) * bill_amount;
        return tip_value;
    }
}

const tip = [calcTip(125), calcTip(555), calcTip(44)]
const total = [calcTip(125) + 125, calcTip(555) + 555, calcTip(44) + 44]

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
//     / (height * height)(mass in kg and height in meter)

// Your tasks 3:
// 1. For each of them, create an object with properties for their full name, mass, and
// height(Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI(the same
// method on both objects).Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI.Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

// Test data: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m
// tall.

const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
  console.log(`Mark's BMI ${mark.BMI} is higher than John's ${john.BMI}`);
} else if (john.BMI > mark.BMI) {
  console.log(`John's BMI ${john.BMI} is higher than mark's ${mark.BMI}`);
} else {
  console.log("Both have same BMI");
}

// Let's improve Steven's tip calculator even more, this time using loops!


// Your tasks4:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before(no need to repeat) to calculate
// tips and total values(bill + tip) for every bill value in the bills array.Use a for
// loop to perform the 10 calculations!

// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �

// Bonus:
// 4.Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument.This function calculates the average of all numbers in the given
// array.This is a difficult challenge(we haven't done this before)! Here is how to
// solve it:
// 4.1.First, you will need to add up all values in the array.To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop.In each iteration, add the current value to the
// 'sum' variable.This way, by the end of the loop, you have all values
// added together
// 4.2.To calculate the average, divide the sum you calculated before by the
// length of the array(because that's the number of elements)
// 4.3.Call the function with the 'totals' array

const bill_list = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTips = function (bills) {
  for (let i = 0; i < bills.length; i++) {
    // if (bills[i] >= 50 && bills[i] <= 300){
    //     const tip = (15/100) * bills[i];
    //     const total = tip + bills[i];
    //     tips.push(tip);
    //     totals.push(total);
    // }else{
    //     const tip = (20/100) * bills[i];
    //     const total = tip + bills[i];
    //     tips.push(tip);
    //     totals.push(total)
    // }
    const tip =
      bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;
    const total = tip + bills[i];
    tips.push(tip);
    totals.push(total);
  }
  console.log("Bill", bill_list);
  console.log("Tip", tips);
  console.log("Total", totals);
};

const calcAverages = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  sum /= arr.length;
  console.log("Average", sum);
};

calcTips(bill_list);
calcAverages(totals);
calcAverages(tips);