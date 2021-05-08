/**
 * This view is an example list of people.
 */
Ext.define('albtec.easycom.view.customer.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'customerlist',

    requires: [
        'albtec.easycom.model.Customer',
        'albtec.easycom.view.customer.ListController'
    ],

    title: 'Customers',

    controller: 'customerlist',
    reference: 'customerlist',

    columns: [
        {text: "Nr", width: 50, dataIndex: 'number'},
        {text: "Name", flex: 1, dataIndex: 'name'}
    ],

    tbar: [
        {
            xtype: 'button',
            text: 'New',
            handler: 'customerAdd',
            glyph: 0xf016
        }, {
            xtype: 'button',
            text: 'Delete',
            handler: 'customerDel',
            glyph: 0xf1f8,
            disabled: true,
            bind: {
                disabled: '{!customerlist.selection}'
            }
        }
    ]

});
