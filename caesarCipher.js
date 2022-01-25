const caesarCipher = (string, shift) => {

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
            if (shifted > 122) {
                shifted = shifted - 26;
            }
            if (asciiArray[i] >= 91 && asciiArray[i] <= 96) {
                continue;
            } else if (asciiArray[i] >= 32 && asciiArray[i] <= 64) {
                continue;
            } else {
                asciiArray[i] =  shifted;
            }
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