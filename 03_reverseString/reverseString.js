const reverseString = function(word) {
    
    let wordReverse = ""

    for(let i = word.length - 1; i >= 0; i--) {
        wordReverse += word[i]
    }

    return wordReverse;
};

// Do not edit below this line
module.exports = reverseString;
