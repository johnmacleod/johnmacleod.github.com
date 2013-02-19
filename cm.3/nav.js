
// If document has the pages wrapper div
if (document.getElementById("home-wrapper")) {
	// Show the appropriate blue square in the nav
	$('ul > li > a').eq(0).css('background-image' , 'url(images/page-indicator.png)')
	$('ul > li > a').eq(0).css('background-repeat' , 'no-repeat')

} else if (document.getElementById("business-wrapper")) {
	$('ul > li > a').eq(1).css('background-image' , 'url(images/page-indicator.png)')
	$('ul > li > a').eq(1).css('background-repeat' , 'no-repeat')

} else if (document.getElementById("news-wrapper")) {
	$('ul > li > a').eq(2).css('background-image' , 'url(images/page-indicator.png)')
	$('ul > li > a').eq(2).css('background-repeat' , 'no-repeat')
}
// 