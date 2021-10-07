// Write your tests here!
const { substitution } = require("../src/substitution");
const expect = require("chai").expect;


describe('substituion', () => {

    it("Should return false if the given alphabet isn't exactly 26 characters long.", ()=> {
        const input = "I am winning";
        const alphabet = "xoygmcgru";
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.be.false;
    });

    it("Should correctly translate the given phrase, based on the alphabet given to the function.", ()=> {
        const expected = 'u xa iuffufg';
        const actual = substitution('I am winning', "xoyqmcgrukswaflnthdjpzibev", encode = true);
        expect(actual).to.equal(expected);
    });

    it("Should return false if there are any duplicate characters in the given alphabet.", ()=> {
        const input = "captain";
        const alphabet = "abcdefghijklmnopqrstuvwxyzz";
        const expected = false;
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.be.false;
    });

    it("Should maintain spaces in the message, before and after encoding or decoding.", ()=> {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.equal(expected);
    });

    it("Should ignore capital letters.", ()=> {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne"; 
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.equal(expected);
    });

});
