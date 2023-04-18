$(function() {
	$('#ja-swipe').swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
			if(fingerCount!=0) junext();
		},
        swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
			if(fingerCount!=0) juprev();
		},
		threshold:75,
		fingers:1,
		maxTimeThreshold:1000
	});
});
function junext() {
  $('#ja-nextarrow').trigger('click');
}
function juprev() {
  $('#ja-prevarrow').trigger('click');
}
