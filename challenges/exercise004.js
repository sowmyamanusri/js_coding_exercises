function findSmallNums(nums) {
  //Input Validation
  if (!nums) throw new Error("nums is required");
  //Filter the  array numbers less than 1
  return nums.filter((item) => item < 1);
}

function findNamesBeginningWith(names, char) {
  //Input Validation
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  //Filtering the given array names with starting character
  return names.filter(item => item.charAt(0) === char);
}


function findVerbs(words) {
  //Input Validation
  if (!words) throw new Error("words is required");
  //Filtering the array with starting characters "to "
  return words.filter(word => word.substring(0, 3) === "to ");
}

function getIntegers(nums) {
  //Input Validation
  if (!nums) throw new Error("nums is required");
  // filtering the array with only integers
  return nums.filter(num => num % 1 === 0);
}

function getCities(users) {
  //Input Validation
  if (!users) throw new Error("users is required");

  //Getting the city display from users object
  let cityArr = [];
  users.forEach(user => cityArr.push(user.data.city.displayName));
  return cityArr;
}

function getSquareRoots(nums) {
  //Input Validation
  if (!nums) throw new Error("nums is required");

  // Taking the square root of the array
  let sqrNum = [];
  nums.forEach(num => sqrNum.push(Number(Math.sqrt(num).toFixed(2))));
  return sqrNum;
}

function findSentencesContaining(sentences, str) {
  //Input Validation
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Filtering the string from the sentences by converting into lowercase (string) format
  return sentences.filter(sentence => sentence.toLowerCase().includes(str));
}

function getLongestSides(triangles) {
  //Input Validation
  if (!triangles) throw new Error("triangles is required");

  // Taking the max number of array triangles 
  const longNum = [];
  triangles.forEach(triangle => longNum.push(Math.max(...triangle)));
  return longNum;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};