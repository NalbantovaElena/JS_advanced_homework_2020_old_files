function solve(num1, num2) {
    let sum = 0;
    num1 = Number(num1);
    num2 = Number(num2);
    while (num1 <= num2) {
        sum += num1;
        num1 += 1;
    }
    console.log(sum);
}

solve(
    '-8', '20'
)