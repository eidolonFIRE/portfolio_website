$(document).ready(function(){

	$(".artBtn").click(function()
	{
		$("#articlePanel").load("articles/"+$(this).attr("value")+"/"+$(this).attr("value")+".html");
		// history.pushState({}, '', "#" + $(this).attr("value"));
		location.hash = $(this).attr("value")
	});


	loadArticle = function(hash) {
		hash = hash.substr(1)
		$("#articlePanel").load("articles/"+hash+"/"+hash+".html");
	};

	loadArticle(location.hash);


	// $(window).on("popstate", function(e) {
	// 	if (e.originalEvent.state !== null) {
	// 		loadArticle(location.hash);
	// 	}
	// });

	$(window).on("popstate", function() {
		loadArticle(location.hash);
	});

})