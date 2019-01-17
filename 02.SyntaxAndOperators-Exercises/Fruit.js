function main(fruit, weight, price) {
    let weightInKg = weight / 1000;
    let totalPrice = weightInKg * price;

    console.log(`I need ${totalPrice.toFixed(2)} leva to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

main('orange', 2500, 1.80);
main('apple', 1563, 2.35);