$(function () {
    $('#carousel').carousel('');
    $('.navbar ul li a').click(function(){
    	return false;
    })

    $('.hidden').hide().removeClass('hidden');

    $(window).scroll(function() {
        if ($(".navbar").offset().top > 30) {
            $(".navbar-fixed-top").addClass("sticky");
        }
        else {
            $(".navbar-fixed-top").removeClass("sticky");
        }
    });


    function menuHideAll(){
	$('.menu-nav-item').hide();
    }

    function siteHideAll(){
	$('.navbar-nav .active').removeClass('active');
	$('.carousel-caption').hide();
	$('.site-nav-item').hide();
    }

    $('#lunch').click(function(){
        menuHideAll();
	$('#menu-nav-lunch').show();
	return false;
    });

    $('#dinner').click(function(){
        menuHideAll();	    
	$('#menu-nav-dinner').show();
	return false;
    });

    $('#site-nav-home').click(function(){
	siteHideAll();
	$(this).parent().addClass('active');
	$('#about').show();
	return false;	
    });

    $('#site-nav-about').click(function(){
	siteHideAll();
	$(this).parent().addClass('active');
	$('#about').show();
	return false;	
    });

    $('#site-nav-menu').click(function(){
	siteHideAll();
	$(this).parent().addClass('active');
	$('#menu').show();
	return false;	
    });

    $('#site-nav-gallery').click(function(){
	siteHideAll();
	$(this).parent().addClass('active');
	$('.carousel-caption').show();
	return false;	
    });
    
    $('#site-nav-luigi').click(function(){
	siteHideAll();
	$(this).parent().addClass('active');
	return false;	
    });
    $('#site-nav-cater').click(function(){
	siteHideAll();
	$(this).parent().addClass('active');
	return false;	
    });
    $('#site-nav-contact').click(function(){
	siteHideAll();
	$(this).parent().addClass('active');
	return false;	
    });
});

