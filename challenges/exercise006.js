/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  //Input Validation
  if (!arr) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("An array is required")
  // checking given number is multiple by 3 and 5 and sum of the numbers
  let sum = 0;
  arr.forEach(num => {
    if (num % 5 === 0 || num % 3 === 0) {
      sum += num;
    }
  });
  return sum;
}


/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  //Input Validation
  if (str === undefined) throw new Error("str is required");

  //testing string with regex returns boolean
  const regex = /[GATC]/gi;
  const found = regex.test(str);
  return found;
}

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  //input Validation
  if (str === undefined) throw new Error("str is required");
  // mapping DNA characters
  const DNAmapping = {
    'G': 'C',
    'C': 'G',
    'A': 'T',
    'T': 'A'
  };
  // for each character in a string find the DNA mapping and replace the matching character and join back to a string.
  return str.toUpperCase().split('').filter(x => x.match(/A|T|G|C/g)).map(y => DNAmapping[y]).join('');

};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  //Input Validation
  if (n === undefined) throw new Error("n is required");

  // checking given  number is prime number
  if (n <= 1) return false;
  // checking given number is even number return false
  if (n % 2 === 0) return false;
  //sqrt of given number
  let s = Math.sqrt(n);
  // checking given number is prime number return true
  for (let i = 2; i <= s; i += 2) {
    if (n % i == 0) return false;
    return true;
  }
}


/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  //Input Validation
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  // creating the n:n dimension matrix
  const multiArr = [n];
  for (let k = 0; k < n; k++) {
    multiArr[k] = new Array(n);
  }

  // filling the values for the defined matrix
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      multiArr[i][j] = "foo";
    }
  }
  return multiArr;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  //Input Validation
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  // count the number of staff present for the given day
  let count = 0;
  staff.forEach(item => {
    if (item.rota.includes(day)) count++
  })

  if (count > 2) return true;
  else return false;

};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};