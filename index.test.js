const capitalize = require('./capitalize.js');
const index = require('./capitalize.js')

test('capitalizes "string"', () => {
    expect(capitalize('string')).toBe('String');
});