/**
 *
 */
Ext.define('albtec.easycom.view.invoice.Overview', {
    extend: 'Ext.Panel',
    xtype: 'invoiceoverview',

    requires: [
        'albtec.easycom.view.invoice.List',
        'albtec.easycom.view.invoice.ItemList'
    ],

    title: 'Invoices',

    layout: 'border',

    items: [{
        xtype: 'invoicelist',
        region: 'center'
    }, {
        xtype: 'invoiceitemlist',
        region: 'south',
        height: '30%'
    }]

});
