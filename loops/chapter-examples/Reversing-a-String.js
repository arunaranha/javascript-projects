let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
   // reversed = str[i] + reversed;
    reversed = reversed + str[i];
}

console.log(reversed);

let numbers = [2, -5, 13, 42];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
   total += numbers[i];
}
console.log(total);