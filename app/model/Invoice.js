Ext.define('albtec.easycom.model.Invoice', {
    extend: 'Ext.data.Model',

    proxy: {
        type: 'rest',
        reader: 'json',
        url: 'data/invoice',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

    fields: [
        {name: 'id', type: 'int'},
        {name: 'number', type: 'string'},
        {
            name: 'customer', type: 'int',
            reference: {
                type: 'albtec.easycom.model.Customer',
                role: 'customer',
                inverse: 'invoices'
            }
        },
        {name: 'creationdate', type: 'date', dateFormat: 'timestamp'},
        {name: 'ispaid', type: 'boolean'},
        {name: 'paymentdate', type: 'date', dateFormat: 'timestamp', defaultValue: null},
        {name: 'sum', type: 'float', persist: false},
        {name: 'items', type: 'int', persist: false, defaultValue: -1} // -1 to indicate "not yet loaded"
    ]
});
