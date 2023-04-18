document.onkeydown = function(event) {
	switch(event.keyCode) {
		case 38: // up
			location.href = kbUp;
			break;
		case 37: // prev
			if(typeof kbPrev != "undefined") location.href = kbPrev;
			break;
		case 39: // next
			if(typeof kbNext != "undefined") location.href = kbNext;
			break;
	}
};
function correctWidth() {
	var winH = window.innerHeight;
	var winW = window.innerWidth;
	if(respI && $('#ja-slidecaption').height() < 50) {
		respI = false;
	}
	var minOne = 0;
	if(respI) {
		if($('.ja-slidetitle').length) {
			minOne += 5 + Math.ceil(1.2 * parseFloat($('.ja-slidetitle').css('font-size')));
		}
		else if($('.ja-slidecomment').length) {
			minOne += Math.ceil(1.2 * parseFloat($('.ja-slidecomment').css('font-size')));
		}
	}
	var classes = ['.ja-bodyopeningslide', '#ja-slidebanner', '#ja-slidestd'];
	if(!respI) {
		classes.push('#ja-slidecaption', '.ja-copyright', '.ja-bodyclosingslide');
	}
	if(winH < 500 || winW < 500) {
		if($('#ja-navleftslide').outerHeight(false) > 32) {
			$('#ja-navleftslide, #ja-navrightslide').css({'height': '32px'});
			$('#ja-navleftslide img, #ja-navrightslide img').css({'height': '32px', 'width': '32px'});
		}
		$('body').css({'margin': '0px'});
		$('#ja-navleftslide, #ja-navrightslide').css({'width': 'auto'});
		$('#ja-slideobject').css({'padding': '0px 5px', 'margin': '0px auto 10px'});
		$('#ja-slideobject > div').css({'border-width': '1px', 'padding': '0px', 'box-shadow': 'none'});
		$('#ja-slidecaption').css({'padding': '0px'});
		$('#ja-prev, #ja-next').css({'display': 'none'});
		$('#ja-slidebanner, #ja-slidestd').css({'margin-bottom': '5px', 'border': 'none', 'box-shadow': 'none'});
		$('#ja-slideobject > div, #ja-slideobject img, video, audio').css({'border-radius': '0px'});
		var imgB = $('#ja-slideobject > div').outerHeight() - $('#ja-slideobject > div').innerHeight();
		if(hideTI) {
			$('.ja-pagetitleslide').css({'display': 'none'});
 		}
		else {
			$('.ja-pagetitleslide').css({'text-overflow': 'ellipsis', 'white-space': 'nowrap', 'overflow': 'hidden'});
		}
		if(hideOP) {
			$('.ja-bodyopeningslide').css({'display': 'none'});
		}
		if(hideCL) {
			$('.ja-bodyclosingslide').css({'display': 'none'});
		}
		if(hideMD) {
			$('.ja-slidemeta').css({'display': 'none'});
		}
		var targetH = minOne;
		targetH += imgH + 15;
		for(var i = 0 ; i < classes.length ; i++) {
			targetH += $(classes[i]).outerHeight(true) || 0;
		}
	}
	else {
		$('#ja-navleftslide, #ja-navrightslide').css({'height': ''});
		$('#ja-navleftslide img, #ja-navrightslide img').css({'height': '', 'width': ''});
		if(!respI) {
			$('body').css({'overflow-y': 'hidden'});
		}
		$('body').css({'margin': ''});
		$('#ja-navleftslide, #ja-navrightslide').css({'width': ''});
		$('#ja-slideobject').css({'padding': '', 'margin': ''});
		$('#ja-slideobject > div').css({'border-width': '', 'padding': '', 'box-shadow': ''});
		$('#ja-slideobject').css({'max-width': ''});
		$('#ja-slidecaption').css({'padding': ''});
		$('.ja-slidemeta').css({'display': ''});
		$('#ja-prev, #ja-next, .ja-bodyopeningslide, .ja-bodyclosingslide').css({'display': ''});
		$('#ja-slidebanner, #ja-slidestd').css({'margin-bottom': '', 'border': '', 'box-shadow': ''});
		$('.ja-pagetitleslide').css({'display': '', 'text-overflow': '', 'white-space': '', 'overflow': ''});
		$('#ja-slideobject > div, #ja-slideobject img, video, audio').css({'border-radius': ''});
		var imgB = $('#ja-slideobject > div').outerHeight() - $('#ja-slideobject > div').innerHeight();
		var imgP = $('#ja-slideobject').innerHeight() - $('#ja-slideobject').height();
		var imgM = $('#ja-slideobject').outerHeight(true) - $('#ja-slideobject').outerHeight();
		var targetH = minOne;
		targetH += imgH + imgB + imgP + imgM + 15;
		for(var i = 0 ; i < classes.length ; i++) {
			targetH += $(classes[i]).outerHeight(true) || 0;
		}
	}
	var newW = imgW + imgB;
	if(window.pano == null) {
		if(targetH >= winH) {
			var newH = imgH - (targetH - winH);
			var newIW = Math.floor(imgAR * newH);
			var lowLimit = Math.min(250, imgW);
			var newW = imgB + Math.max(lowLimit, newIW);
			if(!respI) {
				if(newIW < lowLimit) {
					$('body').css({'overflow': 'visible'});
				}
				else {
					$('body').css({'overflow': 'hidden'});
				}
			}
			$('#ja-slideobject').css({'max-width': newW + 'px'});
		}
	}
	else {
		if(targetH >= winH) {
			if(winH < 500 || winW < 500) {
				$('#ja-panscroll > img').css({'height': (imgH - (targetH - winH)) + 'px'});
			}
			else {
				$('#ja-panscroll > img').css({'height': (imgH - (targetH - winH) - 20) + 'px'});
			}
		}
		else {
			$('#ja-panscroll > img').css({'height': 'auto'});
		}
		if(window.panocenter != null) {
			var ps = $('#ja-panscroll').width();
			var iw = $('#ja-panscroll > img').width();
			$('#ja-panscroll').scrollLeft((iw - ps) / 2);
		}
	}
	var captH = $('#ja-slidecaption').height();
	$('#ja-slidecaption').css({'max-width': $('#ja-slideobject').width().toString() + 'px'});
	var newcaptH = $('#ja-slidecaption').height();
	if(newcaptH > captH) {
		$('#ja-slidecaption').css({'max-width': ''});
	}
};
function centerScroll() {
	if(window.panocenter != null) {
		var ps = $('#ja-panscroll').width();
		var iw = $('#ja-panscroll > img').width();
		$('#ja-panscroll').scrollLeft((iw - ps) / 2);
	}
};
var imgAR = imgW / imgH;
$(document).ready(correctWidth);
$(window).on("load", centerScroll);
$(window).resize(correctWidth);
