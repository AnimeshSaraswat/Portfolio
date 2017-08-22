$(document).scroll(function () {
    var y = $(this).scrollTop();
    console.log(y);
    console.log($(document).height());
    if (y > ($(document).height() - 850)) {
        $('#linkedin').addClass('zoomInUp');
        $('#github').addClass('zoomInLeft');
        $('#gmail').addClass('zoomInDown');
        $('#facebook').addClass('zoomInRight');
    }
});
