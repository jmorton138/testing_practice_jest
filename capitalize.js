function capitalize(string) {
    string = string[0].toUpperCase() + string.substring(1)
    return string;
}

module.exports = capitalize;