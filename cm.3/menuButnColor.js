
	var cmHome = "Camp Maisy | Home"  /* Title text */
	var cmTweet = "Camp Maisy | Tweets"
	var cmOffer = "Camp Maisy | Offerings"
	var cmVideo = "Camp Maisy | Videos"

	if ( (document.title) == cmHome ) {
		$('ul > li > a').eq(0).css('background-color', '#6E3A35');

	} else if ( (document.title) == cmTweet ) {
		$('ul > li > a').eq(2).css('background-color', '#6E3A35');

	} else if ( (document.title) == cmOffer ) {
		$('ul > li > a').eq(1).css('background-color', '#6E3A35');

	} else if ( (document.title) == cmVideo ) {
		q$('ul > li > a').eq(3).css('background-color', '#6E3A35');

	}