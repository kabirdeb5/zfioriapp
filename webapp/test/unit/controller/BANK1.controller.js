/*global QUnit*/

sap.ui.define([
	"ZHR_BANK_DETAILS1/ZHR_BANK_DETAILS1/controller/BANK1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BANK1 Controller");

	QUnit.test("I should test the BANK1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});