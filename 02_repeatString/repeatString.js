const repeatString = function(textToPrint, numOfTimes) {

    if(numOfTimes>=0){
        let currentString = ""

        for (let i=0;i<numOfTimes;i++){
            currentString +=textToPrint;
        }
        return currentString
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
