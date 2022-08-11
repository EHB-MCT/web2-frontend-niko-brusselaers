const createAccount = document.getElementById("createAccountForm");
createAccount.addEventListener('click', (event) => {
    event.preventDefault();
    //read all fields values
    const newUser = {
        "username": document.getElementById('username').value.toString(),
        "password": document.getElementById('password').value.toString(),
        "passwordConfirm": document.getElementById('passwordConfirm').value.toString(),
        "email": document.getElementById('email').value.toString(),
        "firstname": document.getElementById('firstname').value.toString(),
        "lastname": document.getElementById('lastname').value.toString()
    };
    // if the password has been correctly typed twice, send request to rest api who checks if a account with same username or email already exists.
    if (newUser.password == newUser.passwordConfirm) {
        let statusCode
        //https://web2-backend-niko-brusselaers.herokuapp.com
        fetch(`http://localhost:3000/create-account`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": newUser.username,
                    "password": newUser.password,
                    "email": newUser.email,
                    "firstname": newUser.firstname,
                    "lastname": newUser.lastname
                })
            })
            // if no user already exists with same username or email, api creates account and user gets rerouted to the login page
            .then((response) => {
                statusCode = response.status;
                return response.json();
            })
            .then(data => {
                // if the account has been succesfully created and we recieve code 200, we go to login page.
                if (statusCode == 200) {
                    window.location.replace("login.html");
                }
            }).catch((error) => {
                console.error(error);
            })
    } else {
        console.log({
            error: "password doesnt match"
        });
    }
})