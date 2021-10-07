// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift === 0 || shift < -25 || shift > 25) return false;
     try {
      const alpha = 'abcdefghijklmnopqrstuvwxyz';      
      if (!input || typeof(input) !== "string") throw "Not valid input";
      let result = '';
      let code = input.toLowerCase();
      for (let i = 0; i < code.length; i++){
        let inputChar = code[i];
        let alphaIndex = alpha.indexOf(inputChar);
        //console.log(inputChar, alphaIndex, "search index");
        if (alphaIndex === -1) {
          result += inputChar;
          continue;
        }
        if (encode === true) {
          alphaIndex += shift;
        } else {
          alphaIndex -= shift;
        }
        if (alphaIndex < 0) alphaIndex += alpha.length;
        if (alphaIndex >= alpha.length) alphaIndex -= alpha.length;

        //console.log(alphaIndex, "shifted index");
        result += alpha[alphaIndex];
      }
      return result;
     } catch (err) {
       console.log(err);
     }
  }

  return {
    caesar,
  };
})();

//console.log(caesarModule.caesar("a A . ?", 3,));
module.exports = { caesar: caesarModule.caesar };
