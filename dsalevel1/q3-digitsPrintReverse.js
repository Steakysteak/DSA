function digitsPrintRev(num) {
    if (num === 0) return
    digitsPrintRev(Math.floor(num / 10))
    console.log(num % 10)
}

digitsPrintRev(123405)