/**
 *
 */
Ext.define('albtec.easycom.view.invoice.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'invoicelist',

    requires: [
        'albtec.easycom.model.Invoice',
        'albtec.easycom.model.InvoiceItem',
        'albtec.easycom.view.invoice.ListController'
    ],

    controller: 'invoicelist',
    reference: 'invoicelist',

    columns: [
        {text: "ID", width: 50, dataIndex: 'id'},
        {text: "Number", width: 100, dataIndex: 'number'},
        {text: "Created", width: 110, dataIndex: 'creationdate', renderer: Ext.util.Format.dateRenderer('d.m.Y')},
        {text: "Items", width: 70, dataIndex: 'items'},
        {
            text: "Sum", width: 150, dataIndex: 'sum', renderer: function (val, meta, invoice) {
                if (invoice.phantom || invoice.get("items") != -1)
                    return Ext.util.Format.currency(val, "€", 2, true, " ");

                // lazy load and calculate sum
                invoice.invoiceitems().load({
                    callback: function (records, operation, success) {
                        var sum = 0.0;
                        var items = 0;
                        Ext.each(records, function (rec) {
                            sum += rec.get('amount') * rec.get('price');
                            items++;
                        });
                        invoice.set('sum', sum);
                        invoice.set('items', items);
                        invoice.commit();
                    }
                });

                return '';
            }
        },
        {
            text: "Paid", width: 70, dataIndex: 'ispaid', xtype: 'checkcolumn',
            processEvent: function () {
                return false;
            } // make read only
        },
        {
            text: "Payment", width: 110, dataIndex: 'paymentdate', renderer: function (val, meta, invoice) {
                if (invoice.get("ispaid")) {
                    return Ext.util.Format.date(val, 'd.m.Y')
                }
                return '';
            }
        }
    ],

    bind: '{customerlist.selection.invoices}',

    tbar: [{
        xtype: 'button',
        text: 'Add Invoice',
        handler: 'addInvoice',
        glyph: 0xf016,
        disabled: true,
        bind: {
            disabled: '{!customerlist.selection}'
        }
    }, {
        xtype: 'button',
        text: 'Edit Record',
        handler: 'editInvoice',
        glyph: 0xf040,
        disabled: true,
        bind: {
            disabled: '{!invoicelist.selection||(invoicelist.selection&&invoicelist.selection.ispaid)}'
        }
    }, {
        xtype: 'button',
        text: 'Delete Record',
        handler: 'delInvoice',
        glyph: 0xf1f8,
        disabled: true,
        bind: {
            disabled: '{!invoicelist.selection||(invoicelist.selection&&invoicelist.selection.ispaid)}'
        }
    }, {
        xtype: 'button',
        text: 'Mark as Paid',
        handler: 'invoiceMarkPaid',
        glyph: 0xf058,
        disabled: true,
        bind: {
            disabled: '{!invoicelist.selection||(invoicelist.selection&&invoicelist.selection.ispaid)}'
        }
    }, {
        xtype: 'button',
        text: 'Download PDF',
        handler: 'invoiceDownload',
        glyph: 0xf019,
        disabled: true,
        bind: {
            disabled: '{!invoicelist.selection}'
        }
    }
    ]

});
