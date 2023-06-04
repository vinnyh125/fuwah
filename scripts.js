$(document).ready(function() {
    $('.navbar a').on('click', function() {
        $('.navbar a').not(this).removeClass('underline');
        $(this).toggleClass('underline');
      });
});