function rev(num){
    while(num !== 0){
        console.log(num%10)
        num = Math.floor(num/10)
    }
}

rev(123405)