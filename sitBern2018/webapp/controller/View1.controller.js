/* sitBern2018 albrechtmi - Properly builded with local tools - [dcf8c0b0-9d3c-402f-8f1e-5c93844d56ec] */
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
			for (var i = 0; i < 15; i++) { 
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
