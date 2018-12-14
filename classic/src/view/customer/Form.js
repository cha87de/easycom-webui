/**
 * This view is an example list of people.
 */
Ext.define('albtec.easycom.view.customer.Form', {
	extend: 'Ext.form.Panel',
	xtype: 'customerform',

	controller: 'customerform',

	requires: [
		'albtec.easycom.view.customer.FormController'
	],

	title: 'Customer',
	layout: 'anchor',
	bodyPadding: 10,
	defaults: {
		anchor: '100%'
	},

	bind: {
		title: '{customerlist.selection.name}{currentCustomer_status.dirty ? "*" : ""}'
	},

	defaultType: 'textfield',
	items: [{
		xtype: 'hiddenfield',
		name: 'id',
		bind: '{customerlist.selection.id}'
	}, {
		name: 'number',
		fieldLabel: 'Number',
		bind: '{customerlist.selection.number}'
	}, {
		name: 'name',
		fieldLabel: 'Name',
		bind: '{customerlist.selection.name}'
	}, {
		name: 'street',
		fieldLabel: 'Street',
		bind: '{customerlist.selection.street}'
	}, {
		name: 'zipcode',
		fieldLabel: 'Zip Code',
		bind: '{customerlist.selection.zipcode}'
	}, {
		name: 'city',
		fieldLabel: 'City',
		bind: '{customerlist.selection.city}'
	}, {
		name: 'taxid',
		fieldLabel: 'Tax ID',
		bind: '{customerlist.selection.taxid}'
	}, {
		name: 'email',
		fieldLabel: 'e-Mail',
		bind: '{customerlist.selection.email}'
	}, {
		name: 'phone',
		fieldLabel: 'Phone',
		bind: '{customerlist.selection.phone}'
	}, {
		name: 'defaultrate',
		fieldLabel: 'Default Rate',
		bind: '{customerlist.selection.defaultrate}'
	}],

	buttons: [{
		text: 'Reset',
		//glyph:OxfOOc,	
		disabled: true,
		bind: {
			disabled: '{!currentCustomer_status.dirty}'
		},
		handler: 'onFormReset'
	}, {
		text: 'Submit Changes',
		glyph: 0xf0c7,
		disabled: true,
		bind: {
			disabled: '{!currentCustomer_status.dirtyAndValid}'
		},
		handler: 'onFormSubmit'
	}]

});
