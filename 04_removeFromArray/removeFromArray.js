const removeFromArray = function(array) {

    for(let i = 0; i < arguments.length; i++){
        if(array.includes(arguments[i])) {
            let index = array.indexOf(arguments[i])
            array.splice(index, 1)
        }
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
