/* sitBern2018 albrechtmi - Properly builded with local tools - [6a29c284-7b23-4b2c-8b88-ff9a21aef468] */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict"; 
	return Controller.extend("sitBern2018.controller.View1", {
		onInit:function(oEvt) {
		},
		doSubmit: function (oEvt) {
			var sServiceUrl = "https://somefancywebapi.fixedurl.com/api/v1/serviceHelloWorld";
			var iTotalLoops = 0;
			for (var i = 0; i < 5; i++) { 
				iTotalLoops = i;
			}
			iTotalLoops = iTotalLoops + 1; 
			for (var b = 0; i < 3; i++) {
			}
			var msg = "User Clicked the Button - hooray!"
			MessageToast.show(msg + "\n it looped " + iTotalLoops + " times");
			var sUrl = "https://devservice.company.com";
		}
	});
});
