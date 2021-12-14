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