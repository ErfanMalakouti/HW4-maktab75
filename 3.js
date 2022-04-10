let baseNumberConverter = (number, m, n) => {
  return parseInt(number, m).toString(n);
};
//Example:
console.log(baseNumberConverter(11011, 2, 8)); //33
