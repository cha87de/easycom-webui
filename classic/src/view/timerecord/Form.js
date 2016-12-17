/**
 * 
 */
Ext.define('albtec.easycom.view.timerecord.Form', {
	extend: 'Ext.form.Panel',
	xtype: 'timerecordform',

	requires: [
		'albtec.easycom.view.timerecord.FormController'
	],

	controller: 'timerecordform',

	layout: 'anchor',
	bodyPadding: 10,
	defaults: {
		anchor: '100%'
	},

	defaultType: 'textfield',
	items: [{
		xtype: 'hiddenfield',
		name: 'id',
		bind: '{timerecordlist.selection.id}'
	},{
		xtype: 'hiddenfield',
		name: 'customer',
		allowBlank: false,
		bind: '{timerecordlist.selection.customer}'
	},{
		xtype: 'hiddenfield',
		name: 'invoice',
		value: '',
		bind: '{timerecordlist.selection.invoice}'
	},{
		xtype: 'displayfield',
		fieldLabel: 'Customer',
		name: 'customerName',
		value: 'unknown',
		bind: '{customerlist.selection.name}'
	},{
		xtype: 'numberfield',
		fieldLabel: 'Rate / hour',
		name: 'rate',
		allowBlank: false,
		allowDecimals: true,
		decimalPrecision: 2,
		decimalSeparator: ',',
		bind: '{timerecordlist.selection.rate}'
	},{
		xtype: 'datefield',
		fieldLabel: 'Start date',
		name: 'startdate',
		format: 'd.m.Y',
		bind: '{currentTimerecord_startdate}'
	},{
		xtype: 'timefield',
		fieldLabel: 'Start time',
		name: 'starttime',
		format: 'H:i',
		bind: '{currentTimerecord_starttime}'
	},{
		xtype: 'datefield',
		fieldLabel: 'End date',
		name: 'enddate',
		format: 'd.m.Y',
		bind: '{currentTimerecord_enddate}'
	},{
		xtype: 'timefield',
		fieldLabel: 'End time',
		name: 'endtime',
		format: 'H:i',
		bind: '{currentTimerecord_endtime}'
	},{
		fieldLabel: 'Comment',
		name: 'comment',
		allowBlank: true,
		bind: '{timerecordlist.selection.comment}'
	}],
	
	buttons: [{
		text: 'Submit',
		formBind: true, //only enabled once the form is valid
		disabled: true,
		handler: 'onFormSubmit',
		glyph: 0xf0c7
	}]

});
