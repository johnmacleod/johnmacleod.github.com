/*
var homePg = document.getElementById("homeId");
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

/////////////

var newsPg = document.getElementById("newsId");
var newsHover = {
	addHoverClass: function() {
		newsPg.setAttribute("class", "hovering");
	},
	removeHoverClass: function() {
		newsPg.removeAttribute("class");
	}
} //End hovMenu object
// Activate focus event on menu 
newsPg.addEventListener("mouseover", newsHover.addHoverClass, false);
newsPg.addEventListener("mouseout", newsHover.removeHoverClass, false);

/////////////

var aboutPg = document.getElementById("aboutId");
var aboutHover = {
	addHoverClass: function() {
		aboutPg.setAttribute("class", "hovering");
	},
	removeHoverClass: function() {
		aboutPg.removeAttribute("class");
	}
} //End hovMenu object
// Activate focus event on menu 
aboutPg.addEventListener("mouseover", aboutHover.addHoverClass, false);
aboutPg.addEventListener("mouseout", aboutHover.removeHoverClass, false);

/////////////

var leadPg = document.getElementById("leadId");
var leadHover = {
	addHoverClass: function() {
		leadPg.setAttribute("class", "hovering");
	},
	removeHoverClass: function() {
		leadPg.removeAttribute("class");
	}
} //End hovMenu object
// Activate focus event on menu 
leadPg.addEventListener("mouseover", leadHover.addHoverClass, false);
leadPg.addEventListener("mouseout", leadHover.removeHoverClass, false);

/////////////

var bylawPg = document.getElementById("bylawId");
var bylawHover = {
	addHoverClass: function() {
		bylawPg.setAttribute("class", "hovering");
	},
	removeHoverClass: function() {
		bylawPg.removeAttribute("class");
	}
} //End hovMenu object
// Activate focus event on menu 
bylawPg.addEventListener("mouseover", bylawHover.addHoverClass, false);
bylawPg.addEventListener("mouseout", bylawHover.removeHoverClass, false);

/////////////

var memberPg = document.getElementById("memberId");
var memberHover = {
	addHoverClass: function() {
		memberPg.setAttribute("class", "hovering");
	},
	removeHoverClass: function() {
		memberPg.removeAttribute("class");
	}
} //End hovMenu object
// Activate focus event on menu 
memberPg.addEventListener("mouseover", memberHover.addHoverClass, false);
memberPg.addEventListener("mouseout", memberHover.removeHoverClass, false);

/////////////

var contactPg = document.getElementById("contactId");
var contactHover = {
	addHoverClass: function() {
		contactPg.setAttribute("class", "hovering");
	},
	removeHoverClass: function() {
		contactPg.removeAttribute("class");
	}
} //End hovMenu object
// Activate focus event on menu 
contactPg.addEventListener("mouseover", contactHover.addHoverClass, false);
contactPg.addEventListener("mouseout", contactHover.removeHoverClass, false);

*/

var gbotNav = [ "homePg", "businessPg", "newsPg", "aboutPg", "leadPg", "bylawPg", "memberPg", "contactPg" ];
var gbotId = [ "homeId", "businessId", "newsId", "aboutId", "leadId", "bylawId", "memberId", "contactId" ];
var gbotHov = [ "homeHover", "businessHover", "newsHover", "aboutHover", "leadHover", "bylawHover", "memberHover", "contactHover" ];
var count = gbotNav.length;



// var activateAddHover = [ "homeActive", "businessActive", "newsActive", "aboutActive", "leadActive", "bylawActive", "memberActive", "contactActive" ];
// var activateRemHover = [ "homeRemActive", "businessRemActive", "newsRemActive", "aboutRemActive", "leadRemActive", "bylawRemActive", "memberRemActive", "contactActive" ];

for (var i = 0; i < count; i = i + 1) {
var myGbotNav = gbotNav[i];
var myGbotHov = gbotHov[i];
var myGbotId = gbotId[i];
// var myActivate = activateAddHover[i];
// var myRemActivate = activateRemHover[i];

var myGbotNav = document.getElementById( myGbotId );
var myGbotHov = {
		addHoverClass: function() {
			myGbotNav.setAttribute("class", "hovering");
		},
		removeHoverClass: function() {
			myGbotNav.removeAttribute("class");
		}
	}//End gbotHov object
// Activate focus event on menu 
(function (i) {
gbotNav[i].addEventListener("mouseover", myGbotHov.addHoverClass, false);
//gbotNav[i].addEventListener("mouseout", myGbotHov.removeHoverClass, false);
}(i));


// myGbotNav.addEventListener("mouseover", myGbotHov.addHoverClass, false);
// myGbotNav.addEventListener("mouseout", myGbotHov.removeHoverClass, false);

} // End for loop





// activateAddHover[0];
// activateRemHover[0];
// this.myActivate;
// this.myRemActivate;




/************************************/
/************************************/
