/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('albtec.easycom.view.customer.FormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customerform',

    onFormReset: function () {
        var customer = this.getViewModel().get('currentCustomer');
        customer.reject();
    },

    onFormSubmit: function () {
        var customer = this.getViewModel().get('currentCustomer');
        var self = this;
        customer.save({
            success: function (rec, op) {
                // well done ... reload
                self.getViewModel().getStore('customers').reload();
                //Ext.fly('customerlist').getSelectionModel().select(rec);
            },
            failure: function (rec, op) {
                console.info(rec, op);
                Ext.MessageBox.alert('Failed saving customer details', 'An error occured while saving the customer details.');
            }
        });
    }

});
