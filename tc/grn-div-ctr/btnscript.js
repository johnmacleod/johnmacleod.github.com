function sayHowdy(msg) {
	alert(msg);
}
sayHowdy("Howdy!");


(function() {
	var btn = document.getElementById("btn");
	btn.onclick = function(){
    alert('Button was clicked!');
    }
})();



