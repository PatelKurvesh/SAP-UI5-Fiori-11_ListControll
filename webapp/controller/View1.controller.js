sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/Button',
	'sap/m/Dialog'
], function(Controller,Button, Dialog) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-11_ListControll.controller.View1", {
		
			handlePress: function (evt) {
			var sSrc = evt.getSource().getTarget();
			var oDialog = new Dialog({
				content: new sap.m.Image({
					src: sSrc				}),
				beginButton: new Button({
					text: 'Close',
					press: function () {
						oDialog.close();
					}
				}),
				afterClose: function() {
					oDialog.destroy();
				}
			});
			oDialog.open();
		}

	});
});