function getFillings(sandwich) {

  // Input Validation
  if (sandwich === undefined) throw new Error("ingredients is required");

  //Getting items from filling collection
  let fillings = [];
  for (let item in sandwich.fillings) {
    fillings.push(sandwich.fillings[item]);
  }
  return fillings;
}

function isFromManchester(person) {

  //Input Validation
  if (person === undefined) throw new Error("person is required");

  // returning true if city is Manchester
  if (person.city === "Manchester") {
    return true;
  } else {
    return false;
  }

}

function getBusNumbers(people) {

  //Input Validation
  if (people === undefined) throw new Error("people is required");

  // calculate number of buses for given number of people
  let numOfBus = people / 40;
  switch (numOfBus) {
    case 1:
    case 2:
    case 3:
      return numOfBus;
    default:
      if (people % 40 !== 0) {
        numOfBus += 1;
        return Math.floor(numOfBus);
      }
  }
}

function countSheep(arr) {
  //Input Validation
  if (arr === undefined) throw new Error("arr is required");

  // count number of sheep in array
  let count = 0;
  arr.forEach(pet => {
    if (pet === "sheep") count++
  });
  return count;
}

function hasMPostCode(person) {
  //Input Validation
  if (person === undefined) throw new Error("person is required");

  // return true if postCode starts with 'M' and city not Manchester
  let code = person.address.postCode[0].toUpperCase();
  if (code === 'M' && person.address.city !== "Manchester") {
    return false;
  } else if (code !== 'M') {
    return false;
  } else return true;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};