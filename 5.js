let list = [
  { name: "AmirAli", family: "Gharibi" },
  { name: "Ali", family: "Ziaei" },
  { name: "Hossein", family: "Rahimi" },
];
let namesListOf = (startWith, endWith) => {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    let temp = list[i].name.split("");
    if (temp[0] === startWith && temp[temp.length - 1] === endWith) {
      result.push(list[i]);
    }
  }
  return result;
};
//Example:
console.log(namesListOf("A", "i")); //[{ name: "AmirAli", family: "Gharibi" },{name: "Ali", family: "Ziaei" }]
