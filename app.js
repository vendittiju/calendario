function digitalClock() {
    let dateFunction = new Date();
    let hours = dateFunction.getHours();
    let minutes = dateFunction.getMinutes();
    let seconds = dateFunction.getSeconds();
    let timeFormat = 'AM';

    // Determine AM/PM
    timeFormat = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12; // 0 becomes 12
    hours = hours < 10 ? '0' + hours : hours;

    // Pad minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update clock display
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
    document.querySelector('.format').innerHTML = timeFormat;
}

setInterval(digitalClock, 1000);

let newDateFunction = new Date();

function renderDate() {
    newDateFunction.setDate(1);
    let dayOfWeek = newDateFunction.getDay();

    let currentDate = new Date(
        newDateFunction.getFullYear(),
        newDateFunction.getMonth() + 1, 0
    ).getDate(); // Last date of the current month

    let prevDate = new Date(
        newDateFunction.getFullYear(),
        newDateFunction.getMonth(), 0
    ).getDate(); // Last date of the previous month

    let addNextDate = new Date(
        newDateFunction.getFullYear(),
        newDateFunction.getMonth() + 1, 0
    ).getDate(); // Last date of the next month

    let addNext = addNextDate + 7;

    let month = newDateFunction.getMonth();
    let year = newDateFunction.getFullYear();
    let monthArr = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    document.getElementById("month").innerHTML = monthArr[month] + " - " + year;

    let today = new Date();
    let weekDay = today.getDay();
    document.getElementById("date").innerHTML = today.toDateString();
    
    // Ensure selector syntax is valid
    document.querySelector(`.week:nth-child(${weekDay + 1})`).classList.add("active");

    let DATES = "";

    // Previous month's dates
    for (let x = dayOfWeek; x > 0; x--) {
        DATES += "<div class='prev'>" + (prevDate - x + 1) + "</div>";
    }

    // Current month's dates
    for (let i = 1; i <= currentDate; i++) {
        if (i === today.getDate() && newDateFunction.getMonth() === today.getMonth() && newDateFunction.getFullYear() === today.getFullYear()) {
            DATES += "<div class='today'>" + i + "</div>";
        } else {
            DATES += "<div>" + i + "</div>";
        }
    }

    // Next month's dates
    for (let k = 1; k <= addNext; k++) {
        DATES += "<div class='next'>" + k + "</div>";
    }

    document.querySelector('.dates').innerHTML = DATES;
}

function moveDate(para) {
    if (para === 'prev') {
        newDateFunction.setMonth(newDateFunction.getMonth() - 1);
    } else if (para === 'next') {
        newDateFunction.setMonth(newDateFunction.getMonth() + 1);
    }

    renderDate();
}
