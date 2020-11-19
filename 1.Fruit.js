function solve(fruit, weightInGrams, price) {
    const weightInKilograms = weightInGrams / 1000;// преобразуване на грам в килограм
    const totalPrice = weightInKilograms * price;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);

}

solve(
    'orange', 2500, 1.80
)