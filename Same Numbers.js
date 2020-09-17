function solve(number) {
    let lastDigit = number % 10;
    let sum = 0;
    let count = 0;
    while (number / 10 > 0) {
        let digit = number % 10;
        if (digit !== lastDigit) {
            count++;
        }
        sum += digit;
        number = Math.floor(number / 10);
    }
    if(count===0){
        console.log(true);
    }else{
        console.log(false);
    }
    
    console.log(sum);
}

solve(
    1234
)