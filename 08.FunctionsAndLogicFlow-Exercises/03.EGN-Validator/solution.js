function validate() {
    let yearElement = document.getElementById('year');
    let monthElement = document.getElementById('month');
    let dateElement = document.getElementById('date');

    let button = document.querySelector('button');

    button.addEventListener('click', getEgn);
    function getEgn(e) {
        let egnString = '';
        egnString += yearElement.value;
        egnString += getMonthNumber();
        egnString += dateElement.value;

        console.log(egnString);
    }

    function getMonthNumber() {
        switch (monthElement.value) {
            case 'January': return '01';
            case 'February': return '02';
            case 'March': return '03';
            case 'April': return '04';
            case 'May': return '05';
            case 'June': return '06';
            case 'July': return '07';
            case 'August': return '08';
            case 'September': return '09';
            case 'October': return '10';
            case 'November': return '11';
            case 'December': return '12';
            default:
                break;
        }
    }
}