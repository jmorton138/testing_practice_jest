const caesarCipher = (string, shift) => {
    // function toArray(string) {
    //     let array = string.split("");
    //     return array;
    // }

    function toAscii(string) {
        let asciiArray = [];
        for (let i = 0; i < string.length; i ++) {
            asciiArray[i] = string.charCodeAt(i);
        }
        return asciiArray;
    }

    function shiftAscii(asciiArray, shift) {
        for (let i = 0; i < asciiArray.length; i++) {
            let shifted = asciiArray[i] + shift;
            asciiArray[i] =  shifted;
        }
        return asciiArray

    }

    function toChar(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] = String.fromCharCode(array[i]);
        }
        return array
    }

    function joinArray(array) {
        let ciphered = array.join("");
        return ciphered;
    }

    const ascii = toAscii(string);
    const shifted = shiftAscii(ascii, shift);
    const charred = toChar(shifted);
    const ciphered = joinArray(charred);
    return ciphered;
}

module.exports = caesarCipher;