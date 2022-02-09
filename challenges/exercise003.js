function getSquares(nums) {

  //Input Validation
  if (nums === undefined) throw new Error("nums is required");

  //return empty array if there are no items
  if (nums.length === 0) return [];
  let sqrNum = [];

  // return array with square numbers
  for (let i = 0; i < nums.length; i++) {
    sqrNum.push(nums[i] * nums[i]);
  }
  return sqrNum;
}


function camelCaseWords(words) {
  //Input Validation
  if (words === undefined) throw new Error("words is required");

  // converting array of words to camel case string
  let myVar = words[0].toLowerCase();
  for (let index = 1; index < words.length; index++) {
    words[index] = words[index].toLowerCase().charAt(0).toUpperCase() + words[index].substring(1, words[index].length);
    myVar = myVar + words[index];
  }
  return myVar;

}

function getTotalSubjects(people) {
  //Input Validation
  if (people === undefined) throw new Error("people is required");

  // calculate total number of subjects in the people collection
  let subCount = 0;
  let sub = [];
  for (let x of people) {
    if (x.subjects.length !== 0) subCount++;
    for (let y of x.subjects) {
      sub.push(y);
    }
  }
  //return 0,if no subjects found .Return 1 at least one subject found, else return total subjects
  if (subCount === 0) return 0;
  if (subCount === 1) return 1;
  else {
    return sub.length;
  }

}

function checkIngredients(menu, ingredient) {
  //Input Validation
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  // find the ingredient in the given menu
  let count = 0;
  for (let x of menu) {
    if (x.ingredients.includes(ingredient)) count++;
  }
  if (count === 0) {
    return false;
  } else {
    return true;
  }
}

function duplicateNumbers(arr1, arr2) {
  //Input Validation
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // returning the new array by removing duplicates
  let filterArr = (arr1.filter((value) => arr2.includes(value))).sort();
  return [...new Set(filterArr)];

}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};