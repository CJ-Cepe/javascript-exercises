const palindromes = function (phrase) {
    //remove special characters, inlucing space
    phrase = phrase.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    //reverse string then compare to original
    reversePhrase = Array.from(phrase).reverse().join('')
    return phrase == reversePhrase ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
