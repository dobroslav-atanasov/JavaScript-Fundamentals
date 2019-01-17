function main(num1, num2, num3) {
    let number = Math.max(Math.max(num1, num2), num3);
    
    console.log(`The largest number is ${number}.`);
}

main(5, -3, 16);