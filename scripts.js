$(document).ready(function() {
    var toggle = 0;

    $('.navbar a').on('click', function() {
        $('.navbar a').not(this).removeClass('underline');
        $(this).toggleClass('underline');
        if (!$(this).hasClass('dropbtn') && toggle == 1) {
            $('.dropdown-content').hide();
            toggle = 0;
        }
    });
    
    $('.dropbtn').click(function() {
        if (toggle == 0) {
            toggle = 1;
            $('.dropdown-content').show();
        }
        else {
            $('.dropdown-content').hide();
            toggle = 0;
        }
    });

    n = new Date();
    const monthList = [
        "January", "February", 
        "March", "April", 
        "May", "June", 
        "July", "August", 
        "September", "October", 
        "November", "December"
    ];
    const dayOfWeekList = [
        "Monday", "Tuesday",
        "Wednesday", "Thursday",
        "Friday", "Saturday", 
        "Sunday"
    ]

    y = n.getFullYear();
    m = monthList[n.getMonth()];
    d = n.getDate();
    dayOfWeek = dayOfWeekList[n.getDay()];
    hourOfDay = n.getHours();
    minuteOfDay = n.getMinutes();
    restOpen = document.getElementById('hour-minute').innerHTML = "We are currently: OPEN"
    restClosed = document.getElementById('hour-minute').innerHTML = "We are currently: CLOSED"

    document.getElementById('date').innerHTML = m.toUpperCase() + " " + d + ", " + y;
    if (dayOfWeek in dayOfWeekList.splice(4,3)) {
        if (hourOfDay < 22) {
            if (hourOfDay >= 10) {
                if (hourOfDay == 10 && minuteOfDay >= 30) {
                    restOpen;
                }
                else if (hourOfDay == 10 && minuteOfDay < 30) {
                    restClosed;
                }
                else {
                    restOpen;
                } 
            }
            else {
                restOpen;
            }
        }
        else {
            restClosed;
        }
    }
    else if (dayOfWeek == "Friday" || dayOfWeek == "Saturday") {
        if (hourOfDay < 23) {
            if (hourOfDay >= 10) {
                if (hourOfDay == 10 && minuteOfDay >= 30) {
                    restOpen;
                }
                else if (hourOfDay == 10 && minuteOfDay < 30) {
                    restClosed;
                }
                else {
                    restOpen;
                } 
            } 
            else {
                restOpen;
            } 
        }
        else {
            restClosed;
        }
    }
    else {
        if (hourOfDay < 22) {
            if (hourOfDay >= 11) {
                if (hourOfDay == 11 && minuteOfDay >= 30) {
                    restOpen;
                }
                else if (hourOfDay == 11 && minuteOfDay < 30) {
                    restClosed;
                }
                else {
                    restOpen;
                }
            }
            else {
                restOpen;
            }
        }
        else {
            restClosed;
        }
    }
});