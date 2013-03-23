Want to create javascript hover effect for nav menu, multiple list items, using an eventListener

I cannot use CSS to create a hover affect for a website nav menu that I'm working on. 

Created a listener event for a couple of the menu items--it works fine. I would like to create a loop to create the hover. Here's the javascript for a couple of the menu items:

// Script 1 start
var homePg = document.getElementById("homeId"); // The homeID is in the <a> element
var homeHover = {
	addHoverClass: function() {
		homePg.setAttribute("class", "hovering");
	},
	removeHoverClass: function() {
		homePg.removeAttribute("class");
	}
} //End homeHover object
// Activate focus event on menu 
homePg.addEventListener("mouseover", homeHover.addHoverClass, false);
homePg.addEventListener("mouseout", homeHover.removeHoverClass, false);

/////////////

var businessPg = document.getElementById("businessId");
var businessHover = {
	addHoverClass: function() {
		businessPg.setAttribute("class", "hovering");
	},
	removeHoverClass: function() {
		businessPg.removeAttribute("class");
	}
} //End hovMenu object
// Activate focus event on menu 
businessPg.addEventListener("mouseover", businessHover.addHoverClass, false);
businessPg.addEventListener("mouseout", businessHover.removeHoverClass, false);

// end 1

Although script 1 works fine, I was hoping to make a simpler version of it that would loop through some arrays and accomplish the same thing.

Script 2 is my attempt to do the same, as in Script 1, but the hover effect only works on the last menu item. So I've failed. Not sure


// Script 2 start
var gbotNav = [ "homePg", "businessPg", "newsPg", "aboutPg", "leadPg", "bylawPg", "memberPg", "contactPg" ];
var gbotId = [ "homeId", "businessId", "newsId", "aboutId", "leadId", "bylawId", "memberId", "contactId" ];
var gbotHov = [ "homeHover", "businessHover", "newsHover", "aboutHover", "leadHover", "bylawHover", "memberHover", "contactHover" ];
var count = gbotNav.length;

var activateAddHover = [ "homeActive", "businessActive", "newsActive", "aboutActive", "leadActive", "bylawActive", "memberActive", "contactActive" ];
var activateRemHover = [ "homeRemActive", "businessRemActive", "newsRemActive", "aboutRemActive", "leadRemActive", "bylawRemActive", "memberRemActive", "contactActive" ];

for (var i = 0; i < count; i = i + 1) {
var myGbotNav = gbotNav[i];
var myGbotHov = gbotHov[i];
var myGbotId = gbotId[i];
var myActivate = activateAddHover[i];
var myRemActivate = activateRemHover[i];

var myGbotNav = document.getElementById( myGbotId );
var myGbotHov = {
		addHoverClass: function() {
			myGbotNav.setAttribute("class", "hovering");
		},
		removeHoverClass: function() {
			myGbotNav.removeAttribute("class");
		}
	} //End gbotHov object
// Activate focus event on menu 
myActivate = myGbotNav.addEventListener("mouseover", myGbotHov.addHoverClass, false);
myRemActivate = myGbotNav.addEventListener("mouseout", myGbotHov.removeHoverClass, false);

} // End for loop

// end 2

Any help is appreciated. Hope this is enough info.
Thanks