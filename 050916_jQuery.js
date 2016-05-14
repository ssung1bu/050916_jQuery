$(document).ready(
	function(){
		alert("The document is ready!");  
$("ul li").hide();
$("ul li").fadeIn(5000);
$("#slide").slideUp(4000); //slideDown doesn't work for some reason
$("h1").animate( {
	opacity: 0.25,
	width: "70%"
	} , 2000 );
}
);
$("#clickme").click(
function(){
$("#clickme").hide()
}
);
