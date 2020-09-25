function solve(input = []) {
    input.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b)
        } else {
            return a.length - b.length;
        }
    })
    input.forEach(el => console.log(el));
}

solve(
    ['alpha',
        'beta',
        'gamma']

)