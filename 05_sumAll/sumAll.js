const sumAll = function(a,b) {

if (a<0||b<0||isNaN(a)||isNaN(b)){
    return x = 'ERROR';
} 
else if (a>b){
    [a,b]=[b,a]
};


let range = Array.from({length: b}, (_x,i)=>i+a);
let sum = ((a+b)*range.length)/2;
return sum
}




// Do not edit below this line
module.exports = sumAll;
