;(function($) {
	"use strict";
	
	$(".raceContainer").on("click.raceClick touchend.raceTouch", ".checkBox", function() {
		var self = $(this);
		var races = 0;
		// toggle all checkboxes and portraits on/off
		if (self.prop("id") === "allRaces") {
			var checked = false;
			if (!self.prop("checked")) {
				checked = true;
			}
			self = self.parent().parent().find(".racePortrait");
			if (checked) {
				self.removeClass("racePortraitReveal");
				self.end().find(".checkBox:checked").prop("checked", false);
			}
			else {
				self.addClass("racePortraitReveal");
				self.end().find(".checkBox:not(:checked)").prop("checked", true);
			}
		}
		// just toggle the portrait
		else {
			self.prev().toggleClass("racePortraitReveal");
			self = self.parent().parent().find(".checkBox");
			races = self.length - 1;
			// see if the all box should be checked or not
			if (self.parent().find(".checkBox:checked:not(#allRaces)").length === races) {
				self.eq(0).prop("checked", true);
			}
			else {
				self.eq(0).prop("checked", false);
			}
		}
	});
	
})(jQuery);