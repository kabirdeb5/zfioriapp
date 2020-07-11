sap.ui.define([
	"sap/ui/core/mvc/Controller",
	 "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/Filter"
], function (Controller, JSONModel, MessageToast, Filter) {
	"use strict";
	
	
	


	return Controller.extend("ZHR_BANK_DETAILS1.ZHR_BANK_DETAILS1.controller.BANK1", {
		onInit: function () {
		var oJSONModel = new JSONModel();
this.getView().setModel(oJSONModel, "jsonmodel");
var sUrl = "/sap/opu/odata/sap/ZHR_BANK_VIEW_SRV_SRV/";
var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
oModel.read("/ZHR_BANKSet", {
success: function (data) {
oJSONModel.setData({
ZHR_BANKSet: data.results
});
}
});



		},
		
		onPress: function (oEvent) {
this.getselval1 = oEvent.getSource().getSelectedItem().
getBindingContext("jsonmodel").getObject().Pernr;
this.getView().byId("__input0").setValue(this.getselval1);
this.getselval2 = oEvent.getSource().getSelectedItem().
getBindingContext("jsonmodel").getObject().Ename;
this.getView().byId("__input1").setValue(this.getselval2);
this.getselval = oEvent.getSource().getSelectedItem().
getBindingContext("jsonmodel").getObject().Bankl;
this.getView().byId("__input2").setValue(this.getselval);
this.getselval = oEvent.getSource().getSelectedItem().
getBindingContext("jsonmodel").getObject().Bankn;
this.getView().byId("__input3").setValue(this.getselval);
},
		onSave: function () {
var oCust1 = this.getView().byId("__input0").getValue();
var oCust2 = this.getView().byId("__input1").getValue();
var oCust3 = this.getView().byId("__input2").getValue();
var oCust4 = this.getView().byId("__input3").getValue();
var postData = {};
postData.Pernr = oCust1;
postData.Ename = oCust2;
postData.Bankl = oCust3;
postData.Bankn = oCust4;
this.getOwnerComponent().getModel().
create("/ZHR_BANKSet", postData, null, function (response) {
MessageToast.show("Address Created Successfully with number  " + oCust1);
/*var mylocation = location; mylocation.reload();*/
}, function (Error) {
MessageToast.show("Customer Creation Failed  " + oCust1);
});
},
		onDelete: function () {
var oCust1 = this.getView().byId("__input0").getValue();
this.getOwnerComponent().getModel().
remove("/ZHR_BANKSet('" + oCust1 + "')", {
method: "DELETE",
success: function (data) {
MessageToast.show("Customer deleted Successfully with number  " + oCust1);
},
error: function (e) {
MessageToast.show("Customer deletion Failed  " + oCust1);
}
});
},
onUpdate: function () {
var oCust1 = this.getView().byId("__input0").getValue();
var oCust2 = this.getView().byId("__input1").getValue();
var oCust3 = this.getView().byId("__input2").getValue();
var oCust4 = this.getView().byId("__input3").getValue();
var postData = {};
postData.Pernr      = oCust1;
postData.Ename = oCust2;
postData.Bankl = oCust3;
postData.Bankn = oCust4;
this.getOwnerComponent().getModel().
update("/ZHR_BANKSet('" + oCust1 + "')", 
postData, null, function (response) {
MessageToast.show("Customer update Successfully with number  " + oCust1);
/*var mylocation = location; mylocation.reload();*/
}, function (Error) {
MessageToast.show("Customer update Failed  " + oCust1);
});
}
		
		
		
		
		
		
	});
	
	
	
	
});