$(document).ready(function(){

	//=== Nav meta tags (tooltips) ===	
	// Countesy of...   https://osvaldas.info/elegant-css-and-jquery-tooltip-responsive-mobile-friendly
	$( function()
	{
		var targets = $( "[rel~=tooltip]" ),
			target  = false,
			tooltip = false,
			title   = false;
	
		targets.bind( "mouseenter", function()
		{
			target  = $( this );
			tip     = target.attr( "title" );
			tooltip = $( "<div id='tooltip'></div>" );
	
			if ( !tip || tip == "" ) return false;
	
			target.removeAttr( "title" );
			tooltip.css( "opacity", 1 ).html( tip ).appendTo( "body" );
	
			var init_tooltip = function()
			{
				var pos_left = target.offset().left + target.outerWidth()
				var pos_top  = target.offset().top;

				var width = tooltip.outerWidth()
				tooltip.css("width", 0)

				if ($( window ).width() > $(window).height())
					tooltip.css( { left: pos_left, top: pos_top } ).animate( { width: width}, 100 );
		
			};

			init_tooltip();

			var remove_tooltip = function()
			{
				tooltip.animate( { width: "0"}, 200, function(){$( this ).remove();});
				target.attr( "title", tip );
			};
	 
			target.bind( "mouseleave", remove_tooltip );
			tooltip.bind( "click", remove_tooltip );
		});
	});


	//=== Image expantion ===
	$("body").on("click", ".imgHalf", function() 
	{
		var state = $(this).data("clicked");
		if (state)
			state = null
		else
			state = 1
		$(this).data("clicked", state);

		if (state)
		{
			if ($(this).offset().left < $(window).width()/2)
			{
				$(this).toggleClass("expanded-r")
			}
			else
			{
				$(this).toggleClass("expanded-l")
			}
		}
		else
		{
			$(this).removeClass("expanded-r")
			$(this).removeClass("expanded-l")
		}
	});




	//=== Nav dynamic page loading ===
	$(".artBtn, #profileImg").click(function()
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


});