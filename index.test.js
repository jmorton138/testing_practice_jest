const capitalize = require('./capitalize.js');
const reverseString = require('./reverseString');

test('capitalizes "string"', () => {
    expect(capitalize('string')).toBe('String');
});

test('reverses "string"', () => {
    expect(reverseString("string")).toBe("gnirts");
});