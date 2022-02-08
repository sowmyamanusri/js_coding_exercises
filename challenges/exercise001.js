function capitalize(word) {

  // Input Validation
  if (word === undefined) throw new Error("word is required");

  // Changing first char to capital letter  
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {

  // Input Validation
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  // Taking initials of firstName & lastName
  let initial1 = firstName.substring(0, 1).toUpperCase();
  let initial2 = lastName.substring(0, 1).toUpperCase();

  // concat two initials
  let initial = initial1 + "." + initial2;

  return initial;
}

function addVAT(originalPrice, vatRate) {

  // Input Validation
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");

  //calculate value of percentage
  let percentValue = (originalPrice * vatRate) / 100;

  // If the passed value is decimal then fix the decimal to 2 digits and convert to number
  if ((percentValue - Math.floor(percentValue)) !== 0) {
    let totalPrice = (originalPrice + percentValue).toFixed(2);
    return Number(totalPrice);

  } else {
    return (originalPrice + percentValue);
  }
}

function getSalePrice(originalPrice, reduction) {

  //Input Validation
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  //calculate value of percentage
  let percentValue = (originalPrice * reduction) / 100;

  // If the passed value is decimal then fix the decimal to 2 digits and convert to number
  if ((percentValue - Math.floor(percentValue)) !== 0) {
    let totalPrice = (originalPrice - percentValue).toFixed(2);
    return Number(totalPrice);
  } else {
    return (originalPrice - percentValue);
  }
}

function getMiddleCharacter(str) {

  // Input Validation
  if (str === undefined) throw new Error("str is required");

  // Finding the middle character
  if (str.length % 2 === 1) {
    return str.substring((str.length / 2) + 1, (str.length / 2));
  } else if (str.length % 2 === 0) {
    return str.substring((str.length / 2) - 1, (str.length / 2) + 1);
  }
}

function reverseWord(word) {

  //Input Validation
  if (word === undefined) throw new Error("word is required");

  //reverse the string
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {

  //Input Validation
  if (words === undefined) throw new Error("words is required");

  // reversing each item in an array
  for (let index = 0; index < words.length; index++) {
    words[index] = words[index].split("").reverse().join("");
  }
  return words;
}

function countLinuxUsers(users) {

  //Input Validation
  if (users === undefined) throw new Error("users is required");

  //checking for linux user and incrementing the count
  let count = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].type === "Linux") {
      console.log(users[i].type);
      count = count + 1;
    }
  }
  return count;
}

function getMeanScore(scores) {

  //Input Validation
  if (scores === undefined) throw new Error("scores is required");

  // calculate mean score
  let sumScore = scores.reduce((a, b) => a + b, 0);
  let meanScore = sumScore / scores.length;

  // If the value is decimal then fix the decimal to 2 digits and convert to number 
  if (meanScore - Math.floor(meanScore) !== 0) {
    let score = meanScore.toFixed(2);
    return Number(score);
  }
  return meanScore;
}

function simpleFizzBuzz(n) {

  //Input Validation
  if (n === undefined) throw new Error("n is required");

  // returning the  appropriate word based on the divisibility of  given number
  for (let i = 1; i <= n; i++) {
    if (n % 3 === 0 && n % 5 === 0) {
      return "fizzbuzz";
    } else if (n % 3 === 0) {
      return "fizz";
    } else if (n % 5 === 0) {
      return "buzz";
    } else {
      return n;
    }
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};