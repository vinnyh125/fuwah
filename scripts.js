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
});