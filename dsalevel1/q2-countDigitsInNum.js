function countDigits(num){
    let count = 0
    while (num > 0){
        count++
        num = Math.floor(num/10)
    }
    console.log(count)
}

countDigits(1234507)