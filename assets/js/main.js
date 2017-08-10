// Only fire if the media query returns the value I desire- use this as a wrapper

/* Turning off for possible layout change
if (Modernizr.mq('(min-width: 769px)')) {
	// header-specific sticky - I am manually using waypoints because I couldn't get the sticky plugin to function how I wanted
	var $headerNav = $('.header-inner');
	$headerNav.waypoint(function(direction){
		if (direction == 'down'){
			console.log('Waypoint down');
			$headerNav.addClass('stick');
		}else{
			$headerNav.removeClass('stick');
			console.log('Waypoint up');
		}
	});
}
*/
$( document ).ready(function() {
  	$('.menu-button').click(function() {
		$( '.primary-nav ul' ).toggleClass('is-visible');
	});  
});