function main(arg) {
    if (typeof(arg) === 'number') {
        let result = Math.pow(arg, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else {
        console.log(`We cannot calculate the circle area, because we receive a ${typeof(arg)}.`)
    }
}

main(5);
main('str');
main(true);