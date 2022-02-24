const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  if (!nums.includes(n)) {
    return null;
  } else if (nums[nums.length - 1] === n) {
    return null;
  } else {
    let index = nums.indexOf(n)
    return nums[index + 1];
  }
}


const count1sand0s = str => {

  if (str === undefined) throw new Error("str is required");
  let countOne = 0;
  let countZero = 0;
  let newStr = str.split("");
  newStr.forEach(item => {
    item === "1" ? countOne++ : countZero++;
  })
  return {
    1: countOne,
    0: countZero
  };
};

const reverseNumber = n => {
  //Input Validation
  if (n === undefined) throw new Error("n is required");
  // reverse the given number by converting it to a string
  return Number(n.toString().split("").reverse().join(""));

};

const sumArrays = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let count = 0;
  arr.forEach(item => item.forEach(item2 => count += item2));
  return count;
}

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Swapping the first and last elements in the array
  const temp = arr[0];
  if (arr.length >= 2) {
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // converting object value to string and comparing with given string value 
  let count = 0;
  Object.values(haystack).map(list => {
    if (list.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
      count++;
    }
  });
  return (count >= 1 ? true : false);
}

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const obj = {};
  const tempStr = str.toLowerCase().replace(/[^a-zA-Z ]/gi, "");
  tempStr.split(' ').map(word => obj[word] ? obj[word]++ : obj[word] = 1);
  return obj;

}

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};