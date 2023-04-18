document.onkeydown = function(event) {
	switch(event.keyCode) {
		case 38: // up
			if(typeof kbUp != "undefined") location.href = kbUp;
			break;
		case 37: // prev
			if(typeof kbPrev != "undefined") location.href = kbPrev;
			break;
		case 39: // next
			if(typeof kbNext != "undefined") location.href = kbNext;
			break;
	}
};
function fixTitlebar() {
	var iconCount = $('#ja-navleft img').length + $('#ja-navright img').length;
	if((window.innerHeight < 500 || window.innerWidth < 500) && iconCount > 0) {
		var navH = $('#ja-navleft').outerHeight(false);
		if(navH > 32) {
			$('#ja-navleft, #ja-navright').css({'height': '32px'});
			$('#ja-navleft img, #ja-navright img').css({'height': '32px', 'width': '32px'});
			navH = 32;
		}
		$('#ja-navleft, #ja-navright').css({'width': 'auto'});
		if($('.ja-logo').length) {
			$('.ja-logo').css({'padding-top': (5 + navH).toString() + 'px'});
		}
		else {
			$('.ja-pagetitle, .ja-pagetitleTI').css({'padding-top': (5 + navH).toString() + 'px'});
		}
	}
	if(($('#ja-nothemebanner').css('z-index')) == '1') {
		if(window.innerHeight < 500 || window.innerWidth < 500) {
			$('#ja-nothemebanner').css({'position': 'static'});
			$('#ja-scrollcontainer').css({'padding-top': '0px'});
		}
		else {
			var bannerH = $('#ja-nothemebanner').outerHeight(true) || 0;
			$('#ja-nothemebanner').css({'position': 'fixed'});
			$('#ja-scrollcontainer').css({'padding-top': bannerH.toString() + 'px'});
		}
	}
	if(window.innerHeight < 500 || window.innerWidth < 500) {
		$('#ja-bctrail').css({'display': 'none'});
	}
	else {
		$('#ja-bctrail').css({'display': ''});
	}
};
function checkCaptions() {
	var maxfHeight = 0;
	if($('.ja-fthumbcaption').length) {
		$('.ja-fthumbcaption').each(function(){
			maxfHeight = $(this).height() > maxfHeight ? $(this).height() : maxfHeight;
		});
		if(maxfHeight > 0) {
			$('.ja-fthumbcaption').css({'min-height': maxfHeight.toString() + 'px'});
		}
		else {
			$('.ja-fthumbcaption').css({'display': 'none'});
		}
	}
	if(maxfHeight == 0 && fthumbGrid == 0) {
		$('#ja-fthumbs > div > div:first-of-type').css({'width': 'auto'});
	}
	var maxHeight = 0;
	if($('.ja-thumbcaption').length) {
		$('.ja-thumbcaption').each(function(){
			maxHeight = $(this).height() > maxHeight ? $(this).height() : maxHeight;
		});
		if(maxHeight > 0) {
			$('.ja-thumbcaption').css({'min-height': maxHeight.toString() + 'px'});
		}
		else {
			$('.ja-thumbcaption').css({'display': 'none'});
		}
	}
	if(maxHeight == 0 && thumbGrid == 0) {
		$('#ja-thumbs > div > div:first-of-type').css({'width': 'auto'});
	}
};
function topScroll() {
	$(window).scroll(function(){
		if($(window).scrollTop() > 400) {
			$('#ja-pagetop').fadeIn(700);
		}
		else {
			$('#ja-pagetop').fadeOut(700);
		}
	});
	$('#ja-pagetop').click(function(){
		$('body,html').animate({scrollTop:0},700);
		return false;
	});
};
function retainPos() {
	var pathName = document.location.pathname;
	pathName = pathName.substring(0, pathName.lastIndexOf("/")) + "/"
	window.onbeforeunload = function () {
		var scrollPosition = $(document).scrollTop();
		sessionStorage.setItem("scrollPosition_" + pathName, scrollPosition.toString());
	}
	if (sessionStorage["scrollPosition_" + pathName]) {
		$(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
	}
};
function init() {
	fixTitlebar();
	checkCaptions();
	topScroll();
	retainPos();
};
$(document).ready(init);
