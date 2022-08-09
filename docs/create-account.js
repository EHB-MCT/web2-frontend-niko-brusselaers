const createAccount = document.getElementById("createAccountForm");
createAccount.addEventListener('click', (event) => {
    event.preventDefault();
    //read all fields values
    const username = document.getElementById('username').value.toString();
    const password = document.getElementById('password').value.toString();
    const passwordConfirm = document.getElementById('passwordConfirm').value.toString();
    const email = document.getElementById('email').value.toString();
    const firstname = document.getElementById('firstname').value.toString();
    const lastname = document.getElementById('lastname').value.toString();
    // if the password has been correctly typed twice, send request to rest api who checks if a account with same username or email already exists.
    if (password == passwordConfirm) {
        //https://web2-backend-niko-brusselaers.herokuapp.com
        fetch(`http://localhost:3000/create-account`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                    "email": email,
                    "firstname": firstname,
                    "lastname": lastname
                })
            })
            // if no user already exists with same username or email, api creates account and user gets rerouted to the login page
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                window.location.replace("login.html");
            }).catch((error) => {
                console.error(error);
            })
    } else {
        console.log({
            error: "password doesnt match"
        });
    }
})