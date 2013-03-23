

var home = "home-wrapper"
var bus = "business-wrapper"
var news = "news-wrapper"


// If document has the pages wrapper div
if ( (document.getElementById() ) == home) {
	// Show the appropriate blue square in the nav
	$('ul > li > a').eq(0).css('background-image' , 'url(images/page-indicator.png)');
	$('ul > li > a').eq(0).css('background-repeat' , 'no-repeat');

} else if ( (document.getElementById()) == bus {
	$('ul > li > a').eq(1).css('background-image' , 'url(images/page-indicator.png)');
	$('ul > li > a').eq(1).css('background-repeat' , 'no-repeat');

} else if (document.getElementById() == news) {
	$('ul > li > a').eq(2).css('background-image' , 'url(images/page-indicator.png)');
	$('ul > li > a').eq(2).css('background-repeat' , 'no-repeat');
}
// 