//Print no of prices divible 3
let prices=[23,678,1055,34,544,554,43,786,333,100];
let count=0;
for (const price of prices) {
        if(price%3 ===0)
            console.log(price)
            count++
}
console.log("No of elements Divisible by3 is:",count)