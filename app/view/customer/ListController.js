/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('albtec.easycom.view.customer.ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customerlist',

	customerAdd: function(){
		var vm = this.getViewModel();
		var store = vm.getStore("customers");
		var customerrecord = store.insert(0, {})[0];	
		this.getView().getSelectionModel().select(customerrecord);
	},
	
	customerDel: function(){
		var customerrecord = this.getViewModel().get("customerlist.selection");
		var store = this.getViewModel().getStore("customers");
		Ext.MessageBox.confirm("Delete Customer", "Are you sure you want to remove the selected customer?", function(btn){
			if(btn !== 'yes'){
				return;
			}
			store.remove(customerrecord);
			store.sync();
		});	
	}

    
});
