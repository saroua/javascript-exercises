const reverseString = function(string) {
    let result = '';
    let final = string.length;
    let index = string.length-1;
    for (let i = 0; i < final; i++){
        result += string.charAt(index);
        index--
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
