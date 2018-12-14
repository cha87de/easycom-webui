/**
 * 
 */
Ext.define('albtec.easycom.view.invoice.PaymentWindow', {
	extend: 'Ext.Window',
	xtype: 'invoicepaymentwindow',

	requires: [
		'albtec.easycom.view.invoice.PaymentController'
	],

	controller: 'invoicepaymentwindow',


	layout: 'fit',
	modal: true,
	title: 'Invoice Paid?',
	closeAction: 'hide',

	items: [{
		xtype: 'form',

		height: 150,

		layout: 'anchor',
		bodyPadding: 10,
		defaults: {
			anchor: '100%'
		},

		defaultType: 'textfield',
		items: [{
			xtype: 'hiddenfield',
			name: 'id',
			bind: '{invoicelist.selection.id}'
		}, {
			xtype: 'checkboxfield',
			fieldLabel: 'Paid',
			name: 'ispaid',
			bind: '{invoicelist.selection.ispaid}'
		}, {
			xtype: 'datefield',
			fieldLabel: 'Payment date',
			name: 'paymentdate',
			format: 'd.m.Y',
			bind: '{invoicelist.selection.paymentdate}'
		}],

		buttons: [{
			text: 'Submit',
			//formBind: true, //only enabled once the form is valid
			//disabled: true,
			handler: 'onFormSubmit',
			glyph: 0xf0c7
		}]
	}],

	listeners: {
		close: 'onClose'
	}

});
