const ftoc = function(F) {
  C=(F-32)*5/9
  return C = round (C,1);
};

const ctof = function(C) {
  F=C*9/5+32;
 return F = round (F,1);

};

function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
