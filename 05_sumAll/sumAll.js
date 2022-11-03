const sumAll = function(startNumber, endNumber) {
    let sumFinal = 0;
    
    if(startNumber < 0){
        return "ERROR"
    }
    else if (typeof(endNumber) != "number"){
        return "ERROR"
    }
    else if(startNumber > endNumber){
        let numberToAdd = endNumber;
        for (let i = endNumber - 1; i < startNumber; i++){
            sumFinal += numberToAdd;
            numberToAdd++;
        }
    }
    else{
        let numberToAdd = startNumber;
        for (let i = startNumber - 1; i < endNumber; i++){
            sumFinal += numberToAdd;
            numberToAdd++;
        }
    }
    return sumFinal;
};

// Do not edit below this line
module.exports = sumAll;
