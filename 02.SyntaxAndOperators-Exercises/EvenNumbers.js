function main(number) {
    for (let i = 2; i <= Number(number); i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

main(10);