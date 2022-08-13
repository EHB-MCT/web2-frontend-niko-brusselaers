const createEventBtn = document.getElementById("createEventButton");
const closeCrEvBtn = document.getElementById("closeOverlay");
const logoutBtn = document.getElementById("logoutBtn")

//checks if there is a user id stored in session or localstorage
window.onload = function () {
    let username, userId
    if (sessionStorage.getItem('id') !== null) {
        username = sessionStorage.getItem('username');
        userId = sessionStorage.getItem('id');
        loginId(username, userId);

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
            sessionStorage.setItem('useractive', "true")
            if (document.URL.includes('login') || document.URL.includes('create-account')) {
                window.location.replace("index.html");
            } else {
                sidenavButtons()
            }

        }).catch((error) => {
            console.log(error);
            const userActive = document.getElementById("userActive")
            sessionStorage.setItem("useractive", "false")

        })
}

//if user is logged in, add multipule buttons and remove sign in button
function sidenavButtons() {
    document.getElementById("loginBtn").classList.add("hidden")
    document.getElementById("createEventButton").classList.remove("hidden")
    document.getElementById("myAccountBtn").classList.remove("hidden")
    document.getElementById("MyeventsBtn").classList.remove("hidden")
    document.getElementById("logoutBtn").classList.remove("hidden")

};


// removes the overlayHidden class, making create event form visible
createEventBtn.addEventListener("click", () => {
    console.log("create");
    let overlayCreateEvent = document.getElementById("overlayCreateEvent")
    overlayCreateEvent.classList.remove("hidden")

})

// adds the overlayHidden class, removing create event form

closeCrEvBtn.addEventListener("click", () => {
    let overlayCreateEvent = document.getElementById("overlayCreateEvent")
    overlayCreateEvent.classList.add("hidden")

})

// removes localstorage and sessionstorage data and brings the user to the main page
logoutBtn.addEventListener('click', () => {
    console.log("click");
    localStorage.clear();
    sessionStorage.clear();
    if (document.URL.includes('my-Account') || document.URL.includes('my-Events')) {
        window.location.replace("index.html");
    } else {
        location.reload();
    }


})

//starts init for address autocomplete trough google maps api and apply some parameters
window.initAutocomplete = function () {

    let autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
        componentRestrictions: {
            'country': ['be']
        },
        fields: ['geometry', 'name'],
        types: []
    })
}


const createEvent = document.getElementById("createEventForm");
createEvent.addEventListener('submit', (event) => {
    event.preventDefault();
    //read all fields values
    const newEvent = {
        title: document.getElementById('title').value.toString(),
        startDate: document.getElementById('startDate').value.toString(),
        startTime: document.getElementById('startTime').value.toString(),
        endTime: document.getElementById('endTime').value.toString(),
        location: document.getElementById('location').value.toString(),
        price: document.getElementById('price').value.toString(),
        description: document.getElementById('description').value.toString()
    }

});