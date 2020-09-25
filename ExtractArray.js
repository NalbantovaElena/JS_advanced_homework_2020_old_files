function solve(input = []) {
  let max = Number.MIN_SAFE_INTEGER;
  //let arr = [];
  // input.forEach(num => {
  //   if (num >= max) {
  //     max = num;
  //     arr.push(max);
  //   }
  // })
  input = input.filter(num => {
    if (num >= max) {
      max = num;
      return true;
    }
    return false;
  }).forEach(e=>console.log(e));
 
}
solve(
  [1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]

)