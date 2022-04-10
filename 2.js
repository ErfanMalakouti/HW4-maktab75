let sqlFormatter = (command) => {
  return JSON.parse(JSON.stringify(command).toUpperCase());
};

//Example:
console.log(sqlFormatter("toUppercase()")); //TOUPPERCASE()
console.log(sqlFormatter("let object={name:...,family:...}")); //LET OBJECT={NAME:...,FAMILY:...}
