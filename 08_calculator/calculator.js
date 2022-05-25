const add = function(a,b) {
  return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	return array.reduce((a,b)=> a+b,0)
};

const multiply = function(array) {
 return array.reduce((a,b)=> a*b,)
};

const power = function(a,b) {
return a**b
};

const factorial = function(number) {
  if (number === 0) {
    return 1
  }
	const array = Array.from({length:number}, (_,i)=> i+1)
  return array.reduce((a,b)=>a*b,)
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
