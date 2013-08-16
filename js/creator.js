;(function($) {
	"use strict";
	
	function calculateCheckboxes(self, all, portrait) {
		var races = 0;
		// toggle all checkboxes and portraits on/off
		if (self.prop("id") === all) {
			var checked = false;
			if (!self.prop("checked")) {
				checked = true;
			}
			self = self.parent().parent().find("." + portrait);
			if (checked) {
				self.removeClass(portrait + "Reveal");
				self.end().find(".checkBox:checked").prop("checked", false);
			}
			else {
				self.addClass(portrait + "Reveal");
				self.end().find(".checkBox:not(:checked)").prop("checked", true);
			}
		}
		// just toggle the portrait
		else {
			self.prev().toggleClass(portrait + "Reveal");
			self = self.parent().parent().find(".checkBox");
			races = self.length - 1;
			if (all) {
				// see if the all box should be checked or not
				if (self.parent().find(".checkBox:checked:not(#" + all + ")").length === races) {
					self.eq(0).prop("checked", true);
				}
				else {
					self.eq(0).prop("checked", false);
				}
		}	}
	};
	
	$(".sexContainer").on("click.sexClick touchend.sexTouch", ".checkBox", function() {
		calculateCheckboxes($(this), false, "sexPortrait");
	});
	
	$(".raceContainer").on("click.raceClick touchend.raceTouch", ".checkBox", function() {
		calculateCheckboxes($(this), "allRaces", "racePortrait");
	});
	
	$(".jobContainer").on("click.jobClick touchend.jobTouch", ".checkBox", function() {
		calculateCheckboxes($(this), "allJobs", false);
	});
	
	$(".landContainer").on("click.landClick touchend.landTouch", ".checkBox", function() {
		calculateCheckboxes($(this), "allLand", false);
	});
	
	$(".handContainer").on("click.handClick touchend.handTouch", ".checkBox", function() {
		calculateCheckboxes($(this), "allHand", false);
	});
	
})(jQuery);