module.exports = function getZerosCount(number, base) {
  let count = 0;
  let power = 2,
    exponent = 0;
  while (power < base) {
    let baseCopy = base; //копия base
    //находим простой множитель
    if (baseCopy % power != 0) {
      power++;
      continue;
    }
    while (baseCopy % power == 0) {
      baseCopy /= power;
      exponent++;
    }
    //
    let tempExponent = 1;
    let tempCount = 0;
    //Находим количество нулей на конце
    while (power ** tempExponent <= number) {
      tempCount += Math.floor(number / (power ** tempExponent));
      tempExponent++;
    }
    tempCount = tempCount / exponent;
    if (count == 0) {
      count = Math.floor(tempCount);
    } else if (count > tempCount) {
      count = Math.floor(tempCount);
    }
    power++;
    exponent = 0;
  }
  return count;
}

// let count = 0;
// let pow = 2;
// let exp = 0;
// for (pow; pow < base; pow++) {
//   // 1 step
//   let baseCopy = base;
//   if (baseCopy % pow != 0){
//     continue;
//   }
//   while (baseCopy % pow == 0) {
//     baseCopy /= pow;
//     exp++;
//   }
//   //2 step
//   let incCount = 0;
//   let i = 1; 
//   while (number >= pow ** i) {
//     incCount += Math.floor(number / (pow ** i));
//     i++;
//   }
//   //3 step
//   incCount = Math.floor(incCount / exp);
//   if (count == 0 || (count > incCount && incCount != 0)){
//     count = incCount;
//   }

// }
// return count;