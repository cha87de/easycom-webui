/**
 *
 */
Ext.define('albtec.easycom.view.timerecord.ImportForm', {
    extend: 'Ext.form.Panel',
    xtype: 'timerecordimport',

    requires: [
        'albtec.easycom.view.timerecord.ImportFormController',
        'albtec.easycom.model.Timerecord'
    ],

    controller: 'timerecordimportform',

    layout: 'anchor',
    bodyPadding: 10,
    defaults: {
        anchor: '100%'
    },

    defaultType: 'textfield',
    items: [{
        xtype: 'displayfield',
        fieldLabel: 'Customer',
        name: 'customerName',
        value: 'unknown',
        bind: '{customerlist.selection.name}'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Rate / hour',
        name: 'rate',
        allowBlank: false,
        allowDecimals: true,
        decimalPrecision: 2,
        decimalSeparator: ',',
        bind: '{customerlist.selection.defaultrate}'
    },{
        xtype: 'textfield',
        name: 'comment',
        fieldLabel: 'Comment',
    },{
        xtype: 'textarea',
        fieldLabel: 'CSV:',
        name: 'csvdata',
        allowBlank: false,
        width: 500,
    },{
        // tabular view of csv data
        xtype: 'gridpanel',
        height: 300,
        width: 400,
        fieldLabel: 'Timerecords',
        columns: [
            {text: "Start", width: 130, dataIndex: 'start', renderer: Ext.util.Format.dateRenderer('d.m.Y H:i')},
            {text: "End", width: 70, dataIndex: 'end', renderer: Ext.util.Format.dateRenderer('H:i')},
            {
                text: "Time", width: 70, renderer: function (val, meta, record, rowIndex) {
                    var diff = timeDiffCalculator(record.data["start"], record.data["end"]);
                    var diffFormatted = timeDiffFormatter(diff);
                    return diffFormatted;
                }
            },{
                text: "Sum", width: 90, renderer: function (val, meta, record, rowIndex) {
                    var diff = timeDiffCalculator(record.data["start"], record.data["end"]);
                    var sum = (diff / 1000 / 60 / 60) * record.data["rate"];
                    return Ext.util.Format.currency(sum, "€", 2, true, " ");
                }
            }
        ],
        bind: '{timerecordsimport}'
    }],

    buttons: [{
        text: 'Import',
        formBind: true,
        disabled: false,
        handler: 'onImport'
    },{
        text: 'Submit',
        // formBind: true, //only enabled once the form is valid
        disabled: false,
        handler: 'onFormSubmit',
        glyph: 0xf0c7
    }]

});
