/*global QUnit*/

sap.ui.define([
	"projectMfcTechnical/project_mfc_technical/controller/med_technical.controller"
], function (Controller) {
	"use strict";

	QUnit.module("med_technical Controller");

	QUnit.test("I should test the med_technical controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
