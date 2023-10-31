$('.close').on('click', function(e){
	e.preventDefault();
	$('.popup').hide();
	$('.overlay').removeClass('open');		
});