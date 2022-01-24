const capitalize = require('./capitalize.js');
const reverseString = require('./reverseString');
const calculator = require('./calculator');

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