
window.initAutocomplete = function () {

let autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
    componentRestrictions: {
        'country': ['be']
    },
    fields: ['geometry', 'name'],
    types: []
})
}
/*

const createEvent = document.getElementById("createEventForm");
createEvent.addEventListener('click', (event) => {
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
*/