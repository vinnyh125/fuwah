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

    date = new Date();
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
    ];

    y = date.getFullYear();
    m = monthList[date.getMonth()];
    d = date.getDate();
    dayOfWeek = dayOfWeekList[date.getDay()];
    hourOfDay = date.getHours();
    minuteOfDay = date.getMinutes();
    currMinutes = hourOfDay * 60 + minuteOfDay;
    console.log(date);
    console.log(currMinutes);

    document.getElementById('date').innerHTML = m.toUpperCase() + " " + d + ", " + y;
    if (dayOfWeek in dayOfWeekList.splice(4,3)) {
        if (currMinutes >= 630 && currMinutes <= 1320) {
            document.getElementById('hour-minute').innerHTML = "We are currently: OPEN";
        }
        else {
            document.getElementById('hour-minute').innerHTML = "We are currently: CLOSED";
        }
    }
    else if (dayOfWeek == "Friday" || dayOfWeek == "Saturday") {
        if (currMinutes >= 630 && currMinutes <= 1380) {
            document.getElementById('hour-minute').innerHTML = "We are currently: OPEN";
        }
        else {
            document.getElementById('hour-minute').innerHTML = "We are currently: CLOSED";
        }
    }
    else {
        if (currMinutes >= 690 && currMinutes <= 1320) {
            document.getElementById('hour-minute').innerHTML = "We are currently: OPEN";
        }
        else {
            document.getElementById('hour-minute').innerHTML = "We are currently: CLOSED";
        }
    }
    
    let slideIndex = 1;
    showSlides(slideIndex);

    var menuToggle = 0;
    
    $('.icon').click(function() {
        if (menuToggle == 0) {
            menuToggle = 1;
            $('#mobile-tabs').removeClass('hidden');
            $('#mobile-tabs').slideDown();
        }
        else {
            $('#mobile-tabs').slideUp();
            menuToggle = 0;
        }
    });

    $('#mobile-menu').click(function() {
        $('#mobile-tabs').slideUp();
        menuToggle = 0;
    });

    $('#mobile-about').click(function() {
        $('#mobile-tabs').slideUp();
        menuToggle = 0;
    });

    $('#mobile-location').click(function() {
        $('#mobile-tabs').slideUp();
        menuToggle = 0;
    });

    $('#mobile-hours').click(function() {
        $('#mobile-tabs').slideUp();
        menuToggle = 0;
    });

    $('#logo').click(function() {
        $('#mobile-tabs').slideUp();
        menuToggle = 0;
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function revealMenu() {
    var x = document.getElementById("mobile-tabs");
    if (x.style.display === 'block') {
        x.style.display = 'none';
    }
    else {
        x.style.display = 'block';
    }
}