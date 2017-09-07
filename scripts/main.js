$(document).ready(function(){

	$(".artBtn").click(function()
	{
		$("#articlePanel").load("articles/"+$(this).attr("value")+"/"+$(this).attr("value")+".html");
		location.hash = $(this).attr("value");
		window.scrollTo(0,0);
	});

	$("#profileImg").click(function()
	{
		$("#articlePanel").load("articles/"+$(this).attr("value")+"/"+$(this).attr("value")+".html");
		location.hash = $(this).attr("value");
		window.scrollTo(0,0);
	});


	loadArticle = function(hash) {
		hash = hash.substr(1)
		if (hash == "")
		{
			hash = "home";
			location.hash = hash;
		}
		$("#articlePanel").load("articles/"+hash+"/"+hash+".html");
	};

	loadArticle(location.hash);

	$(window).on("popstate", function() {
		loadArticle(location.hash);
	});


})