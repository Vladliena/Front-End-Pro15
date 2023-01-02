function reverseNumber(numbers) {
    let result;
    if (!isNaN(numbers)) {
        numbers = numbers.toString().split('').reverse().join('');
        result = parseFloat(numbers);
    } else {
        result = 0
    }
    return result
}

console.log(reverseNumber(12345))