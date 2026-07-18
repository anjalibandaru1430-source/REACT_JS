let input=require('prompt-sync')()

let num=parseInt(input("Enter Number:"))

num>=100 && num<=999 ? console.log("3 Digit No"):
                       console.log("Not a 3 Digit Number")