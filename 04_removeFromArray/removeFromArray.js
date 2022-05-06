const removeFromArray = function(...parameters) {
  array = parameters[0];
  let newArray = [];
  array.forEach(element => {
      if(!parameters.includes(element)){
          newArray.push(element)
      }
  });
return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
