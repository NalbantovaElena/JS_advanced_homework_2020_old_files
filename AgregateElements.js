function solve(input) {
    let sum = 0;
    let sum2 = 0;
   
    for (let element of input) {
        sum += element;
        sum2 += 1 / element;
       
    }
    console.log(sum);
    console.log(sum2.toFixed(4));
    console.log(input.join(''));
}

solve(
    [2, 4, 8, 16]
)