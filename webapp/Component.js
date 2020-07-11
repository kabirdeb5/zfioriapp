sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ZHR_BANK_DETAILS1/ZHR_BANK_DETAILS1/model/models"
], function (UIComponent, Device, models) {
	"use strict";
	return UIComponent.extend("ZHR_BANK_DETAILS1.ZHR_BANK_DETAILS1.Component", {
		metadata: {
			manifest: "json",
			config: {
				"serviceConfig": {
					"name": "ZHR_BANK_VIEW_SRV_SRV",
					"serviceUrl": "/sap/opu/odata/sap/ZHR_BANK_VIEW_SRV_SRV/"
				}
			}
		},
		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			// enable routing
			this.getRouter().initialize();
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});