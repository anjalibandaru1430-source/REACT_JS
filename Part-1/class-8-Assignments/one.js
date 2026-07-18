let prices=[23,678,1055,34,544,554,43,786,333,100]
let i=0;
while(i<=prices.length-1){
    if(prices[i]>=500){
        console.log(prices[i])
        break; //stop iteration
    }
    i++;
}