const analyzeArray = (array) => {
    function reducer(prev, current) {
        return prev + current;
    }

    function sum(array) {
        return array.reduce(reducer);
    }

    
    const average = (array) => {
        const total = sum(array);
        const average = total/(array.length);
        return average;

    }

    const max = (array) => {
        return Math.max(...array);
        
    }

    const min = (array) => {
        return Math.min(...array);
    }

    const length = (array) => {
        return array.length;
    }
    const object = {
        average: average(array),
        min: min(array),
        max: max(array),
        length: length(array)
    }

    return object;
}

module.exports = analyzeArray;