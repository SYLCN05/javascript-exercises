const sumAll = function(start, end) {
    let total = 0;
if(start > 0 && end > 0 && Number.isInteger(start) && Number.isInteger(end) ){
    if(start > end){
        for(let i = start; i>=end; i--){
            total += i
            
        }
    }
    else if(start<end){
        for(let i = start; i<=end; i++){
            total += start
            start++
        }
    }
   
    return total
 }
 return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;
