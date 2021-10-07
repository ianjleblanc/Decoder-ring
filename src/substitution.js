// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    
    //Checks if alphabet is provided and if it's 26 characters long
    if(!alphabet || alphabet.length !== 26) return false;
    
    const alpha = "abcdefghijklmnopqrstuvwxyz".split(""); // ['a','b',]
    const inputArray = input.toLowerCase().split(""); // ['f','l']
    let abc = alphabet.toLowerCase().split(""); // will change any capital letter to lowercase before passing in
    
    // Make sure no repeated characters
    const noRepeatChar = abc.filter(
      (char, index, arr) => arr.indexOf(char) === index
    );
    if (noRepeatChar.length !== alphabet.length) return false;
    //Encode the message
    const toEncode = () => {
      let result = [];
      const encode = (char) => {
        const charIndex = alpha.indexOf(char);
        const encodedChar = abc[charIndex];
        result.push(encodedChar);
      };
      inputArray.forEach((char) => {
        // maintains space or encode char
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    }
    const toDecode = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = abc.indexOf(char);
        const decodedChar = alpha[charIndex];
        result.push(decodedChar);
      };
      inputArray.forEach((char) => {
        // preserves space or encodes character
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };
     // with errors now handled, next decide to encode or decode.
    return encode ? toEncode() : toDecode
    ();
    }

  return {
    substitution,
   
  };
})();


module.exports = { substitution: substitutionModule.substitution };

