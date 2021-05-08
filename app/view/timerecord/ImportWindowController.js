/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('albtec.easycom.view.timerecord.ImportWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.timerecordimportwindow',

    onSaveSuccessful: function () {
        this.getView().close();
    },

    onClose: function () {
        this.getViewModel().get("customerlist.selection.timerecords").rejectChanges();
        this.getViewModel().get('timerecordlist.selection').reject();
        this.getViewModel().get("customerlist.selection.timerecords").reload();
    }

});
