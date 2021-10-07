const expect = require("chai").expect
const {caesar} = require("../src/caesar");


describe("caesar", ()=> {
    
    it('Should return false if shift value is 0', () => {
        const input = "Thoth Amenti";
        const expected = false;
        const actual = caesar(input, 0, encode = true);
        expect(actual).to.equal(expected);
    })

    it("Should return false if there is no shift value present", ()=> {
        const input = 'Thoth Amenti';
        const shift = undefined;
        const expected = false;
        const actual = caesar(input, shift, encode = true);
        expect(actual).to.equal(expected);
    })

    it('Should return false if shift value is less than -25', ()=> {
        const input = 'Thoth Amenti';
        const shift = -30
        const expected = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    })

    it('Should return false if shift value is greater than 25', ()=> {
        const input = 'Thoth Amenti';
        const shift = 30;
        const expected = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    })

    it('Should return wklqnixl when input is thinkful', ()=> {
        let input = "thinkful";
        const expected = "wklqnixo";
        const actual = caesar(input, 3, encode = true);
        expect(actual).to.equal(expected);
    })

    it("should decode 'bpqa qa i amkzmb umaaiom!' to 'this is a secret message!'", ()=> {
        const input = 'bpqa qa i amkzmb umaaiom!';
        const expected = 'this is a secret message!';
        const actual = caesar(input, -8, encode = true)
        expect(actual).to.equal(expected);
    })

    it("should return thinkful when given wklqnixo", () => {
        const input = "wklqnixo";
        const shift = -3;
        const actual = caesar(input, shift, (encode = true));
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    });

    it("spaces and characters should be maintained", () => {
        let input = "@#$% &^&&^ @#$%$#@";
        let shift = -3;
        let actual = caesar(input, shift, (encode = true));
        let expected = "@#$% &^&&^ @#$%$#@";
        expect(actual).to.equal(expected);
    });

    it("should invert shift (decode) if encode is false", () => {
        let input = "bpqa qa i amkzmb umaaiom";
        let shift = 8;
        let encode = false;
        let actual = caesar(input, shift, encode);
        let expected = "this is a secret message";
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        let input1 = "A Message";
        let input2 = "a message";
        let shift = 8;
        let encode = true;
        let actual = caesar(input1, shift, encode);
        let expected = caesar(input2, shift, encode);
        expect(actual).to.equal(expected);
    });
});


   