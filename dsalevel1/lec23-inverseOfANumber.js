function inverseOfANumber(num){
    let pos = 1;
    let dig = null;
    let invNum = 0;
    
    while(num > 0){
        dig = num % 10;
        invNum = invNum + (pos * (10**(dig - 1)))
        console.log('invNum', invNum, num, dig)
        pos++;
        num = Math.floor(num / 10)
    }
    
    return invNum
    
}

console.log(inverseOfANumber(21453))