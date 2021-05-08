Ext.define('albtec.easycom.model.Customer', {
    extend: 'Ext.data.Model',

    proxy: {
        type: 'rest',
        reader: 'json',
        url: 'data/customer',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

    fields: [
        {name: 'id', type: 'int'},
        {name: 'number', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'street', type: 'string'},
        {name: 'zipcode', type: 'string'},
        {name: 'city', type: 'string'},
        {name: 'taxid', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'phone', type: 'string'},
        {name: 'defaultrate', type: 'float'}
    ]
});
