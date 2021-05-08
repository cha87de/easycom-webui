/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('albtec.easycom.view.timerecord.FormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.timerecordform',

    onFormReset: function () {
        var record = this.getViewModel().get('currentTimerecord');
        record.reject();
    },

    onFormSubmit: function () {
        var record = this.getViewModel().get('currentTimerecord');
        var values = this.getView().getValues();

        var datepattern = /(\d{2})\.(\d{2})\.(\d{4})/;
        if (values.startdate != "" && values.starttime != "")
            record.set('start', new Date(values.startdate.replace(datepattern, '$3-$2-$1') + " " + values.starttime + ":0"));
        if (values.enddate != "" && values.endtime != "")
            record.set('end', new Date(values.enddate.replace(datepattern, '$3-$2-$1') + " " + values.endtime + ":0"));

        var self = this;

        record.save({
            success: function (rec, op) {
                self.fireViewEvent('saveSuccessful');
            },
            failure: function (rec, op) {
                Ext.MessageBox.alert('Failed saving timerecord', 'An error occured while saving the timerecord.');
            }
        });
    }

});
