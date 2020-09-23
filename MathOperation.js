function solve(arg1, arg2, operator) {
    let result = 0;
    if (operator === '+') {
        result = arg1 + arg2;
    } else if (operator === '-') {
        result = arg1 - arg2;
    } else if (operator === '*') {
        result = arg1 * arg2;
    } else if (operator === '/') {
        result = arg1 / arg2;
    } else if (operator === '%') {
        result = arg1 % arg2;
    } else if (operator === '**'){
        result = arg1**arg2;
    }
    console.log(result);
}

solve(
    3, 5.5, '*'
)