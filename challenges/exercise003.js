function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (nums.length === 0) return [];
  return nums.map(num => num * num);

}


function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let word = words[0].toLowerCase();
  for (let index = 1; index < words.length; index++) {
    words[index] = words[index].toLowerCase().charAt(0).toUpperCase() + words[index].substring(1, words[index].length);
    word = word + words[index];
  }
  return word;
}

function getTotalSubjects(people) {
  //Input Validation
  if (people === undefined) throw new Error("people is required");
  let subCount = 0;
  let subject = [];

  for (let item of people) {
    if (item.subjects.length !== 0) subCount++;
    for (let sub of item.subjects) {
      subject.push(sub);
    }
  }
  return subCount === 0 ? 0 : subCount == 1 ? 1 : subject.length;

}


function checkIngredients(menu, ingredient) {

  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let ingredientCount = 0;
  menu.forEach(list => list.ingredients.forEach(item => {
    if (item.includes(ingredient)) ingredientCount++
  }));
  return (ingredientCount === 0 ? false : true);
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  return [...new Set((arr1.filter((value) => arr2.includes(value))).sort())];

}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};