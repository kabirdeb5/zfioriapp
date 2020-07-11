/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZHR_BANK_DETAILS1/ZHR_BANK_DETAILS1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});