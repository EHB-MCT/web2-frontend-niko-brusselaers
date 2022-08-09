const login = document.getElementById('loginForm')
login.addEventListener('submit', (event) => {
    event.preventDefault();
    //read all fields values and send the data to rest api
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const keepSingedIn = document.getElementById('keepSignedIn').checked
    //https://web2-backend-niko-brusselaers.herokuapp.com
    fetch(`http://localhost:3000/login`, {
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
            // if successful, store the username and userId in  sessionStorage so the user stays logged in during current session. or localstorage when the user has checked keepSignedIn box.
            console.log(response);
            sessionStorage.setItem("id", response.id[0]);
            sessionStorage.setItem('username', response.username);
            if (keepSingedIn) {
                localStorage.setItem('id', response.id[0]);
                localStorage.setItem('username', response.username);
            }
            // reroute to the main page after successful login
            console.log(response);
            window.location.replace("index.html");
        }).catch((error) => {
            console.log(error);
        })
})