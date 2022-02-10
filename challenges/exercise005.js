const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
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
  // Your code here!
  let countOne = 0;
  let countZero = 0;
  let x = str.split("");
  x.forEach(item => {
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
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return Number(n.toString().split("").reverse().join(""));

};

const sumArrays = arrs => {

  let count = 0;
  if (arrs === undefined) throw new Error("arrs is required");

  arrs.forEach(item => item.forEach(item2 => count = count + item2));

  return count;

}

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let temp = arr[0];
  if (arr.length >= 2) {
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  if (Object.values(haystack).indexOf(searchTerm) > -1) return true
  //if (Object.values(haystack).includes(searchTerm) === true) return true
  // else return false;
  // if (haystack.includes(searchTerm)) return true;

  //let x = haystack.find(item => item.id.toLowerCase() === searchTerm.toLowerCase())
  //console.log(x);

};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let obj = {};

  //let wordFre = new Map();
  let y = str;
  y.split(" ").forEach(word => obj[word] = (str.match(/word/g) || []).length);
  return obj;


  //forEach(word => wordFre.set(word, str.count(word))).map.forEach((value, key) => (obj[key] = value));

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