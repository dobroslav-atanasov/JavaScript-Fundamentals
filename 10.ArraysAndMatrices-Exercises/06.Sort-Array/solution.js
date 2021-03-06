function solve(array) {
    array.sort((a, b) => sortByLength(a, b));

    console.log(array.join('\n'));

    function sortByLength(a, b) {
        return a.length - b.length || sortByName(a, b);
    }

    function sortByName(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }
}

solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['test', 'Deny', 'omen', 'Default']);