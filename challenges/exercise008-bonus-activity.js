// Spread Syntax Bonus activity

function printColours(colours) {
    // Input Validation
    if (!colours) throw new Error("colour is required");
    //returning the colours 
    return [...colours];
}

function shoppingList(list, newItem) {

    // input validation
    if (!list) throw new Error("list is required");
    if (!newItem) throw new Error("newItem is required");
    //concat arrays
    let newArr = [...list, ...newItem]
    return newArr
}

function highestNumber(numbers) {
    //Input Validation
    if (!numbers) throw new Error("numbers are required");

    // Max number in the array
    return Math.max(...numbers);
}

function splitThatString(string) {
    // Input Validation
    if (!string) throw new Error("string is required");
    // return the string
    return [...string]
}

// Optional Chaining Bonus activity!

function addressLookUp(user) {
    // Input Validation
    if (!user) throw new Error("user is required");

    // checking the object is containing the property
    return user.address ? .postcode
}


module.exports = {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString,
    addressLookUp
};