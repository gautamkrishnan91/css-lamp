$('.lamp-switch').click(function(){
	$('.lamp-switch-hanging').toggleClass('moveDown');
	$('.lamp-switch').toggleClass('moveDown');
	$('.lamp-bulb').toggleClass('lightUp');
	$('.bulbBottom').toggleClass('lightUp');
	$('body').toggleClass('lighter');
})