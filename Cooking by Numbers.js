function solve(input = []) {
    let num = Number(input.shift());

    for (let element of input) {
        if (element === 'chop') {
            num = num / 2;
        } else if (element === 'dice') {
            num = Math.sqrt(num);
        } else if (element === 'spice') {
            num = num + 1;
        } else if (element === 'bake') {
            num = num * 3;
        } else if (element === 'fillet') {
            num = num - num * 0.2;
        }
        console.log(num);
    }
}

solve(
    ['9', 'dice', 'spice', 'chop', 'bake', 'fillet']
)