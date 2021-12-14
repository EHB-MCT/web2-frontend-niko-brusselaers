const createAccount = document.getElementById("createAccount");
createAccount.addEventListener('click', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.toString();
    const password = document.getElementById('password').value.toString();
    const passwordConfirm = document.getElementById('passwordConfirm').value.toString();
    const email = document.getElementById('email').value.toString();
    const firstname = document.getElementById('firstname').value.toString();
    const lastname = document.getElementById('lastname').value.toString();

    if(password == passwordConfirm) {
        fetch("http://localhost:3000/create-account", {
        method: "POST",
        headers:{'Content-Type': 'application/json',},
        body: JSON.stringify({
            "username": username,
            "password": password,
            "email": email,
            "firstname": firstname,
            "lastname":lastname
        })
    })
    .then((response) => response.json())
    .then(data => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    })} else {
        console.log({error: "password doesnt match"});
    }
})

const login = document.getElementById('login')

login.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            localStorage.setItem('id', response.id[0]);
            console.log(localStorage.getItem(id).value);
        }).catch((error) => {
            console.log(error);
        })
})