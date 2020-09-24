function solve(input) {
    let step = Number(input.pop());
    //console.log(step%1000); 
    for (let i = 0; i < step%1000; i++) {
        let lastElement = input.pop();
        
        input.unshift(lastElement);
    }
    console.log(input.join(' '));
}

solve(
    ['1', 
'2', 
'3', 
'4', 
'1001']



)