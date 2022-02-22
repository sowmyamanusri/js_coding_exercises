const findNextNumber = (nums, n) => {
  //Input Validation
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  // finding the next number for the given number, if number is in last position setting it to null
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
  //Input Validation
  if (str === undefined) throw new Error("str is required");
  // counting  number of ones and zero  in the given string
  let countOne = 0;
  let countZero = 0;
  let newStr = str.split("");
  newStr.forEach(item => {
    switch (item) {
      case '1':
        countOne++;
        break;
      case '0':
        countZero++;
        break;
    }
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


const sumArrays = arrs => {
  //Input Validation
  if (arrs === undefined) throw new Error("arrs is required");
  // counting items of nested arrays
  let count = 0;
  arrs.forEach(item => item.forEach(item2 => count = count + item2));
  return count;
}

const arrShift = arr => {
  //Input Validation
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
  //Input Validation
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  // converting object value to string and comparing with given string value 
  let count = 0;
  Object.values(haystack).map(x => {
    if (x.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
      count++;
    }
  });

  if (count >= 1) {
    return true;
  } else if (count === 0)
    return false;
}

const getWordFrequencies = str => {
  //Input Validation
  if (str === undefined) throw new Error("str is required");
  // setting object and converting sting to lowercase and filtering special character in the string.Mapping each words and taking frequency of that word
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