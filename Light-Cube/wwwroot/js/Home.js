//This is Used for the Back To Top Button
$(document).ready(function () {
$('#toTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});
});