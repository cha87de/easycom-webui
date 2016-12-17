/**
 * 
 */
Ext.define('albtec.easycom.view.invoice.Editor', {
	extend: 'Ext.Panel',
	xtype: 'invoiceeditor',

	requires: [
		'albtec.easycom.view.invoice.ItemList',
		'albtec.easycom.view.invoice.EditorController'
	],

	controller: 'invoiceeditor',

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
		},{
			xtype: 'hiddenfield',
			name: 'customer',
			allowBlank: false,
			bind: '{invoicelist.selection.customer}'
		},{
			xtype: 'displayfield',
			fieldLabel: 'Customer',
			name: 'customerName',
			value: 'unknown',
			bind: '{customerlist.selection.name}'
		},{
			name: 'number',
			fieldLabel: 'Number',
			value: '',
			bind: '{invoicelist.selection.number}'
		},{
			xtype: 'datefield',
			fieldLabel: 'Creation date',
			name: 'creationdate',
			format: 'd.m.Y',
			bind: '{invoicelist.selection.creationdate}'
		}]
	},{
		xtype: 'invoiceitemlist',
		reference: 'editorInvoiceitemlist',

		height: 300,
		width: 800,

		bind: '{invoicelist.selection.invoiceitems}',

		plugins: [{
			ptype: 'rowediting',
			clicksToMoveEditor: 1,
			autoCancel: false
		}],
		
		tbar: [{
			xtype: 'button', 
			text: 'Add Item', 
			handler: 'addInvoiceItem',
			glyph: 0xf016,
			disabled: false
		},{
			xtype: 'button', 
			text: 'Remove Item', 
			handler: 'delInvoiceItem',
			glyph: 0xf1f8,
			disabled: false /*,
			bind: {
				disabled: '{!invoiceitemlist.selection}'
			}*/
		}]
	}],
	
	buttons: [{
		text: 'Submit',
		//formBind: true, //only enabled once the form is valid
		//disabled: true,
		handler: 'onFormSubmit',
		glyph: 0xf0c7
	}]

});
