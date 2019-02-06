function solve() {
    let totalMoney = 0;
    let fans = 0;

    let sections = document.querySelectorAll('section');

    for (let section of sections) {
        let trs = section.querySelectorAll('table tbody tr');
        for (let tr of trs) {
            let tds = tr.children;
            for (let i = 0; i < 3; i++) {
                let button = tds[i].querySelector('button');
                button.addEventListener('click', function () {
                    clickEvent(button, i, section.className);
                });
            }
        }
    }

    let div = document.getElementById('summary');
    let summaryButton = div.querySelector('button');
    summaryButton.addEventListener('click', () => {
        let span = div.querySelector('span');
        span.textContent = `${totalMoney} leva, ${fans} fans.`;
    });

    function clickEvent(button, i, sectionName) {
        let result = document.getElementById('output');
        let sector = getSector(i);

        let style = button.getAttribute('style');
        if (style) {
            result.textContent += ` Seat ${button.textContent} in zone ${sectionName} sector ${sector} is unavailable.\n`;
        } else {
            button.style.color = 'rgb(255,0,0)';
            let money = getSeatMoney(i, sectionName);
            totalMoney += money;
            fans++;

            result.textContent += ` Seat ${button.textContent} in zone ${sectionName} sector ${sector} was taken.\n`;
        }
    }

    function getSector(i) {
        switch (i) {
            case 0: return 'A';
            case 1: return 'B';
            case 2: return 'C';
        }
    }

    function getSeatMoney(index, sectionName) {
        switch (sectionName) {
            case 'VIP':
                switch (index) {
                    case 0: return 25;
                    case 1: return 15;
                    case 2: return 10;
                }
                break;
            default:
                switch (index) {
                    case 0: return 10;
                    case 1: return 7;
                    case 2: return 5;
                }
                break;
        }
    }
}