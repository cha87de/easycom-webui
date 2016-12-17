/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('albtec.easycom.view.invoice.ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.invoicelist',

    addInvoice: function(){
        var vm = this.getViewModel();
        var store = vm.get("customerlist.selection.invoices");
        var customer = vm.get("customerlist.selection");

        var invoiceFields = {
            "customer": customer.get('id'),
            "creationdate": new Date(),
            "ispaid": 0
        };
        var invoiceRecord = store.insert(0, invoiceFields)[0];
        this.getView().getSelectionModel().select(invoiceRecord);
        this.openWindow();
    },

    editInvoice: function(){
	    this.openWindow();
    },    

    delInvoice: function(){
        var invoice = this.getViewModel().get("invoicelist.selection");
        var invoicestore = this.getViewModel().get("customerlist.selection.invoices");
	var customer = this.getViewModel().get("customerlist.selection");
        Ext.MessageBox.confirm("Delete Invoice", "Are you sure you want to remove the selected invoice?", function(btn){
            if(btn !== 'yes'){
                return;
            }
            // remove invoiceitems
            invoice.invoiceitems().removeAll();
            invoice.invoiceitems().sync();

            // remove invoice from timerecords
            invoice.timerecords().load({
                callback: function (records, operation, success) {
                    Ext.each(records, function (rec) {
                        rec.set('invoice', undefined);
                        rec.save();
                    });
                }
            });

            // remove invoice
            invoicestore.remove(invoice);
            invoicestore.sync();
	    
	    // reload customer
	    customer.store.reload();
        });
    },    

    invoiceDownload: function(){
        var id = this.getViewModel().get("invoicelist.selection.id");

	Ext.DomHelper.append(Ext.getBody(), {
	    tag:          'iframe',
	    frameBorder:  0,
	    width:        0,
	    height:       0,
	    css:          'display:none;visibility:hidden;height:0px;',
	    src:          'action/invoice/pdf?invoice='+id
	});	
	/*
        Ext.Ajax.request({
            url: ,
	    method: 'GET',
	    autoAbort: false,

            success: function(response, opts) {

            },

            failure: function(response, opts) {
                // TODO
            }
        });
	*/
    },    

    invoiceMarkPaid: function(){
        var invoice = this.getViewModel().get("invoicelist.selection");
        Ext.MessageBox.confirm("Invoice Paid?", "Are you sure you want to mark the invoice as paid?", function(btn){
            if(btn !== 'yes'){
                return;
            }
            invoice.set("ispaid", true);
            invoice.save();
        });
    },

    openWindow: function(){
        var win = Ext.create('albtec.easycom.view.invoice.Window');
        win.show();
    }    
    
});
