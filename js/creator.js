;(function($) {
	"use strict";
	
	$(".raceContainer").on("click.raceClick touchend.raceTouch", ".checkBox", function() {
		var self = $(this).prev();
		if (self.hasClass("racePortraitReveal")) {
			self.removeClass("racePortraitReveal");
		}
		else {
			self.addClass("racePortraitReveal");
		}
	});
	
})(jQuery);