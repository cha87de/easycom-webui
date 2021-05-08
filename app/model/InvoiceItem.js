Ext.define('albtec.easycom.model.InvoiceItem', {
    extend: 'Ext.data.Model',

    proxy: {
        type: 'rest',
        reader: 'json',
        url: 'data/invoiceitem',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

    fields: [
        {name: 'id', type: 'int'},
        {
            name: 'invoice', type: 'int',
            reference: {
                type: 'albtec.easycom.model.Invoice',
                role: 'invoice',
                inverse: 'invoiceitems'
            }
        },
        {name: 'position', type: 'int'},
        {name: 'amount', type: 'float'},
        {name: 'caption', type: 'string'},
        {name: 'price', type: 'float'}

    ]
});
