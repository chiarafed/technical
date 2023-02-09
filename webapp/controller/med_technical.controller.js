sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("projectMfcTechnical.projectmfctechnical.controller.med_technical", {
            onInit: function () {
                var url = "https://1afadbf9trial-dev-mfc1-srv.cfapps.us10-001.hana.ondemand.com/catalog/";
                var oData = new sap.ui.model.odata.ODataModel(url,true);
                sap.ui.getCore().setModel(oData);

                oData.attachRequestCompleted(function() {

                    console.log(oData.getProperty("ID_STATO_ERRORE"));
                    
                    });
            },
            
            onSelectionChange: function (oEvent) {
                var oList = oEvent.getSource(),
                    bSelected = oEvent.getParameter("selected");
    
                // skip navigation when deselecting an item in multi selection mode
                if (!(oList.getMode() === "MultiSelect" && !bSelected)) {
                    // get the list item, either from the listItem parameter or from the event's source itself (will depend on the device-dependent mode).
                    this._showDetail(oEvent.getParameter("listItem") || oEvent.getSource());
    
    
    
                }
            },

            _showObject : function (oItem) {
                this.getRouter().navTo("object", {
                    objectId: oItem.getBindingContext().getPath().substring("/Anagrafica_Errori".length)
                });
            },
    
            _showDetail: function (oItem) {
                var id = oItem.getBindingContext().getProperty("ID_ERRORE"); //prendo l'elemento da selezionare tramite id nella master page
                console.log(id);
                this.getView().byId("detail").bindElement({ path: "/Anagrafica_Errori/" + id});//lo sparo dritto nella detail page
            },
        });
    });
