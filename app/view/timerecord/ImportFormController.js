/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('albtec.easycom.view.timerecord.ImportFormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.timerecordimportform',

    onImport: function () {
        var vm = this.getViewModel();
        var customer = vm.get("customerlist.selection");
        var values = this.getView().getValues();

        var data = Ext.util.CSV.decode(values.csvdata, ',');
        vm.get('timerecordsimport').removeAll();
        Ext.Array.each(data, function(item) {
            var timerecordFields = {
                "customer": customer.get('id'),
                "rate":  values.rate,
                "comment": values.comment,
                "start": new Date(item[0]),
                "end": new Date(item[1]),
                "invoice": undefined
            };
            vm.get('timerecordsimport').insert(0, timerecordFields);
        });
    },

    onFormSubmit: function () {
        var vm = this.getViewModel();
        var store = vm.get("customerlist.selection.timerecords");
        vm.get('timerecordsimport').each(function (record) {
            store.add(record);

        });
        var self = this;
        store.sync({
            success: function () {
                self.fireViewEvent('saveSuccessful');
            },
            failure: function () {
                Ext.MessageBox.alert('Failed saving timerecords', 'An error occured while saving the timerecords.');
            }
        });
    }

});
