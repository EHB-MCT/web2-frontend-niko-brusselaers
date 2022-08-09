// when the page loads, checks for id and username in localStorage and sessionStorage
window.onload = function () {
    let username, userId
    if (sessionStorage.getItem('id') !== null) {
        username = sessionStorage.getItem('username');
        userId = sessionStorage.getItem('id');
       (username, userId);

    } else if (localStorage.getItem('id') !== null) {
        username = localStorage.getItem('username');
        userId = localStorage.getItem('id');
        loginId(username, userId);
    }

}

// when there is userId and userName stored, sends request to rest api and checks if stored credentials are correct
function loginId(username, userId) {
    console.log("sending request to login");
    fetch(`http://localhost:3000/loginId`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": username,
                "userId": userId
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (document.URL.includes('login') || document.URL.includes('create-account')) {
                window.location.replace("index.html");
            }

        }).catch((error) => {
            console.log(error);
        })
}