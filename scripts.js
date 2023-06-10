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
    y = n.getFullYear();
    m = monthList[n.getMonth()];
    d = n.getDate();
    document.getElementById('date').innerHTML = m.toUpperCase() + " " + d + ", " + y;
});