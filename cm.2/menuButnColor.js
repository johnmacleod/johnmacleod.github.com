
	var cmHome = "Camp Maisy | Home"  /* Title text */
	var cmTweet = "Camp Maisy | Tweets"

	if ( (document.title) == cmHome ) {
		$('ul > li > a').eq(0).css('background-color', '#6E3A35');

	} else if ( (document.title) == cmTweet ) {
		$('ul > li > a').eq(2).css('background-color', '#6E3A35');
	}