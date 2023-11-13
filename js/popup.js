$('.close').on('click', function(e){
	e.preventDefault();
	$('.popup').hide();
	$('.overlay').removeClass('open');		
});

//a버튼
$('a').on('click', function (e) {
    if ($(this).attr('href') == '#') {
        e.preventDefault();
    } else {

    }
})