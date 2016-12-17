/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('albtec.easycom.view.timerecord.WindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.timerecordwindow',

    onSaveSuccessful: function(){
	this.getView().close();
    },
    
    onClose: function(){
	this.getViewModel().get("customerlist.selection.timerecords").rejectChanges();
	this.getViewModel().get('timerecordlist.selection').reject();
	this.getViewModel().get("customerlist.selection.timerecords").reload();
    }

});
