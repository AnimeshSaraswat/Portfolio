$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > ($(document).height() - 1100)) {
        $('#linkedin').addClass('zoomInUp');
        $('#github').addClass('zoomInLeft');
        $('#gmail').addClass('zoomInDown');
        $('#facebook').addClass('zoomInRight');
    }
});
