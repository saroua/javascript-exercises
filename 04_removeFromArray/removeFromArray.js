const removeFromArray = function(list, ...args) {
    let newArray = [];
        for (item of args){
            let index = list.indexOf(item);
            if (list.indexOf(item) == -1){
            
            }
            else if (list.indexOf(item)){
                list.splice(index, 1);
            }
        }
    return list

};

// Do not edit below this line
module.exports = removeFromArray;
