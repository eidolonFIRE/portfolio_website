$(document).ready(function(){

	$(".artBtn").click(function()
	{
		$("#articlePanel").load("articles/"+$(this).attr("value")+"/"+$(this).attr("value")+".html");
	});


})