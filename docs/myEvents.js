savedEventButton = document.getElementById("savedEvents")
createdEventButton = document.getElementById("myEvents")
savedEventButton.onclick = ShowEvents("saved-events")
createdEventButton.onclick = ShowEvents("my-events")



function ShowEvents(type) {
    let innerHTML
    console.log(`you clicked ${type}`);
    if (type == "saved events") {
        const eventListContainer = document.getElementById("CalenderEventContainer")
        innerHTML = ` 
        < a href = ""
        class = "EventContainer" >
            <
            img src = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        alt = ""
        class = "eventImage" >
            <
            div >
            <
            h2 > testing title < /h2> <
            p class = "eventDate" > 11 / 08 / 2022 < /p> <
            p class = "eventLocation" > Brussels < /p> <
            p id = "categorie"
        class = " airsoft" > airsoft < /p> <
            /div> <
            /a>

            <
            a href = ""
        class = "EventContainer" >
            <
            img src = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        alt = ""
        class = "eventImage" >
            <
            div >
            <
            h2 > testing title < /h2> <
            p class = "eventDate" > 11 / 08 / 2022 < /p> <
            p class = "eventLocation" > Brussels < /p> <
            p id = "categorie"
        class = "airsoft" > airsoft < /p> <
            /div> <
            /a><a href="" class="EventContainer"> <
            img src = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        alt = ""
        class = "eventImage" >
            <
            div >
            <
            h2 > testing title < /h2> <
            p class = "eventDate" > 11 / 08 / 2022 < /p> <
            p class = "eventLocation" > Brussels < /p> <
            p id = "categorie"
        class = "airsoft" > airsoft < /p> <
            /div> <
            /a><a href="" class="EventContainer"> <
            img src = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        alt = ""
        class = "eventImage" >
            <
            div >
            <
            h2 > testing title < /h2> <
            p class = "eventDate" > 11 / 08 / 2022 < /p> <
            p class = "eventLocation" > Brussels < /p> <
            p id = "categorie"
        class = "airsoft" > airsoft < /p> <
            /div> <
            /a> <
            a href = ""
        class = "EventContainer" >
            <
            img src = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        alt = ""
        class = "eventImage" >
            <
            div >
            <
            h2 > testing title < /h2> <
            p class = "eventDate" > 11 / 08 / 2022 < /p> <
            p class = "eventLocation" > Brussels < /p> <
            p id = "categorie"
        class = "airsoft" > airsoft < /p> <
            /div> <
            /a><a href="" class="EventContainer"> <
            img src = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        alt = ""
        class = "eventImage" >
            <
            div >
            <
            h2 > testing title < /h2> <
            p class = "eventDate" > 11 / 08 / 2022 < /p> <
            p class = "eventLocation" > Brussels < /p> <
            p id = "categorie"
        class = "airsoft" > airsoft < /p> <
            /div> <
            /a>


        `
        eventListContainer.innerHTML = innerHTML

    } else if (type == "created events")
        innerHTML = `
        < a href = ""
        class = "EventContainer" >
            <
            img src = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        alt = ""
        class = "eventImage" >
            <
            div >
            <
            h2 > testing title < /h2> <
        p class = "eventDate" > 11 / 08 / 2022 < /p> <
        p class = "eventLocation" > Brussels < /p> <
        p id = "categorie"
        class = " airsoft" > airsoft < /p> < /
            div > <
            /a>

            <
            a href = ""
        class = "EventContainer" >
            <
            img src = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        alt = ""
        class = "eventImage" >
            <
            div >
            <
            h2 > testing title < /h2> <
        p class = "eventDate" > 11 / 08 / 2022 < /p> <
        p class = "eventLocation" > Brussels < /p> <
        p id = "categorie"
        class = "airsoft" > airsoft < /p> < /
            div > <
            /a><a href="" class="EventContainer"> <
        img src = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        alt = ""
        class = "eventImage" >
            <
            div >
            <
            h2 > testing title < /h2> <
        p class = "eventDate" > 11 / 08 / 2022 < /p> <
        p class = "eventLocation" > Brussels < /p> <
        p id = "categorie"
        class = "airsoft" > airsoft < /p> < /
            div > <
            /a>
        
        
        `
    eventListContainer.innerHTML = innerHTML

}