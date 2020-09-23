function solve(arg1, arg2, arg3) {

    let lengthArg1 = arg1.length;
    let lengthArg2 = arg2.length;
    let lengthArg3 = arg3.length;
    let lengthAll = lengthArg1 + lengthArg2 + lengthArg3;
    console.log(lengthAll);
    let average = Math.floor(lengthAll / 3);
    console.log(average);
}

solve(
    'pasta', '5', '22.3'
)