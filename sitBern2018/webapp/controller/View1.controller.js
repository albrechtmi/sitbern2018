/* sitBern2018 albrechtmi - Properly builded with local tools - [f6898d09-cf19-4164-9d0b-a39c26466f8c] */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict"; 
	return Controller.extend("sitBern2018.controller.View1", {
		onInit:function(oEvt) {
			alert( "sitBern" );	
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
