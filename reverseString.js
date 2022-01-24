function reverseString(string) {
    let array = string.split("");
    let reversed = [];
    for (let i = 0; i < array.length; i++) {
        let j = array.length - i - 1;
        reversed[i] = array[j];
    }
    return reversed.join("");
}


module.exports = reverseString; 