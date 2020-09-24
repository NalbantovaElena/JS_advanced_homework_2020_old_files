function solve(input) {
    let arr = [];
    let pattern = /(\w+)/g;
    let found = input.match(pattern);
    for (let element of found) {
        element = element.toUpperCase();
        arr.push(element);
    }
    console.log(arr.join(', '));
}

solve(
    'Hi, how are you?'
)