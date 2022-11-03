function roundDecimal(number){
  return Math.round(number *10)/10
}

const ftoc = function(temp) {
  let cel = (temp - 32) * (5/9);
  cel = roundDecimal(cel)
  console.log(cel)
};

const ctof = function(temp) {
  let far = (temp * (9/5)) + 32;
  far = roundDecimal(far);
  console.log(far);
};

ctof(37.8)
ftoc(100)

// Do not edit below this line
//module.exports = {
//  ftoc,
//  ctof
//};
