/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('albtec.easycom.view.invoice.EditorController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.invoiceeditor',

	addInvoiceItem: function(){
		var vm = this.getViewModel();
		var invoice = vm.get("invoicelist.selection");
		var store = vm.get("invoicelist.selection.invoiceitems");

		var nextPos = 1;
		// find highest position
		store.data.each(function(item, index, totalItems ) {
			if(item.get('position') >= nextPos)
				nextPos = item.get('position') + 1;
		});
		var invoiceitemFields = {"invoice": invoice.get('id'), "amount": 1, position: nextPos};
		var invoiceitemRecord = store.insert(store.count(), invoiceitemFields)[0];
	},
	
	delInvoiceItem: function(){
		var vm = this.getViewModel();
		var store = vm.get("invoicelist.selection.invoiceitems");
		var invoiceitem = vm.get("editorInvoiceitemlist.selection")
		store.remove(invoiceitem);

		// look for gaps in position
		var prevPos = 0;
		store.data.each(function(item, index, totalItems ) {
			if(item.get('position') > prevPos+1){
				item.set('position', prevPos+1);
			}
			prevPos = prevPos+1;
		});		
	},
	
	onFormSubmit: function(){
		var vm = this.getViewModel();
		var invoice = vm.get("invoicelist.selection");
		var invoiceitems = vm.get("invoicelist.selection.invoiceitems");

		var invoiceitemsDirty = invoiceitems && (invoiceitems.getModifiedRecords().length > 0 || invoiceitems.getRemovedRecords().length > 0);
		var self = this;
		if(invoice.dirty){
			this.saveInvoice(invoice, function(){
				if(invoiceitemsDirty) {
					// if invoice was new, set invoice ID from Server first
					Ext.each(invoiceitems.getNewRecords(), function(rec) {
						rec.set("invoice", invoice.get("id"));
					});
					self.saveInvoiceItems(invoiceitems, function () {
						self.fireSuccessEvent();
					});
				}else {
					self.fireSuccessEvent();
				}
			});
		}else if(invoiceitemsDirty){
			this.saveInvoiceItems(invoiceitems, function(){ self.fireSuccessEvent(); }); 
		}
	},
	saveInvoice: function(invoice, onSuccess){
		invoice.save({
		     success: onSuccess,
		     failure: function(rec,op) {
			 	Ext.MessageBox.alert('Failed saving invoice', 'An error occured while saving the invoice record.');
		     }
		});	
	},
	saveInvoiceItems: function(invoiceitemsStore, onSuccess){
		invoiceitemsStore.sync({
			success: onSuccess, 
			failure: function(){
				Ext.MessageBox.alert('Failed saving invoice', 'An error occured while saving the invoice items.');
			}
		});	
	},
	fireSuccessEvent: function(){
		this.fireViewEvent('saveSuccessful');
	}
	
    
});
