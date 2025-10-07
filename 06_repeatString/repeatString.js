const repeatString = function(string, num) {
    if(num <0){
        return "ERROR"
    }
    else{
         let word = ""
    for(let i = 1; i<2;i++){
        for(let j = 0; j <num; j++){
          word += string
        }
    }
    return word
    }
   
};

// Do not edit below this line
module.exports = repeatString;
