/**
 *
 */
Ext.define('albtec.easycom.view.timerecord.ImportWindow', {
    extend: 'Ext.Window',
    xtype: 'timerecordimportwindow',

    requires: [
        'albtec.easycom.view.timerecord.ImportForm',
        'albtec.easycom.view.main.MainModel',
        'albtec.easycom.view.timerecord.ImportWindowController'
    ],

    viewModel: 'main',
    controller: 'timerecordimportwindow',

    layout: 'fit',
    modal: true,
    title: 'Time Record Import',
    closeAction: 'hide',

    items: [{
        xtype: 'timerecordimport',
        listeners: {
            'saveSuccessful': 'onSaveSuccessful'
        }
    }],

    listeners: {
        close: 'onClose'
    }

});
