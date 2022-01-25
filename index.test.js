const capitalize = require('./capitalize.js');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const caesarCipher = require('./caesarCipher');

test('capitalizes "string"', () => {
    expect(capitalize('string')).toBe('String');
});

test('reverses "string"', () => {
    expect(reverseString("string")).toBe("gnirts");
});

test('adds 1 and 2', () => {
    expect(calculator().add(1, 2)).toBe(3);
});

test('subtracts 5 from 16', () => {
    expect(calculator().subtract(16, 5)).toBe(11);
});

test('multiplies 6 by 4', () => {
    expect(calculator().multiply(6, 4)).toBe(24);
});

test('divides 15 by 3', () => {
    expect(calculator().divide(15, 3)).toBe(5);
});

test('Shifts "defend" to "efgfoe" with shift of 1', () => {
    expect(caesarCipher("defend", 1)).toBe("efgfoe");
});

test('Shifts "defend it" to "efgfoe ju" with shift of 1', () => {
    expect(caesarCipher("defend it", 1)).toBe("efgfoe ju");
});

test('Shifts "defend it!" to "efgfoe ju!" with shift of 1', () => {
    expect(caesarCipher("defend it!", 1)).toBe("efgfoe ju!");
});

test('Shifts "Defend It!" to "Efgfoe Ju!" with shift of 1', () => {
    expect(caesarCipher("Defend It!", 1)).toBe("Efgfoe Ju!");
});

test('Shifts "zzzz" to "aaaa" with shift of 1', () => {
    expect(caesarCipher("zzzz", 1)).toBe("aaaa");
});

test('Shifts "zZzz" to "aaaa" with shift of 2', () => {
    expect(caesarCipher("zZzz", 2)).toBe("aaaa");
});