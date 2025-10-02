function rotANum(num, k){
    let nod = 0;
    let temp = num;
    while(temp != 0){
        temp = Math.floor(temp / 10);
        nod++
    }
    k = k % nod;
    if(k < 0){
        k = k + nod
    }
    
    let divider = 10 ** k;
    let multiplier = 10 ** (nod - k);
    
    let rotNum = ((num % divider) * multiplier) + Math.floor(num / divider)
    console.log('info', Math.floor(num/divider))
    return rotNum
}
console.log(rotANum(27391, -1));