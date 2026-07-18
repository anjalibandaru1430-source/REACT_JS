let numbers = [10, 10, 20, 30, 20, 30];

numbers = [...new Set(numbers)];

console.log(numbers); // [10, 20, 30]