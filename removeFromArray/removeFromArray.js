const removeFromArray = function(...args) {

let myArray =args[0];

let newArray = myArray.filter(function(value, index, arr){ 
    return !args.includes(value);
});

return newArray;
}

module.exports = removeFromArray
