/**
 * 
 */
Ext.define('albtec.easycom.view.invoice.Window', {
    extend: 'Ext.Window',
    xtype: 'invoicewindow',

    requires: [
        'albtec.easycom.view.invoice.Editor',
        'albtec.easycom.view.invoice.WindowController'
    ],

    controller: 'invoicewindow',

    layout: 'fit',
    modal: true,
    title: 'Invoice Editor',
    closeAction: 'hide',

    items: [{
        xtype: 'invoiceeditor',
        listeners: {
            'saveSuccessful': 'onSaveSuccessful'
        }
    }],

    listeners: {
        close: 'onClose'
    }

});