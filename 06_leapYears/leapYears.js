const leapYears = function(year) {
    if (year % 400 == 0 && year % 100 == 0){
        console.log(true);
        return true;
    }
    else if (year % 400 && year % 100 > 0){
        console.log(false);
        return(false);
    }
    else if(year % 4 == 0 && year % 100 != 0){
        console.log(true);
        return true;
    }
    else{
        console.log(false);
        return false;
    }
};


// Do not edit below this line
module.exports = leapYears;
