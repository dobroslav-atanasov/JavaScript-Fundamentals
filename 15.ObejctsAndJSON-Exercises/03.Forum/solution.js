function solve() {
    let users = [];
    let submitButton = document.getElementsByTagName('button')[0];
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        let userDiv = document.querySelectorAll('div.user-info input');
        let name = userDiv[0].value;
        let password = userDiv[1].value;
        let email = userDiv[2].value;
        users.push({name, password, email});

        let tdUsername = document.createElement('td');
        tdUsername.textContent = name;
        let tdEmail = document.createElement('td');
        tdEmail.textContent = email;
        let tdPassword = document.createElement('td');
        tdPassword.textContent = password;

        let tr = document.createElement('tr');
        tr.appendChild(tdUsername);
        tr.appendChild(tdEmail);
        tr.appendChild(tdPassword);

        let tableElement = document.getElementsByTagName('tbody')[0];
        tableElement.appendChild(tr);
    });

    let searchButton = document.getElementsByTagName('button')[1];
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
    });
}