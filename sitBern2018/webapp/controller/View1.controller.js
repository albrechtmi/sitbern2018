/* sitBern2018 albrechtmi - Properly builded with local tools - [8c3e46f0-2605-4255-8636-5f9df32b688d] */
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
