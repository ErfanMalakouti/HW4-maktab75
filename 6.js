let divideBy = (string, number) => {
  let result = [];
  let sentence = string.split(" ").join("").split("");
  for (let i = 0; i < sentence.length; number) {
    result.push(sentence.slice(i, number).join(""));
    sentence.splice(0, number);
  }
  return result;
};
//Example:
console.log(divideBy("learn javascript", 3)); //['lea','rnj','ava','scr','ipt']
