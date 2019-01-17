function main(n, m) {
    let startNum = Number(n);
    let endNum = Number(m);
    let sum = 0;
    
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }

    console.log(sum);
}

main(10, 20);