
exports.min = function min (array) {
  if  (!array || !array.length) return 0;
  else return Math.min(...array);
};

exports.max = function max (array) {
  if  (!array || !array.length) return 0;
  else return Math.max(...array);
}

exports.avg = function avg (array) {
  if  (!array || !array.length) return 0;
  let sum = 0;
  return array.reduce((sum, current) => sum + current, 0) / array.length;
}
