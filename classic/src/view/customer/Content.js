/**
 *
 */
Ext.define('albtec.easycom.view.customer.Content', {
    extend: 'Ext.tab.Panel',
    xtype: 'customercontent',

    //controller: 'customercontent',

    requires: [
        'albtec.easycom.view.customer.Form',
        'albtec.easycom.view.invoice.List',
        'albtec.easycom.view.timerecord.List'//,
        //'albtec.easycom.view.customer.ContentController'
    ],

    items: [{
        xtype: 'customerform'
    }, {
        xtype: 'timerecordlist'
    }, {
        xtype: 'invoiceoverview'
    }
    ]

});
