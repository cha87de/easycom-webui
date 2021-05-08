/**
 *
 */
Ext.define('albtec.easycom.view.timerecord.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'timerecordlist',

    requires: [
        'albtec.easycom.model.Timerecord',
        'albtec.easycom.view.timerecord.ListController'
    ],

    title: 'Timerecords',

    controller: 'timerecordlist',
    reference: 'timerecordlist',

    columns: [
        {text: "Start", width: 130, dataIndex: 'start', renderer: Ext.util.Format.dateRenderer('d.m.Y H:i')},
        {text: "End", width: 70, dataIndex: 'end', renderer: Ext.util.Format.dateRenderer('H:i')},
        {
            text: "Time", width: 70, renderer: function (val, meta, record, rowIndex) {
                var diff = timeDiffCalculator(record.data["start"], record.data["end"]);
                var diffFormatted = timeDiffFormatter(diff);
                return diffFormatted;
            }
        },
        {text: "Rate", width: 70, dataIndex: 'rate'},
        {
            text: "Sum", width: 90, renderer: function (val, meta, record, rowIndex) {
                var diff = timeDiffCalculator(record.data["start"], record.data["end"]);
                var sum = (diff / 1000 / 60 / 60) * record.data["rate"];
                return Ext.util.Format.currency(sum, "€", 2, true, " ");
            }
        },
        {text: "Accounted", width: 100, dataIndex: 'hasInvoice', xtype: 'checkcolumn'},
        {text: "Comment", flex: 1, width: 200, dataIndex: 'comment'},
        {text: "Invoice ID", width: 100, dataIndex: 'invoice'}
    ],

    bind: '{customerlist.selection.timerecords}',

    selModel: {
        selType: 'rowmodel',
        mode: 'MULTI'
    },

    tbar: [{
        xtype: 'button',
        text: 'Add Record',
        handler: 'timerecordAdd',
        glyph: 0xf016,
        disabled: true,
        bind: {
            disabled: '{!customerlist.selection}'
        }
    }, {
        xtype: 'button',
        text: 'Add CSV',
        handler: 'timerecordAddCsv',
        glyph: 0xf016,
        disabled: true,
        bind: {
            disabled: '{!customerlist.selection}'
        }
    }, {
        xtype: 'button',
        text: 'Edit Record',
        handler: 'timerecordEdit',
        glyph: 0xf040,
        disabled: true,
        bind: {
            disabled: '{!timerecordlist.selection||(timerecordlist.selection&&timerecordlist.selection.hasInvoice)}'
        }
    }, {
        xtype: 'button',
        text: 'Set End Time',
        handler: 'timerecordEditEndTime',
        glyph: 0xf051,
        disabled: true,
        bind: {
            disabled: '{!timerecordlist.selection||(timerecordlist.selection&&timerecordlist.selection.hasInvoice)}'
        }
    }, {
        xtype: 'button',
        text: 'Delete Record',
        handler: 'timerecordDel',
        glyph: 0xf1f8,
        disabled: true,
        bind: {
            disabled: '{!timerecordlist.selection||(timerecordlist.selection&&timerecordlist.selection.hasInvoice)}'
        }
    }, {
        xtype: 'button',
        text: 'Account Records',
        handler: 'timerecordAccount',
        glyph: 0xf0d6
    }/*, '->', {
		xtype: 'checkbox', 
		boxLabel: 'show accounted', 
		inputValue: false, 
		value: false 
	}*/
    ]/*,
    
    listeners: {
	show: 'reload'
    }*/

});
