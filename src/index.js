module.exports = function getZerosCount(number, base) {
  let count = 0;
  let power = 2,
    exponent = 0;
  while (power <= base) {
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
      count = tempCount;
    } else if (count > tempCount) {
      count = tempCount;
    }
    power++;
    exponent = 0;
  }
  return count;
}