$(function () {
    $('#carousel').carousel('pause');
    $('.navbar ul li a').click(function(){
    	return false;
    })

    $(window).scroll(function() {
        if ($(".navbar").offset().top > 30) {
            $(".navbar-fixed-top").addClass("sticky");
        }
        else {
            $(".navbar-fixed-top").removeClass("sticky");
        }
    });

});
