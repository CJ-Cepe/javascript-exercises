const sumAll = function(start, end) {
    //check if valid number - no negatives and string
    if (typeof start != 'number' || typeof end != 'number' || start < 0 || end < 0) {
        return 'ERROR'
    }

    //set start (smaller) and end (bigger) 
    let tempA, tempB;
    let total = 0;

    if(start<end){
        tempA = start
        tempB = end
    } else if (start > end){
        tempB = start
        tempA = end
    }

    for(let i = tempA; i <= tempB; i++) {
        total += i;
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
