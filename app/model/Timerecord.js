Ext.define('albtec.easycom.model.Timerecord', {
    extend: 'Ext.data.Model',

    proxy: {
        type: 'rest',
        reader: 'json',
        url: 'data/timerecord',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

    fields: [
        {name: 'id', type: 'int'},
        {
            name: 'customer', type: 'int',
            reference: {
                type: 'albtec.easycom.model.Customer',
                role: 'customer',
                inverse: 'timerecords'
            }
        },
        {
            name: 'invoice', type: 'int', reference: {
                type: 'albtec.easycom.model.Invoice',
                role: 'invoice',
                inverse: 'timerecords'
            }
        },
        {name: 'rate', type: 'float'},
        {name: 'start', type: 'date', dateFormat: 'timestamp'},
        {name: 'end', type: 'date', dateFormat: 'timestamp'},
        {name: 'comment', type: 'string'},
        {
            name: 'hasInvoice', type: 'boolean', calculate: function (data) {
                return data.invoice;
            }
        }
    ]

});
