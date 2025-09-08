function fib(length, num1, num2) {
    
    if(length === 0) {
        return 
    } else if (num1 === 0 && num2 === 1){
        console.log(num1)
        console.log(num2)
        length = length - 2;
    }
    let num3 = num1 + num2;
    console.log(num3)
    return fib(length - 1, num2, num3)

}

fib(10, 0 , 1)
