/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('albtec.easycom.view.timerecord.ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.timerecordlist',

    timerecordAdd: function () {
        var now = new Date().getTime() / 1000;
        var vm = this.getViewModel();
        var store = vm.get("customerlist.selection.timerecords");

        var customer = vm.get("customerlist.selection");
        var defaultrate = customer.get("defaultrate");
        var timerecordFields = {
            "customer": customer.get('id'),
            "rate": defaultrate,
            "start": now,
            "invoice": undefined
        };

        var timerecord = store.insert(0, timerecordFields)[0];
        vm.set("timerecordlist.selection", timerecord);
        vm.set("currentTimerecord_startdate", now);
        vm.set("currentTimerecord_starttime", now);

        this.openWindow();
    },

    timerecordAddCsv: function () {
        this.openCsvWindow();
    },

    timerecordEdit: function () {
        var timerecord = this.getViewModel().get("timerecordlist.selection");
        this.openWindow();
    },

    timerecordDel: function () {
        var timerecord = this.getViewModel().get("timerecordlist.selection");
        var store = this.getViewModel().get("customerlist.selection.timerecords");
        Ext.MessageBox.confirm("Delete Timerecord", "Are you sure you want to remove the selected timerecord?", function (btn) {
            if (btn !== 'yes') {
                return;
            }
            store.remove(timerecord);
            store.sync();
        });

    },

    timerecordEditEndTime: function () {
        var now = new Date().getTime() / 1000;
        var vm = this.getViewModel();
        var timerecord = vm.get("timerecordlist.selection");
        timerecord.set("end", now);
        this.openWindow();
    },

    openWindow: function () {
        var win = Ext.create('albtec.easycom.view.timerecord.Window');
        win.show();
    },

    openCsvWindow: function (customer) {
        var win = Ext.create('albtec.easycom.view.timerecord.ImportWindow');
        win.show();
    },

    timerecordAccount: function () {
        var idCustomer = this.getViewModel().get("customerlist.selection.id");
        var timerecords = this.getViewModel().get("customerlist.selection.timerecords");
        var customer = this.getViewModel().get("customerlist.selection");

        var selectedTimerecords = "";
        var selection = this.getView().getSelection();
        Ext.each(selection, function (item) {
            if (selectedTimerecords != "")
                selectedTimerecords += ",";
            selectedTimerecords += item.get('id');
        });
        var confirmQuestion = "all open";
        if (selection.length > 0) {
            confirmQuestion = "the selected"
        }
        Ext.MessageBox.confirm("Account open Timerecords?", "Create new Invoice and account " + confirmQuestion + " Time Records?", function (btn) {
            if (btn !== 'yes') {
                return;
            }
            Ext.Ajax.request({
                url: 'action/timerecord/account?customer=' + idCustomer + '&timerecords=' + selectedTimerecords,

                success: function (response, opts) {
                    var responseObj = Ext.decode(response.responseText);
                    if (!responseObj.success) {
                        Ext.MessageBox.alert('Failed accounting time records', 'An error occured while accounting time records: <br/>' + responseObj.reason);
                        return;
                    }

                    // reload stores
                    //timerecords.reload();
                    customer.store.reload();

                    // TODO open invoice

                },

                failure: function (response, opts) {
                    Ext.MessageBox.alert('Failed accounting time records', 'An error occured while accounting time records.');
                }
            });
        });

    }

});
