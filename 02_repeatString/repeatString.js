const repeatString = function(string , count) {
    resultat = ''
    if (count > 0){
        for (i = 0; i < count ; i++ ){
            resultat += string
        }
    }
    else if (count < 0){
        resultat = "ERROR"
    }
    return resultat
};

// Do not edit below this line
module.exports = repeatString;
