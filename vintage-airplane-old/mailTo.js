// JavaScript Document

/* This script and many more are available free online at
The JavaScript Source :: http://javascript.internet.com
*/

function mailTo() {
  // Copyright 2006 Professional Website Design.
  // For other useful scripts and tutorials, see
  // http://www.professorscodingcorner.com/
  // You may use or modify the script in any way
  // you want, but do not remove the first two
  // lines above. Although it's not required, I
  // would appreciate an email to let me know
  // the URL of the page where you used it.
  
  // The purpose of the mailTo script is to prevent
  //   email link harvesting by spammer's robots.
  //   Nothing shows in the file where this is used,
  //   other than an empty 'span' element. The mailto
  //   link is added dynamically, and will not show
  //   up even when you "View Source".
  
  // A user having Javascript disabled will not see
  //   or be able to use the email link. This is
  //   necessary in order to achieve the script's
  //   stated purpose.
     
  // To add a mailto link to your webpage, just:
  
  // 1) Save this script as mailTo.js , or whatever
  //   else you want to call it. Be sure to include
  //   the window.onload statement AFTER the function.
  
  // 2) Put the following in the "head" section of
  //   your webpage:
  //   <script type="text/javascript" src="mailTo.js">
  //   </script>
     
  // 3) Put the following code in your webpage wherever
  //   you want the link to appear.
  //   <span id="mailTo"></span>
     
  // 4) Substitute your own email address for the one
  //   in the line below.
  var email = "support@vintage-airplane.com";
  
  if (!document.getElementById("mailTo")) return false;
  
  var spanobj = document.getElementById("mailTo");
  var anch = document.createElement("a");
  var mailto = "mailto:" + email;
  anch.setAttribute("href",mailto);
  spanobj.appendChild(anch);
  var txt = document.createTextNode(email);
  anch.appendChild(txt);
}
window.onload = mailTo;