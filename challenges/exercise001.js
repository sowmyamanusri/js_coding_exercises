function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0, 1).toUpperCase() + "." + lastName.substring(0, 1).toUpperCase();

}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");

  const vatAmount = (originalPrice * vatRate) / 100;
  if ((vatAmount - Math.floor(vatAmount)) !== 0) {
    const amount = (originalPrice + vatAmount).toFixed(2);
    return Number(amount);
  } else {
    return (originalPrice + vatAmount);
  }
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const discount = (originalPrice * reduction) / 100;
  if ((discount - Math.floor(discount)) !== 0) {
    let salePrice = (originalPrice - discount).toFixed(2);
    return Number(salePrice);
  } else {
    return (originalPrice - discount);
  }
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length % 2 === 1) {
    return str.substring((str.length / 2) + 1, (str.length / 2));
  } else {
    return str.substring((str.length / 2) - 1, (str.length / 2) + 1);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(word => word.split("").reverse().join(""));

}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  users.forEach(user => {
    if (user.type === "Linux") count++
  });
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sumScore = scores.reduce((a, b) => a + b, 0);
  let meanScore = sumScore / scores.length;
  // If the value is decimal then fix the decimal to 2 digits and convert to number 
  if (meanScore - Math.round(meanScore) !== 0) {
    let score = meanScore.toFixed(2);
    return Number(score);
  }
  return meanScore;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
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