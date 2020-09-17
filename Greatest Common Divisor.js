function solve(firstNumber, secondNumber) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  let lower = Math.min(firstNumber, secondNumber);
  let bigger = Math.max(firstNumber, secondNumber);
  for (let i = lower; i > 0; i--) {
    if (bigger % lower == 0) {
      output = lower;
    }
  }
  console.log(output);
}

solve(
  2154, 458
)
