$(function() {
//$('#content').hide().fadeIn(2000); // took fade animation out because it not load fast enough

var $window = $(window);
var $body = $('body');
var wHeight = $window.height();
var dHeight = $(document).height();

$window.on('scroll', function() {
	if ($window.scrollTop() >= ( dHeight / 3 ) )
	{
		$body.attr('id', 'bottom');
	}
	else
	{
		$body.attr('id', 'top');
	}
});

});

$('#nav li a').on('click', function(e) {
	e.preventDefault();
	var url = this.href;

	$('#container'.remove());
	$('#content').load(url + '#content').hide().fadeIn('slow');
});