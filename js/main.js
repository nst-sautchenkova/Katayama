//load
$(window).on('load', function () {
	$preloader = $('#loader'),
	  $loader = $preloader.find('#cube-loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
	$('body').removeClass('js-loading');

	
	$('.start-anim').addClass('anim');
});


$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
	
	$('.animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
	
});



$(document).on("ready", function () {
	$("#filter-catalog .new-act .btn").click(function () {
		$("#filter-catalog .new-act .btn").removeClass('active');
		$(this).addClass('active');
	});
});

//Минус плюс
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

$(document).on("ready", function () {
	$("#btn__left_side").click(function () {
		$("#left_side").toggleClass('show');
		$(this).toggleClass('active');
	});
});

/*MENU*/
$(document).on("ready", function () {
    $("#main-menu .cd-nav-trigger").click(function () {
        $("#main-menu").toggleClass("menu-open");
		$(".nav-bar").toggleClass("open-menu");
		$('#main-menu .bar').toggleClass('animate');
		$("body").toggleClass("open-menu");
    });
});



$(document).on("ready", function () {
	var td1 = $('#basket-page td.td-1').width();
	var td2 = $('#basket-page td.td-2').width();
	var td3 = $('#basket-page td.td-3').width();
	var td4 = $('#basket-page td.td-4').width();
	
	
	$('#basket-page td.td-1').width(td1);
	$('#basket-page td.td-2').width(td2);
	$('#basket-page td.td-3').width(td3);
	$('#basket-page td.td-4').width(td4);
});









		
					



