/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('albtec.easycom.view.invoice.WindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.invoicewindow',

    onSaveSuccessful: function(){
	    this.getView().close();
    },
    
    onClose: function() {
        this.getViewModel().get("customerlist.selection.invoices").rejectChanges();
        this.getViewModel().get('invoicelist.selection').reject();
        this.getViewModel().get("customerlist.selection.invoices").reload();
        if (this.getViewModel().get('invoicelist.selection.invoiceitems')) {
            this.getViewModel().get('invoicelist.selection.invoiceitems').rejectChanges();
            this.getViewModel().get('invoicelist.selection.invoiceitems').reload();
        }
    }

});
