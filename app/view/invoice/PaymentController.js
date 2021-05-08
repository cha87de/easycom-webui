/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('albtec.easycom.view.invoice.PaymentController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.invoicepaymentwindow',

    onFormSubmit: function () {
        var vm = this.getViewModel();
        var invoice = vm.get("invoicelist.selection");
        var self = this;
        if (invoice.dirty) {
            invoice.save({
                success: function () {
                    self.getView().close();
                },
                failure: function (rec, op) {
                    Ext.MessageBox.alert('Failed saving invoice', 'An error occured while saving the invoice record.');
                }
            });
        }
    },

    onClose: function () {
        this.getViewModel().get("customerlist.selection.invoices").rejectChanges();
        this.getViewModel().get('invoicelist.selection').reject();
        this.getViewModel().get("customerlist.selection.invoices").reload();
        if (this.getViewModel().get('invoicelist.selection.invoiceitems')) {
            this.getViewModel().get('invoicelist.selection.invoiceitems').rejectChanges();
            this.getViewModel().get('invoicelist.selection.invoiceitems').reload();
        }
    }

});
