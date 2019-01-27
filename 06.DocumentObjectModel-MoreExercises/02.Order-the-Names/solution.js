function solve() {
    let buttonElement = document.querySelector('button');
    buttonElement.addEventListener('click', clickEvent);
    let letters = getLetters();

    function clickEvent() {
        let name = document.querySelector('input').value;
        let firstLetter = name[0].toLowerCase();
        let index = letters.indexOf(firstLetter);

        let liElements = document.querySelectorAll('li');
        let li = liElements[index];
        let names = [];
        if (li.textContent.length > 0) {
            names = li.textContent.split(', ');
        }
        names.push(name);
        li.textContent = names.join(', ');

        document.querySelector('input').value = '';
    }

    function getLetters() {
        let letters = [];

        for (let i = 97; i <= 122; i++) {
            letters.push(String.fromCharCode(i));
        }

        return letters;
    }
}
