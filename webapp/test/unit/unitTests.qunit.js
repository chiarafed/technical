/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"projectMfcTechnical/project_mfc_technical/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
