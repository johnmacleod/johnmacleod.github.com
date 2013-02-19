
	var cmHome = "Camp Maisy | Home"  /* Title text */
	var cmTweet = "Camp Maisy | Tweets"
	var cmOffer = "Camp Maisy | Offerings"
	var cmVideo = "Camp Maisy | Videos"

	if ( (document.title) == cmHome ) {
		$('nav > ul > li > a').eq(0).css('background-color', '#6E3A35');

	} else if ( (document.title) == cmTweet ) {
		$('nav > ul > li > a').eq(2).css('background-color', '#6E3A35');

	} else if ( (document.title) == cmOffer ) {
		$('nav > ul > li > a').eq(1).css('background-color', '#6E3A35');

	} else if ( (document.title) == cmVideo ) {
		$('nav > ul > li > a').eq(3).css('background-color', '#6E3A35');

	}