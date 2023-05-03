const leapYears = function(year) {
    //condition - check if year is divisible by 4 
    if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
