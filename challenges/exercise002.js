function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  let fillings = [];
  for (let item in sandwich.fillings) {
    fillings.push(sandwich.fillings[item]);
  }
  return fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester"

}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const numOfBus = Math.ceil(people / 40);
  return numOfBus;

}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let sheepCount = 0;
  arr.map(pet => {
    if (pet === "sheep") sheepCount++;
  });
  return sheepCount;
}


function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
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