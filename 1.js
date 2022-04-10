let zero = new Number(0);
if (zero) {
  alert("zero is truthy!");
}
//it displays "zero is truthy!" because the if statement for any truthy value of booleanValue including true, any non-zero number, any non-empty string value, any object or array reference, etc...
//and falsy values are "" , undefined , null and 0
//anything except falsy values will pass if condition
