const add = function(addends_1, addends_2) {
  return addends_1 + addends_2;
};

const subtract = function(minued, subtrahend) {
	return minued - subtrahend;
};

const sum = function(addends) {
	return sumValue = addends.reduce((accumulator, currentValue)=>{
    return add(accumulator, currentValue)
  }, 0)
};

const multiply = function(factors) {
  return product = factors.reduce((accumulator, currentValue)=>{
    return accumulator * currentValue
  }, 1)
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(factor) {
  let tempValue = 1
	for(; factor > 0; factor--){
    tempValue *= factor 
  }
  return tempValue
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
