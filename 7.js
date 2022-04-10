function codedAlphabet(number) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = [];
  result.push(alphabet.slice(-number).join(""));
  result.push(alphabet.splice(0, alphabet.length - number).join(""));
  return result.join("");
}
console.log(codedAlphabet(3)); //"xyzabcdefghijklmnopqrstuvw"
////////////////////////////////////////////////////////////////
let encode = (sentence, number) => {
  sentence = sentence.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let codedAlpha = codedAlphabet(number);
  let encodedSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    let index = alphabet.indexOf(sentence[i]);
    if (sentence[i] === " ") {
      encodedSentence += " ";
    } else {
      encodedSentence += codedAlpha[index];
    }
  }
  return encodedSentence;
};
//Example:
console.log(encode("Hello World", 3)); //"ebiil tloia"
////////Extra solution for decoding
let decoded = (codedSentence, number) => {
  codedSentence = codedSentence.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let codedAlpha = codedAlphabet(number);
  let decodedSentence = "";
  for (let i = 0; i < codedSentence.length; i++) {
    let index = codedAlpha.indexOf(codedSentence[i]);
    if (codedSentence[i] === " ") {
      decodedSentence += " ";
    } else {
      decodedSentence += alphabet[index];
    }
  }
  return decodedSentence;
};
//////Example:
console.log(decoded("ebiil tloia", 3)); //"hello world"
