const fibonacci = function(num) {
    num = +num

    if(num<0) return 'OOPS'

    let currentValue = []
    for(let i = 0; i <= num; i++){
        if(i>1){
            currentValue.push(currentValue[i-1] + currentValue[i-2])
        } else if(i == 1){
            currentValue.push(i)
        } else {
            currentValue.push(i)
        }
    }
    return currentValue.pop()
};

// Do not edit below this line
module.exports = fibonacci;
