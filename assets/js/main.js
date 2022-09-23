let days_el = document.getElementById("days")
let hours_el = document.getElementById("hours")
let mins_el = document.getElementById("minutes")
let seconds_el = document.getElementById("seconds")

let launch_date = new Date("Oct 01, 2022 12:00:00")

function count_down(){
    let count = launch_date - new Date()

    let total_seconds = (count)/ 1000

    let days = Math.floor(total_seconds / 3600 / 24)
    if (days < 10) { days = "0" + days; }

    let hours = Math.floor(total_seconds / 3600) % 24
    if (hours < 10){ hours = "0" + hours}

    let minutes = Math.floor(total_seconds / 60) % 60
    if (minutes < 10){ minutes = "0" + minutes}

    let seconds = Math.floor(total_seconds) % 60
    if (seconds < 10){ seconds = "0" + seconds}

    days_el.innerText = days
    hours_el.innerText = hours
    mins_el.innerText = minutes
    seconds_el.innerText = seconds
}

count_down()

setInterval(count_down, 1000)