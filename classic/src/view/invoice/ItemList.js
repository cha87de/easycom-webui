/**
 *
 */
Ext.define('albtec.easycom.view.invoice.ItemList', {
    extend: 'Ext.grid.Panel',
    xtype: 'invoiceitemlist',

    requires: [
        'albtec.easycom.model.Invoice',
        'albtec.easycom.model.InvoiceItem',
    ],

    columns: [
        {
            text: "Position",
            width: 70,
            dataIndex: 'position',
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
            }
        }, {
            text: "Amount",
            width: 150,
            dataIndex: 'amount',
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
            }
        }, {
            text: "Caption",
            flex: 1,
            dataIndex: 'caption',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
            }
        }, {
            text: "Price",
            width: 150,
            dataIndex: 'price',
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
            },
            renderer: function (val, meta, record, rowIndex) {
                return Ext.util.Format.currency(val, "€", 2, true, " ");
            }
        }, {
            text: "Sum",
            width: 150,
            renderer: function (val, meta, record, rowIndex) {
                var sum = record.data["amount"] * record.data["price"];
                return Ext.util.Format.currency(sum, "€", 2, true, " ");
            }
        }
    ],

    bind: '{invoicelist.selection.invoiceitems}'

});
